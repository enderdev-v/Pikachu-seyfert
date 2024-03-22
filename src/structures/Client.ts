import { Client, type ParseClient, type ParseMiddlewares } from "seyfert";
import path from 'path'
import dotenv from 'dotenv';
const client = new Client();
dotenv.config()

declare module "seyfert" {

    interface UsingClient extends ParseClient<Client<true>> { }
    interface Command {
        rateLimit?: number;
    }
}
declare module 'seyfert' {
    interface InternalOptions {
        withPrefix: true | false;
    }
}

class Pikachu extends Client {
    constructor() {
        super({ commands: { prefix: (message) => ["p!"] } });
    }
    public async run() {
        await this.start();
        await this.uploadCommands();
    }
}

export { Pikachu }