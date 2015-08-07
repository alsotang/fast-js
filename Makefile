all: benchmark

benchmark:
	@./node_modules/.bin/matcha

build:
	@./build.js

.PHONY: all benchmark build