// VIEW ALL
function getAllObject(type, destination){
  console.log('get all objects - type(' + type + '), destination(' + destination + ')')
  fetchAllObject(type, destination)

}
// VIEW
function getObjectById(type, id, destination){
  console.log('get object - type(' + type + '), id(' + id + '), destination(' + destination + ')')
  fetchObjectById(type, id, destination)
}

function getObjectByName(type, name, destination){
  console.log('get object - type(' + type + '), name(' + name + '), destination(' + destination + ')')
  fetchObjectByName(type, name, destination)
}
// EDIT
function updateObject(){}
// CREATE
function postObject(){}
// DELETE
function deleteObject(){}


function addProductToOrderList(id){
  console.log('adding order test - id(' + id + ')')
}

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


function templateSwith(){
  switch(type){
    case "delivery":
    case "product":
    case "order":
    case "van":
  }
}






document.getElementById('patch-product-form').addEventListener("click", function(event){
    event.preventDefault()
})
function registerClick(e) {
  e.preventDefault();
}
function registerSubmit(e) {
  e.preventDefault();
}
