import { Declare, Options, Command, type CommandContext, OKFunction, ContextOptions, createUserOption,  } from 'seyfert';
import { ApplicationCommandOptionType } from 'seyfert/lib/common';
const options = {
  user:  createUserOption({
    description: "user",
    type: ApplicationCommandOptionType.User,
  })
};

@Declare({
  name: 'user',
  description: 'user name'
})
@Options(options)
export default class UserCommand extends Command {
  
  async run(ctx: CommandContext<typeof options>) {
   
    const a = ctx.options.user
    await ctx.write({
      content: `User ${a?.username}`
    });
  }
}