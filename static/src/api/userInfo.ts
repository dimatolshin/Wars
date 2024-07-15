function userInfo() {
    return fetch('http://127.0.0.1:8000/main/main_info/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id:'123', name: 'Вася'})
    })
    .then(() => undefined)
}

userInfo()