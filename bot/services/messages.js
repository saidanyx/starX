import { EmbedBuilder } from "discord.js"

export let messages = {}

export function returnDefaultMessages() {
    return {
        inviteCreate: `Ваше персональное приглашение: https://discord.gg/{code} ✨`,
        inviteStats: `По вашему приглашению {code} присоединилось {uses} уникальных участников. 📊`,
        inviteCreateError: `Похоже, ссылка-приглашение уже была выдана вашему аккаунту`,
        inviteStatsError: `Похоже, у вас ещё нет активного приглашения 😅`,
    }
}

export function initCurrentMessages(messagesObject) {
    for (const message of messagesObject) {

        messages[message.title] = (params = {}) => {
            return message.description.replace(/\{(\w+)\}/g, (_, key) => {
                return params[key] ?? "";
            });
        };
    }

    console.log(messages)
    console.log("🟩 Сообщения зарегистрированы");
}
