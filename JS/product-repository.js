const productApi = "http://localhost:8080/api/v1/product";

function getTableHeadProduct(){
    return `<thead>
        <tr>
            <th class="product-table-head-id">ID</th>
            <th class="product-table-head-name">NAME</th>
            <th class="product-table-head-price">PRICE</th>
            <th class="product-table-head-weight">WEIGHT</th>
        </tr>
    </thead>
    `
}

function getTableBodyProduct(object){
    return `<tr onclick="addProductToOrderList(${object.id}, 'product-create-order-table-body')">
        <td>${object.id}</td>
        <td>${object.name}</td>
        <td>${object.price}</td>
        <td>${object.weight}</td>
    </tr>
    `
}
function getTableBodyProductForOrder(object){
    return `<tr>
        <td>${object.id}</td>
        <td>${object.name}</td>
        <td>${object.price}</td>
        <td>${object.weight}</td>
        <td><input type="number" class="product-create-order-table-quantity-input" value=1></td
    </tr>
    `
}


function addProductToOrderList(id, destination) {
  fetch(getLink('product') + "/" + id)
    .then((response) => response.json())
    .then((object) => {
      html = document.getElementById(destination).innerHTML
      html += getTableBodyProductForOrder(object)
      document.getElementById(destination).innerHTML = html
    });
}