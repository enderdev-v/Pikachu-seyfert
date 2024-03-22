import { StringSelectMenuInteraction, ComponentCommand } from 'seyfert';
import { ComponentType } from 'seyfert/lib/common';

export default class ClickMe extends ComponentCommand {
    componentType = ComponentType.StringSelect;
    filter(interaction: StringSelectMenuInteraction) {
        return interaction.customId === 'DropdownMenu';
    }

    run(int: StringSelectMenuInteraction) {
        console.log(int.values.length)
        const selected = int.values.length > 1 ? int.values.join(', ') : int.values.join(' ');
        return int.update({
            content: selected,
            embeds: [],
            components: []
        });
    }
}