/// <reference path="interface.ts" />
/// <reference path="helloWorld.ts" />

var hello = new Greeter.HelloWorld("World")

hello.greet();
console.log('------------')

hello.publicMessage = "Ken sent me";
hello.greet();

console.log('------------')
var greeting : Greeter.IMessage ={ 
    Message: "Ken sent me twice!",
    Priority: 1
};

hello.greetWithMessage(greeting);
