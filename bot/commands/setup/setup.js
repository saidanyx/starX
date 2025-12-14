import { ModalBuilder, LabelBuilder } from "discord.js";
import { findInfoAboutGuild, getDB} from "../../services/database.js";

export async function handlerSetup(interaction) {
    await currentSettings(interaction)
}

async function currentSettings(interaction) {
	let notSpecified = 'Не указано'
	let [data] = await findInfoAboutGuild(getDB(), interaction.guildId)
	
	interaction.reply(`
🔹 Лимит приглашений на пользователя: ${data.inviteIimitPerUser ? `\`${data.inviteIimitPerUser}\`` : notSpecified}
🔹 Админ-роль: ${data.adminRole ? `<@&${data.adminRole}>` : notSpecified}
🔹 Локализация: ${data.locale ? `\`${data.locale}\`` : notSpecified}ВШ
🔹 Канал логов: ${data.logsChannel ? `<#${data.logsChannel}>` : notSpecified}

⚙️ Изменить настройки можно на dashboard: https://starX
`);

}