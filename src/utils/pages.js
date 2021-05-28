export const IDS = {
    passcode: "passcode",
    nickname: "nickname",
    chat: "chat"
}

export const PASSCODE_PAGE = {
    id: IDS.passcode,
    title: "Welcome to the chat",
    label: "Enter the secret key:",
    type: "password",
    placeholder: "Passcode",
    next: IDS.nickname
}

export const NICKNAME_PAGE = {
    id: IDS.nickname,
    title: "Almost there..",
    label: "Enter your nickname",
    type: "text",
    placeholder: "Nickname",
    next: IDS.chat
}