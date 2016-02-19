var Greeter;
(function (Greeter) {
    var HelloWorld = (function () {
        function HelloWorld(mess) {
            this.theMessage = mess;
            this.publicMessage = mess;
        }
        HelloWorld.prototype.greet = function () {
            console.log("Hello " + this.theMessage);
            console.log("Hello " + this.publicMessage);
        };
        HelloWorld.prototype.greetWithMessage = function (message) {
            if (message.Priority) {
                console.log("IMPORTANT! " + message.Message);
            }
            else {
                console.log(message.Message);
            }
        };
        return HelloWorld;
    })();
    Greeter.HelloWorld = HelloWorld;
})(Greeter || (Greeter = {}));
var hello = new Greeter.HelloWorld("World");
hello.greet();
console.log('------------');
hello.publicMessage = "Ken sent me";
hello.greet();
console.log('------------');
var greeting = {
    Message: "Ken sent me twice!",
    Priority: 1
};
hello.greetWithMessage(greeting);
