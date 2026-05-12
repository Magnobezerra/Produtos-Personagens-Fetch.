// API'S
//Fetch feat. async e await


 async function listarPersonagens() {
    let personagens = await fetch("https://rickandmortyapi.com/api/character")
    let personagensJson = await personagens.json()
    console.log(personagensJson.results);
    personagensJson.results.map((personagem) => {
        let tr = document.createElement("tr")
        tr.innerHTML += `
        <td>${personagem.name}</td>
        <td>${personagem.gender}</td>
        <td>${personagem.species}</td>
        <td><img src="${personagem.image}"></td>

        `
        let tbody = document.querySelector("tbody")
        .appendChild(tr)
    })  

}

listarPersonagens()




