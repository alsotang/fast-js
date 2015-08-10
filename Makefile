all: benchmark

install:
	@npm install

benchmark: install
	@./node_modules/.bin/matcha -R plain

build: install
	@./build.js

.PHONY: all install benchmark build