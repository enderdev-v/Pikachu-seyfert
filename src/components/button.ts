import { ButtonInteraction, ComponentCommand } from 'seyfert';
import { ComponentType } from 'seyfert/lib/common';

export default class ClickMe extends ComponentCommand {
    componentType = ComponentType.Button;
    filter(interaction: ButtonInteraction) {
        return interaction.customId === 'D';
    }

    run(interaction: ButtonInteraction) {
        return interaction.update({
            content: 'lol',
            embeds: [],
            components: []
        });
    }
}