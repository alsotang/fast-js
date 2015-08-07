all: benchmark

benchmark:
	./node_modules/.bin/matcha

.PHONY: all benchmark