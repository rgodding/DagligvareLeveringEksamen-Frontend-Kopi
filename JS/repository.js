// Fetch All
function fetchAllObject(type, destination) {
  // USED
  fetch(getLink(type))
    .then((response) => response.json())
    .then((object) => {
      let html = "";
      html += getTableHead(type);
      object.forEach((object) => {
        html += getTableBody(type, object);
      });
      document.getElementById(destination).innerHTML = html;
    });
}
function fetchAllObjectWithName(type, input, destination){
  fetch(getLink(type) + '/find-all-by-name/' + input)
  .then((response) => response.json())
  .then((object) => {
    let html = "";
    html += getTableHead(type)
    object.forEach((object) => {
      html += getTableBody(type, object)
    })
    document.getElementById(destination).innerHTML = html;
  })
}
function fetchAllVanDeliveries(id, destination){
  console.log('fetching all deliveries')
  let type = 'delivery'
  fetch(getLink(type) + '/find-deliveries-by-van-id/' + id)
    .then((response) => response.json())
    .then((object) => {
      let html = "";
      html += getTableHead(type);
      object.forEach((object) => {
        html += getTableBody(type, object);
      });
      document.getElementById(destination).innerHTML = html;
    });
}
// Fetch
function fetchObjectById(type, id, destination) {
  fetch(getLink(type) + "/" + id)
    .then((response) => response.json())
    .then((object) => {
      html = "";
      html += getTableHead(type);
      html += getTableBody(type, object);
      document.getElementById(destination).innerHTML = html;
    });
}
// Patch
function patch(type, field, id, value) {
  const responseFlow = fetch(getLink(type) + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: generatePatchBody(type, field, value),
  });
}

// Create
function post(type, input){
  postObject(type, generateForm(type, input))
}
function postProductToOrder(id, value){
  postProductToOrderFunction(id, generateObjectForObjectForm(value)) 
}
function postDeliveryToOrder(id, value){
  postDeliveryToOrderFunction(id, generateObjectForObjectForm(value))
}
function postVanToDelivery(id, value){
  postVanToDeliveryFunction(id, generateObjectForObjectForm(value))
}
async function postVanToDeliveryFunction(id, formObject){
  let response = await fetch(getLink('delivery') + '/add-van/' + id, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  });
}
async function postDeliveryToOrderFunction(id, formObject){
  let response = await fetch(getLink('order') + '/add-delivery/' + id, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  });
}
async function postProductToOrderFunction(id, formObject){
  let response = await fetch(getLink('order') + '/add-product/' + id, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  });
}
async function postObject(type, formObject) {
  console.log('posting object(' + type + ')')
  console.log('object(' + formObject + ')')
  let response = await fetch(getLink(type), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  });
}
// Delete
function deleteObject(type, id) {
  fetch(getLink(type) + "/" + id, {
    method: "DELETE",
  })
    .then((res) => {
      console.log("TODO: Make site more responsive here");
    })
    .catch((error) => {
      console.log(error);
    });
}