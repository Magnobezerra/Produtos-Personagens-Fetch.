async function produtos() {
    let produtos = await fetch("https://fakeapi.net/products")
    let produtosJson = await produtos.json()
    // console.log(produtos);
    
    
        produtosJson.data.map((produtos) => {
        let tr = document.createElement("tr")
        tr.innerHTML += `
        <td>${produtos.title}</td>
        <td>${produtos.price}</td>
        <td>${produtos.description}</td>
        <td>${produtos.category}</td>
        <td><img src="${produtos.image}"></td>

        `
        let tbody = document.querySelector("tbody")
        tbody.appendChild(tr)
    })  

}

produtos()
