// Add Orders To Delivery

//PREVIEW ORDERS
function activateOrderEditing(id) {
  fetch(orderApi + "/find-delivery-product-order/" + id)
    .then((response) => response.json())
    .then((object) => {
      let html = "";
      html += getTableHead("order");
      object.forEach((object) => {
        html += getTableBody("order", object);
      });
      console.log(object);
      document.getElementById("table-add-orders-to-delivery").innerHTML = html;
    });
}

function previewOrder(id) {
  fetch(getLink("order") + "/" + id)
    .then((response) => response.json())
    .then((object) => {
      html = "";
      html += getTableHead("order");
      html += getTableBody("order", object);
      document.getElementById("table-preview-add-order").innerHTML = html;
    });
}

// ADD ORDER
function addOrderToDelivery(orderId, id) {
  fetch("http://localhost:8080/api/v1/delivery" + "/" + id)
    .then((response) => response.json())
    .then((object) => {
      postDeliveryForm2(object, orderId);
    });
}
async function postDeliveryForm2(object, id) {
  let response = await fetch(
    "http://localhost:8080/api/v1/productorder/add-delivery/" + id,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    }
  );
}
