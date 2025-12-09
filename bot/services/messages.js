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

let oldMessages = returnDefaultMessages()

export function createCurrentMessages() {
    console.log("работает")
    for (let mess in oldMessages) {
        messages[mess] = function (...args) {
            let i = 0
            return oldMessages[mess].replace(/\{(\w+)\}/g, () => args[i++] || '')
        }
    }
    console.log(messages)
}