all: benchmark

install:
	@npm install

benchmark bench: install
	@./node_modules/.bin/matcha -R plain ${file}

build: install
	@./build.js

.PHONY: all install benchmark build