const url = 'http://localhost:3000/toys'

export const getToys = () => {
    return fetch(url)
    .then(response => response.json())
}

export const updateToy = toy => {
    const configObj = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(toy)
    }
    fetch(`${url}/${toy.id}`, configObj)
    // .then(response => response.json())
    // .then(json => console.log(json))
}

export const createToy = toy => {
    getToys().then(json => {
        toy.id = json.length + 1
        toy.likes = 0
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(toy)
        }
        fetch(url, configObj)
    })
}

export const deleteToy = toyId => {
    const configObj = {
        method: "DELETE",
    }
    fetch(`${url}/${toyId}`, configObj)
}