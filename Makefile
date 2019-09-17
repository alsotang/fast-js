all: benchmark

install:
	@npm install

benchmark bench:
	@npx matcha -R plain ${file}

build:
	@./build.js

.PHONY: all install benchmark build