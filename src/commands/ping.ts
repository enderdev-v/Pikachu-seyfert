import { Declare, Command, type CommandContext } from 'seyfert';

@Declare({
  name: 'ping',
  description: 'mucho ping'
})
export default class PingCommand extends Command {

  async run(ctx: CommandContext) {
    
    await ctx.write({
      content: `Pong! ${ctx.client.gateway.latency}ms`
    });
  }
}