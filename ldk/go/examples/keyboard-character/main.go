package main

import (
	loop "github.com/open-olive/loop-development-kit/ldk/go/example/keyboard-character/loop"
)

func main() {
	if err := loop.Serve(); err != nil {
		panic(err)
	}
}