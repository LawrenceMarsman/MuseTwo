package main

import (
	"strconv"
	"syscall/js"
)

func add(this js.Value, i []js.Value) interface{} {
	js.Global().Set("output", js.ValueOf(i[0].Int()+i[1].Int()))
	println(js.ValueOf(i[0].Int() + i[1].Int()).String())
	return nil
}

func getVal(this js.Value, i []js.Value) interface{} {
	value1 := js.Global().Get("document").Call("getElementById", i[0].String()).Get("value").String()
	value2 := js.Global().Get("document").Call("getElementById", i[1].String()).Get("value").String()

	int1, _ := strconv.Atoi(value1)
	int2, _ := strconv.Atoi(value2)

	js.Global().Get("document").Call("getElementById", i[2].String()).Set("value", int1+int2)
	return nil
}

func printVal(this js.Value, i []js.Value) interface{} {
	println("cool man")
	return nil
}

func registerCallbacks() {
	js.Global().Set("print", js.FuncOf(printVal))
}

func main() {
	c := make(chan struct{}, 0)
	registerCallbacks()
	println("this is definitivily working!!!!")
	<-c
}

