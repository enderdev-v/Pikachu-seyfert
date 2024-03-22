// @ts-check is better
const { config } = require('seyfert');
const dotenv = require('dotenv');
dotenv.config()
const token = process.env.token;
if (!token) throw new Error("Pasado de lanza pon token")
const seyfert = config.bot({
    token: token,
    intents: ["Guilds", 'MessageContent', 'GuildMessages', 'GuildMembers', 'GuildWebhooks'],
    locations: {
        base: "src",
        output: "src", // No touch
        commands: "commands",
        events: "events",
        components: "components"
    } 
 });
module.exports = seyfert