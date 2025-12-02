import { Routes, REST, SlashCommandBuilder } from "discord.js";

async function registerCommands() {
    let commands = [
        new SlashCommandBuilder()
        .setName("invite")
        .setDescription("create invite")
        .addSubcommand(sub => sub
                .setName("create")
                .setDescription("123")
                .addStringOption(opt => opt
                        .setName("lifetime")
                        .setDescription("456")
                        .setRequired(true)
                        .addChoices(
                            { name: '1 час', value: '3600' },
                            { name: '12 часов', value: '43200' },
                            { name: '24 часа', value: '86400' },
                            { name: '7 дней', value: '604800' },
                            { name: 'Бесконечно', value: '0' },
                        )
                )

        )
    ]

    const rest = new REST({version: 10}).setToken(process.env.token)
    
    try {
        await rest.put(
            Routes.applicationCommands(process.env.clientId),
            {body: commands.map(r => r.toJSON())}
        )
        console.log("🟩 Команду успешно зареганы")
    } catch (error) {
        console.log("🟥 Ошибка при регистрации команд", error)
    }
    
}

export default registerCommands