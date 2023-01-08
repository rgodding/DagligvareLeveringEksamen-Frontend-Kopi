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
        <td>${object.price}</td>
        <td>${object.weight}</td>
        <td><input id="product-for-order-quantity-${object.id}" type="number" class="product-create-order-table-quantity-input" value=1></td
    </tr>
    `
}
function getTableBodyProductForOrder(object){
    return `<tr>
        <td class="product-for-order-id">${object.id}</td>
        <td>${object.name}</td>
        <td id="product-for-order-price-${object.id}">${object.price}<span>kr</span></td>
        <td id="product-for-order-weight-${object.id}">${object.weight}<span>g</span></td>
        <td><input id="product-for-order-quantity-${object.id}" type="number" class="product-create-order-table-quantity-input" value=1
         onchange="updateOrderListValues(${object.id})"
         oninput="updateOrderListValues(${object.id})"></td
    </tr>
    `
}

// EDIT PRODUCT
function updateProductValue(field, value, id, destination) {
  if (value != "") {
    patch("product", field, id, value);
    setTimeout(() => {
      fetchProductById(id, destination);
    }, 500);
    updateProductRefreshInput(field);
  }
}
function updateProductValueAll(id, destination){
  if(document.getElementById('patch-product-name-input').value != ""){
    patch('product', 'name', id, document.getElementById('patch-product-name-input').value)
  }
  if(document.getElementById('patch-product-price-input').value != ""){
    patch('product', 'price', id, document.getElementById('patch-product-price-input').value)
  }
  if(document.getElementById('patch-product-weight-input').value != ""){
    patch('product', 'weight', id, document.getElementById('patch-product-weight-input').value)
  }
  setTimeout(() => {fetchProductById(id, destination)}, 500)
  updateProductRefreshInputAll()
}
async function updateProductRefreshInputAll(){
  updateProductRefreshInput('name')
  updateProductRefreshInput('price')
  updateProductRefreshInput('weight')
}
async function updateProductRefreshInput(field){
  document.getElementById('patch-product-' + field + '-input').value = ""
}

// ADD NEW PRODUCT
function createProduct(){
  let inputs = document.querySelectorAll('#add-product-input')
  if(validateCreateProduct(inputs)){
    post('product', inputs)
  }
  setTimeout(() => { fetchAllObject('product', 'add-product-view-all-table'); }, 500)
}
async function validateCreateProduct(inputs){
  let result = true
  inputs.forEach((input) => {
    if(input.value === "" || input.value === null){
      result = false
    }
  })
  return result
}

// ADD PRODUCT TO ORDER LIST FUNCTIONS
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
        let test = 'product-for-order-quantity-' + object.id
        let value = parseInt(document.getElementById(test).value)
        value += 1
        document.getElementById(test).value = value
      } else {
        html = ""
        html += getTableBodyProductForOrder(object)
        document.getElementById(destination).innerHTML = html
      }
      updateOrderListValues(id)  
    });
}
function productCreateOrder(quantity, id){
  createOrderWithProducts(id, quantity)
}
async function updateOrderListValues(id){
  let quantity = parseInt(document.getElementById('product-for-order-quantity-' + id).value)
  let price = parseInt(document.getElementById('product-for-order-price-' + id).innerText)
  let weight = parseInt(document.getElementById('product-for-order-weight-' + id).innerText)

  document.getElementById('product-create-order-total-price').innerText = (price*quantity) + "kr"
  document.getElementById('product-create-order-total-weight').innerText = (weight*quantity) + "g"
}