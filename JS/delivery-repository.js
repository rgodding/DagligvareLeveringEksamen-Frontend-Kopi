const deliveryApi = "http://localhost:8080/api/v1/delivery";

function getTableHeadDelivery(){
    return `<thead>
        <tr>
            <th class="delivery-table-head-id">ID</th>
            <th class="delivery-table-head-deliveryDate">DELIVERY DATE</th>
            <th class="delivery-table-head-fromWarehouse">WAREHOUSE</th>
            <th class="delivery-table-head-destination">DESTINATION</th>
        </tr>
    </thead>
    `
}
function getTableBodyDelivery(object){
    return `<tr>
        <td>${object.id}</td>
        <td>${object.deliveryDate}</td>
        <td>${object.fromWarehouse}</td>
        <td>${object.destination}</td>
    </tr>
    `
}

// EDIT DELIVERY
function updateDeliveryValue(field, value, id, destination){
  if(value != ""){
  patch('delivery', field, id, value)
  setTimeout(() => {fetchDeliveryById(id, destination)}, 500)
  updateDeliveryRefreshInput(field)
  }
}
function updateDeliveryValueAll(id, destination){
  if(document.getElementById('patch-delivery-deliveryDate-input').value != ""){
  patch('delivery', 'deliveryDate', id, document.getElementById('patch-delivery-deliveryDate-input').value)
  }
  if(document.getElementById('patch-delivery-fromWarehouse-input').value != ""){
    patch('delivery', 'fromWarehouse', id, document.getElementById('patch-delivery-fromWarehouse-input').value)
  }
  if(document.getElementById('patch-delivery-destination-input').value != ""){
    patch('delivery', 'destination', id, document.getElementById('patch-delivery-destination-input').value)
  }
  
  setTimeout(() => {fetchDeliveryById(id, destination)}, 500)
  updateDeliveryRefreshInputAll()
}
async function updateDeliveryRefreshInputAll(){
  updateDeliveryRefreshInput('deliveryDate')
  updateDeliveryRefreshInput('fromWarehouse')
  updateDeliveryRefreshInput('destination')
}
async function updateDeliveryRefreshInput(field){
  document.getElementById('patch-delivery-' + field + '-input').value = ""
}

// ADD NEW DELIVERY
function createDelivery(){
  let inputs = document.querySelectorAll('#add-delivery-input')
  if(validateCreateDelivery(inputs)){
    post('delivery', inputs)
  }
  setTimeout(() => { fetchAllObject('delivery', 'add-delivery-view-all-table'); }, 500)
}
async function validateCreateDelivery(inputs){
  let result = true
  inputs.forEach((input) => {
    if(input.value === "" || input.value === null){
      result = false
    }
  })
  return result
}
