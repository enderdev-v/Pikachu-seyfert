import { Declare, Command, type CommandContext } from 'seyfert';
import { Embed } from "seyfert"

@Declare({
  name: 'embed',
  description: 'A sample embedding'
})
export default class PingCommand extends Command {

  async run(ctx: CommandContext) {
    const embed = new Embed()
    .setTitle("Title")
    .setDescription("A Description")
    await ctx.write({
      embeds: [embed]
    });
  }
}