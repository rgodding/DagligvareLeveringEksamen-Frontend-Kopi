const orderApi = "http://localhost:8080/api/v1/order";

function getTableHeadOrder(){
    return `<thead>
        <tr>
            <th class="order-table-head-id">ID</th>
            <th class="order-table-head-quantity">QUANTITY</th>
            <th class="order-table-head-product">PRODUCT</th>
            <th class="order-table-head-delivery">DELIVERY</th>
        </tr>
    </thead>
    `
}
function getTableBodyOrder(object){
    let result = `<tr>
        <td>${object.id}</td>
        <td>${object.quantity}</td>`
        if(object.product != null){
          result +=`
          <td>${object.product.name}</td>
          `
        } else {
          result +=`
          <td>NO PRODUCT ASSIGNED</td>
          `
        }
        if(object.delivery != null){
          result +=`
          <td>DATE: ${object.delivery.deliveryDate} Destination: ${object.delivery.destination}</td>
          `
        } else {
          result +=`
          <td>NO DELIVERY ASSIGNED</td>
          `
        }
        result += `
        </tr>
        `
        return result
}
// EDIT ORDER
function updateOrderValue(field, value, id, destination){
  switch (field) {
    case "quantity":
      patch("order", field, id, value);
      break;
    case "product":
      postProductToOrder(id, value);
      break;
    case "delivery":
      postDeliveryToOrder(id, value);
      break;
  }
  setTimeout(() => {fetchOrderById(id, destination)}, 500)
  updateOrderRefreshInput(field)
}
function updateOrderValueAll(id, delivery){
  patch('order', 'quantity', id, document.getElementById('patch-order-quantity-input').value)
  setTimeout(() => {postProductToOrder(id, document.getElementById('patch-order-product-input').value)}, 250)
  setTimeout(() => {postDeliveryToOrder(id, document.getElementById('patch-order-delivery-input').value)}, 500)
  setTimeout(() => {fetchOrderById(id, delivery)}, 750)
  setTimeOut(() => {updateOrderRefreshInputAll()}, 1000)
}
async function updateOrderRefreshInputAll(){
  updateOrderRefreshInput('quantity')
  updateOrderRefreshInput('product')
  updateOrderRefreshInput('delivery')
}
async function updateOrderRefreshInput(field){
  document.getElementById('patch-order-' + field + '-input').value = ""
}
// ADD NEW ORDER
function createOrder(){
  let inputs = document.querySelectorAll('#add-order-input')
  if(validateCreateOrder(inputs)){
    post('order', inputs)
  }
  setTimeout(() => { fetchAllObject('order', 'add-order-view-all-table'); }, 500)
}
function validateCreateOrder(inputs){
  let result = true
  inputs.forEach((input) => {
    if(input.value === "" || input.value === null){
      result = false
    }
  })
  return result
}
