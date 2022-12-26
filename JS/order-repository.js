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
          console.log('delivery found')
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
function editOrderPreview(id, destination){
  fetchObjectById('order', id, destination)
}
function editOrderProductPreview(id, destination){
  fetchObjectById('product', id, destination)
}
function updateOrderValue(field, value, id, destination){
  switch(field){
    case "quantity":
      patch('order', field, id, value)
      break
      case "product":
        postProductToOrder(id, value)
      break
  }
  setTimeout(() => {editOrderPreview(id, destination)}, 500)
  updateOrderRefreshInput(field)
}
function updateOrderValueAll(id, delivery){
  patchOrder('order', 'quantity', id, document.getElementById('patch-order-quantity-input').value)
  patchOrder('order', 'product', id, document.getElementById('patch-order-product-id-input').value)
  patchOrder('order', 'delivery', id, document.getElementById('patch-order-delivery-id-input').value)
  setTimeout(() => {editOrderPreview(id, delivery)}, 500)
  updateOrderRefreshInputAll()
}
function updateOrderRefreshInputAll(){
  console.log('no field')
  updateOrderRefreshInput('quantity')
  updateOrderRefreshInput('product')
  updateOrderRefreshInput('delivery')
}
function updateOrderRefreshInput(field){
  if(field == "product" || field == "delivery")[
    field += "-id"
  ]
  document.getElementById('patch-order-' + field + '-input').value = ""
}
// ADD NEW ORDER
function createOrder(){
  let inputs = document.querySelectorAll('#add-order-input')
  if(validateCreateOrder(inputs)){
    post('order', inputs)
  }
  console.log('getting object')
  setTimeout(() => { getAllObject('order', 'add-order-view-all-table'); }, 500)
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

// DELETE ORDER
function deleteOrder(id){
  deleteObject('order', id)
}
function deleteOrderPreview(id){
  getObjectById('order', id, 'delete-order-preview-table')
}