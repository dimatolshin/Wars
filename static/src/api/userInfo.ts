export function userInfo() {
    return fetch('/api/main/main_info/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({tg_id:'123', name: 'Вася'})
    })
    .then(() => undefined)
}

