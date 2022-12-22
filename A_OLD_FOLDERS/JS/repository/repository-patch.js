// Patch
function patchReview(type, id, destination) {
  fetch(getLink(type) + "/" + id)
    .then((response) => response.json())
    .then((object) => {
      let html = "";
      html += getTableHead(type);
      html += getTableBody(type, object);
      document.getElementById(destination).innerHTML = html;
    });
}

function patch(type, field, id, value) {
  const responseFlow = fetch(getLink(type) + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: generatePatchBody(type, field, value),
  });
}
function generatePatchBody(type, field, value) {
  switch (type) {
    case "delivery":
      return generateDeliveryPatchBody(field, value);
    case "product":
      return generateProductPatchBody(field, value);
    case "order":
      return generateOrderPatchBody(field, value);
    case "van":
      return generateVanPatchBody(field, value);
  }
}

function generateDeliveryPatchBody(field, value) {
  switch (field) {
    case "delivery-date":
      return JSON.stringify({
        deliveryDate: value,
      });
    case "warehouse":
      return JSON.stringify({
        fromWarehouse: value,
      });
    case "destination":
      return JSON.stringify({
        destination: value,
      });
  }
}
function generateProductPatchBody(field, value) {
  switch (field) {
    case "name":
      return JSON.stringify({
        name: value,
      });
    case "price":
      return JSON.stringify({
        price: value,
      });
    case "weight":
      return JSON.stringify({
        weight: value,
      });
  }
}
function generateOrderPatchBody(field, value) {
  switch (field) {
    case "quantity":
      return JSON.stringify({
        quantity: value,
      });
  }
}
function generateVanPatchBody(field, value) {
  switch (field) {
    case "brand":
      return JSON.stringify({
        brand: value,
      });
    case "model":
      return JSON.stringify({
        model: value,
      });
    case "destination":
      return JSON.stringify({
        capacity: value,
      });
  }
}
