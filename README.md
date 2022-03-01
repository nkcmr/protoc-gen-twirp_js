# protoc-gen-twirp_js

This is a `protoc` plugin that will enable the usage of protocol buffers (and JSON) for the purpose of creating a fully code-generated transport layer for Cloudflare workers and the web eco-system.

I originally created this project because I was doing a lot of work with [Cloudflare's durable objects](https://developers.cloudflare.com/workers/learning/using-durable-objects/) which themselves act like tiny microservices. They are only reachable via a special `fetch()` call in the workers runtime that allows you to make HTTP requests. What I always ended up implementing on the Durable Object side was an RPC server; and writing HTTP encoding/decoding logic every time was very tedious and banal. Enter [Twirp](https://github.com/twitchtv/twirp)!

Twirp is an RPC framework that is very similar to gRPC, only that it has been dramatically simplified in a way that makes it actually fairly easy to re-implement in other ways.

## install

**dependencies:**

- `protoc` — This tool is just a _plugin_ into a bigger toolchain that is the `protoc` toolchain. If you don't already have that installed, go ahead and do that: https://grpc.io/docs/protoc-installation/
- `node` — This plugin is written in JavaScript and runs in Node.js (v16 LTS should work fine)
- `npm` — Is most likely already installed if you installed `node` already.

once those things are installed, now we can start to use a "plugin." in the protobuf compiler ecosystem, all the code generators are just plugins, some are officially supported by Google and some are just 3rd party (like this one!).

The `protoc` command relies on the plugins being findable via your shell's (bash/zsh) path under a very specific name (hence the ugly name of this repo).

Now we can install this plugin:

```
npm install -g @nkcmr/protoc-gen-twirp_js
```

You can verify that it is installed by asking your shell where it is installed:

```
❯ which protoc-gen-twirp_js
/Users/nkcmr/.npm/bin/protoc-gen-twirp_js
```

Your output should be something like that (if it isn't, maybe give your terminal/shell a reload).

## getting started / example

The basic concept of protobuf/Twirp is that as a programmer, you would start out by describing your service and it's methods, as well as what those methods take as input and return as output, kind of like this:

```protobuf
syntax = "proto3"; // required

package strings.reverser; // not required but good to use

// google defines a number of "utility" protobufs for things
// like timestamp and other things.
import "google/protobuf/timestamp.proto";

// StringReverseRequest represents the "input" of a particular
// method on your service (defined below).
message StringReverseRequest {
	string user_string = 1;
}

// StringReverseResponse would be the response. Notice the
// convention of `${MethodName}Request` and
// `${MethodName}Response`.
message StringReverseResponse {
  string reversed_string = 1;
  google.protobuf.Timestamp reversed_at = 2;
}

// Reverser here is the actual "server" being defined in
// by listing all of the methods or endpoints it has.
service Reverser {
  rpc StringReverse(StringReverseRequest) returns (StringReverseResponse);
}
```

Now, we save that file to `reverser.proto` and run this command:

```
             protoc --twirp_js_out=. ./reverser.proto
#                         ▲        ▲        ▲
# ┌───────────┐           │        │        │
# │  plugin   ├───────────┘        │        │
# └───────────┘                    │        │
#         ┌───────────┐            │        │
#         │  output   │            │        │
#         │ directory │────────────┘        │
#         └───────────┘  ┌───────────────┐  │
#                        │ input .proto  │  │
#                        │  files (1+)   │──┘
#                        └───────────────┘
```

The result should be that we see a number of files produced:

```
❯ ls
reverser.proto # our original file
strings.reverser.pb.d.ts
strings.reverser.pb.js
strings.reverser.twirp.d.ts
strings.reverser.twirp.js
```

The files that have `.pb.` in them are the protobuf classes for your code. These are the JS version of the `message` blocks in the `.proto` file, allowing your code to build and pass around instances of those messages.

The files that have `.twirp.` in them are for sending and receiving Twirp RPC calls from your code. To implement a server (in this example), we would use the `handleReverserServer`  function from `strings.reverser.twirp.js` which requires an implementation of the service, like so (in a CF worker example):

```js
import { handleReverserServer } from './strings.reverser.twirp';
import { strings, google } from './strings.reverser.pb';

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

function handleRequest(request) {
  return handleReverserServer(request, {
    async StringReverse(request) {
      return strings.reverser.StringReverseResponse.create({
        reversed_string: request.user_string.reverse(),
        reversed_at: google.protobuf.Timestamp.create({
          seconds: Math.floor(Date.now()/1000)
        })
      })
    }
  })
}
```

The "client" or "browser" end of this code might look something like this:

```js
import { sendReverserProtobufRequest } from './strings.reverser.twirp';
import { strings } from './strings.reverser.pb';

async function someBusinessLogic() {
  const response = await sendReverserProtobufRequest(
    'StringReverse',
    strings.reverser.StringReverseRequest.create({ user_string: "foobar" }),
    {}
  );
  console.log(response.reversed_string); // => raboof
}
```

Now that we have our encoding/decoding/transport code automatically generated, this enables us to focus on the actual implementation of our services instead of finicky boilerplate logic.

## plugin options

The plugin itself has a few options that can help with what gets generated, to pass in options to a protobuf plugin, it usually looks like this:

```
protoc --twirp_js_out=foo=bar,beep=boop:. ./my.proto
```

With the above, we've passed a dictionary of sorts that has:

- key: "foo", value: "bar"
- key: "beep", value: "boop"

The real options are the following:

- `no_emit_types` — when set to a non-falsy string, will cause the `.d.ts` files to not be emitted.
- `module` — can be set to 2 different options:
  - `commonjs` — will cause the output to use `require(...)` calls to do imports.
  - `es6` — (default) will cause the output to use `import {...} from './...'` syntax to import other code.
- `gen`  is a pipe (`|`) delimited string that can can have 3 distinct values in the set: `proto`, `server`, and `client`. Passing this option will cause the output to only contain what was asked to be generated, so passing `gen=proto|client` will cause the `.pb` files and the `.twirp` files to be generated, but the `.twirp` file will only contain "client-side" code.
- `basename` — can be set to ensure that the basename of the output files to be fixed to a particular string. So passing `basename=my_rpc_files` will cause output file names to be `my_rpc_files.pb.js` and `my_rpc_files.pb.d.ts` and so on.


### license

```
MIT License

Copyright (c) 2022 Nick Comer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

