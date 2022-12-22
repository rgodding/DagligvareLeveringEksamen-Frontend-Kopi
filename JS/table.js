function getTableHead(type){
    switch(type){
        case "product":
            return getProductHead()
    }
}

function getProductHead(){
    return `
    <thead>
    <tr>
        <th scope="col">ID</th>
        <th scope="col">NAME</th>
        <th scope="col">PRICE</th>
        <th scope="col">WEIGHT</th>
    </tr>
    </thead>
    <tbody>
    `
}

function getTableBodyProductListToOrder(object){
    return `<tr onclick="addProductToOrder(${object.id}, 'product')">
    <td>${object.id}</td>
    <td>${object.name}</td>
    <td>${object.price} kr.</td>
    <td>${object.weight} g.</td>
    </tr>
    `
}

function getTableBodyProductToOrderList(object){
    return `<tr>
    <td>${object.id}</td>
    <td>${object.name}</td>
    <td id="product-for-order-price">${object.price}</td>
    <td id="product-for-order-weight">${object.weight}</td>
    </tr>
    `

}


function getTableBody(type, object){
    return `<tr>
    <td>${object.id}</td>
    <td>${object.name}</td>
    <td>${object.price} kr</td>
    <td>${object.weight} g</td>
    </tr>
    `
}

function getTableEnd(){
    return `
        </tbody>
    </table>`
}