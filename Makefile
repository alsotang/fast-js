all: run

compile:
	@./compile.js
run: compile
	@./run.js

.PHONY: all run compile