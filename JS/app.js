// Workbench
function addOrderToDelivery(deliveryId, orderId, deliveryDestination, ordersDestination){
  postDeliveryToOrder(orderId, deliveryId)
  setTimeout(() => { fetchDeliveryByIdAndOrders(deliveryId, deliveryDestination, ordersDestination); }, 500)
}

// get all
function fetchAllDelivery(destination){
  fetchAllObject('delivery', destination)
}
function fetchAllVan(destination){
  fetchAllObject('van', destination)
}
function fetchAllProduct(destination){
  fetchAllObject('product', destination)
}
function fetchAllOrder(destination){
  fetchAllObject('order', destination)
}

// get
function fetchDeliveryById(id, destination){
  fetchObjectById('delivery', id, destination)
}
function fetchDeliveryByIdAndOrders(id, deliveryDestination, ordersDestination){
  fetchObjectById('delivery', id, deliveryDestination)
  fetchAllDeliveryOrders(id, ordersDestination)
}
function fetchVanById(id, destination){
  fetchObjectById('van', id, destination)
}
function fetchProductById(id, destination){
  fetchObjectById('product', id, destination)
}
function fetchProductByName(name, destination){
  fetchAllObjectWithName('product', name, destination)
}
function fetchOrderById(id, destination){
  fetchObjectById('order', id, destination)
}

// delete
function deleteDelivery(id){
  deleteObject('delivery', id)
}
function deleteVan(id){
  deleteObject('van', id)
}
function deleteProduct(id){
  deleteObject('product', id)
}
function deleteOrder(id){
  deleteObject('order', id)
}

// Get Links
function getLink(type){
  switch(type){
    case "delivery":
      return deliveryApi
    case "product":
      return productApi
    case "order":
      return orderApi
    case "van":
      return vanApi
  }
}

/*
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
*/

document.getElementById('patch-delivery-form').addEventListener("click", function(event){
  event.preventDefault()
})

document.getElementById('patch-product-form').addEventListener("click", function(event){
    event.preventDefault()
})
document.getElementById('patch-order-form').addEventListener("click", function(event){
  event.preventDefault()
})
document.getElementById('patch-van-form').addEventListener("click", function(event){
  event.preventDefault()
})
document.getElementById('add-delivery-van-form-id-field').addEventListener("click", function(event){
  event.preventDefault()
})
function registerClick(e) {
  e.preventDefault();
}
function registerSubmit(e) {
  e.preventDefault();
}