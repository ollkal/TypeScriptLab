/// <reference path="interface.ts" />
module Greeter {
    export class HelloWorld implements IGreeter{
        private theMessage: string;
        publicMessage: string;

        constructor(mess: string) {
            this.theMessage = mess;
            this.publicMessage = mess;
        }

        greet(): void {
            console.log("Hello " + this.theMessage);
            console.log("Hello " + this.publicMessage);
        }

        greetWithMessage(message: IMessage) {
            if (message.Priority) {
                console.log("IMPORTANT! " + message.Message);
            } else {
                console.log(message.Message);
            }
        }
    }
}