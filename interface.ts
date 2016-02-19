module Greeter{
    export interface IGreeter{
        greet(): void ;
        greetWithMessage(message: IMessage);
    }
    export interface IMessage {
        Message: string,
        Priority?: number
    }
}