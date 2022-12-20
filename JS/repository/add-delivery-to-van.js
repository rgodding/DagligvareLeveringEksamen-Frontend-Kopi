// Add Deliverties to Vans

// view van deliveries
function previewVanDeliveries(id) {
  fetch("http://localhost:8080/api/v1/delivery/find-van-deliveries/" + id)
    .then((response) => response.json())
    .then((object) => {
      html = "";
      html += getTableHead("delivery");
      object.forEach((object) => {
        html += getTableBody("delivery", object);
      });
      document.getElementById("table-add-delivery-preview").innerHTML = html;
    });
}

// edit van deliveries
function addDeliveryToVan(vanId, deliveryId) {
  fetch("http://localhost:8080/api/v1/van" + "/" + vanId)
    .then((response) => response.json())
    .then((object) => {
      addDeliveryToVan2(object, deliveryId);
    });
}
async function addDeliveryToVan2(object, deliveryId) {
  let response = await fetch(
    "http://localhost:8080/api/v1/delivery/add-van/" + deliveryId,
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
