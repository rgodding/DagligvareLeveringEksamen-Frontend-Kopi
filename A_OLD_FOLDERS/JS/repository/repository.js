// API
const deliveryApi = "http://localhost:8080/api/v1/delivery";
const productApi = "http://localhost:8080/api/v1/product";
const orderApi = "http://localhost:8080/api/v1/productorder";
const vanApi = "http://localhost:8080/api/v1/van";

// Get Parsed Json Object
function getJsonObject(type, id) {
  fetch(getLink("type") + "/" + id)
    .then((response) => response.json())
    .then((object) => {
      var rawJson = JSON.stringify(object);
      var json = JSON.parse(jsonObject);
      return json;
    });
}

// Table Builder
function getLink(type) {
  switch (type) {
    case "delivery":
      return deliveryApi;
    case "product":
      return productApi;
    case "order":
      return orderApi;
    case "van":
      return vanApi;
  }
}
function getTableHead(type) {
  switch (type) {
    case "delivery":
      return `<table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Delivery Date</th>
                    <th>Warehouse Origin</th>
                    <th>Destination</th>
                    <th>Van</th>
                </tr>
            </thead>
            `;
    case "product":
      return `<table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Weight</th>
                </tr>
            </thead>
            `;
    case "order":
      return `<table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Quantity</th>
                    <th>Product</th>
                    <th>Delivery</th>
                </tr>
            </thead>
            `;
    case "van":
      return `<table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Capacity</th>
                </tr>
            </thead>
            `;
  }
}
function getTableBody(type, object) {
  switch (type) {
    case "delivery":
      var result = object.van;
      if (result != null) {
        result = result.id;
      }
      return `
            <tbody>
             <tr>
              <td>${object.id}</td>
              <td>${object.deliveryDate}</td>
              <td>${object.fromWarehouse}</td>
              <td>${object.destination}</td>
              <td>${JSON.stringify(result)}</td>
             </tr>
            </tbody>`;
    case "product":
      return `
            <tbody>
             <tr>
              <td>${object.id}</td>
              <td>${object.name}</td>
              <td>${object.price}</td>
              <td>${object.weight}</td>
             </tr>
            </tbody>`;
    case "order":
      var productResult = object.product;
      var deliveryResult = object.delivery;

      if (productResult != null) {
        productResult = productResult.id;
      }

      if (deliveryResult != null) {
        deliveryResult = deliveryResult.id;
      }
      return `
            <tbody>
             <tr>
              <td>${object.id}</td>
              <td>${object.quantity}</td>
              <td>${JSON.stringify(productResult)}</td>
              <td>${JSON.stringify(deliveryResult)}</td>
             </tr>
            </tbody>`;
    case "van":
      return `
            <tbody>
             <tr>
              <td>${object.id}</td>
              <td>${object.brand}</td>
              <td>${object.model}</td>
              <td>${object.capacity}</td>
             </tr>
            </tbody>`;
  }
}
