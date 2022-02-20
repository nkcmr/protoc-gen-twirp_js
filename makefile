src/plugin.pb.js: node_modules/.package-lock.json
	mkdir -p $(dir $@)
	./node_modules/.bin/pbjs \
		-t static-module \
		-w commonjs \
		--no-service --force-number --force-message --sparse \
		--keep-case \
		-o $@ \
		./node_modules/google-proto-files/google/protobuf/descriptor.proto \
		./node_modules/google-proto-files/google/protobuf/compiler/plugin.proto
	./node_modules/.bin/prettier --write $@

src/plugin.pb.d.ts: src/plugin.pb.js
	./node_modules/.bin/pbts -o $@ ./$<
	./node_modules/.bin/prettier --write $@

.PHONY: deps
deps: node_modules/.package-lock.json

node_modules/.package-lock.json: package.json package-lock.json
	npm i
