import { Declare, Command, type CommandContext, ComponentCommand } from 'seyfert';
import { ActionRow, Button, StringSelectMenu, StringSelectOption } from "seyfert";
import { ButtonStyle } from 'seyfert/lib/common';

@Declare({
    name: 'component',
    description: 'Fua'
})

export default class CompCommand extends Command {
    async run(ctx: CommandContext) {

        const button = new Button()
            .setCustomId("D")
            .setLabel("Click me!")
            .setStyle(ButtonStyle.Success)

        const buttonRow = new ActionRow()
            .addComponents(button)


        const menu = new StringSelectMenu()
            .setCustomId("DropdownMenu")
            .setValuesLength({min: 1, max: 2})
            .addOption(
                new StringSelectOption().setLabel("mod").setValue("mod"),
                new StringSelectOption().setLabel("modded").setValue("modded"),
                new StringSelectOption().setLabel("modding").setValue("modding")
            )

        const menuRow = new ActionRow()
            .addComponents(menu);

        ctx.write({ content: "Probando", components: [buttonRow, menuRow] });
    }
}
