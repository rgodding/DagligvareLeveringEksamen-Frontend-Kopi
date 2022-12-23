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
        <td>${object.price} kr</td>
        <td>${object.weight} g</td>
    </tr>
    `
}
function getTableBodyProductForOrder(object){
    return `<tr>
        <td class="product-for-order-id">${object.id}</td>
        <td>${object.name}</td>
        <td>${object.price} kr</td>
        <td>${object.weight} g</td>
        <td><input id="product-for-order-quantity-${object.id}" type="number" class="product-create-order-table-quantity-input" value=1></td
    </tr>
    `
}
function getTableBodyProductForOrder(object){
    return `<tr>
        <td class="product-for-order-id">${object.id}</td>
        <td>${object.name}</td>
        <td>${object.price} kr</td>
        <td>${object.weight} g</td>
        <td><input id="product-for-order-quantity-${object.id}" type="number" class="product-create-order-table-quantity-input" value=1></td
    </tr>
    `
}



function addProductToOrderList(id, destination) {
  let productId = document.querySelectorAll(".product-for-order-id");
  let exists = false;
  productId.forEach((productId) => {
    if (id == productId.innerHTML) {
      exists = true;
    }
  });

  fetch(getLink("product") + "/" + id)
    .then((response) => response.json())
    .then((object) => {
      if (exists) {
        console.log("exists");
        let test = 'product-for-order-quantity-' + object.id
        let value = parseInt(document.getElementById(test).value)
        value += 1
        document.getElementById(test).value = value
      } else {
        html = ""
        html += getTableBodyProductForOrder(object)
        document.getElementById(destination).innerHTML = html
        /*
        html = document.getElementById(destination).innerHTML;
        html += getTableBodyProductForOrder(object);
        document.getElementById(destination).innerHTML = html;
        */
      }
    });
}
