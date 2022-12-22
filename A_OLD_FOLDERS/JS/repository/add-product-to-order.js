function previewAddOrderProduct(id) {
  fetch("http://localhost:8080/api/v1/product/" + id)
    .then((response) => response.json())
    .then((object) => {
      html = "";
      html += getTableHead("product");
      html += getTableBody("product", object);
      html += `
        <div>
        <input id="add-order-product-id"></input>
        <button onclick="addProductToOrder(document.getElementById('add-order-product-preview-id').value, document.getElementById('add-order-product-id').value)">Add Product To Order</button>
        </div>
        `;
      document.getElementById("add-order-product-preview").innerHTML = html;
    });
}

function addProductToOrder(productId, orderId) {
  fetch("http://localhost:8080/api/v1/product/" + productId)
    .then((response) => response.json())
    .then((object) => {
      addProductToOrder2(object, orderId);
    });
}
async function addProductToOrder2(object, orderId) {
  let response = await fetch(
    "http://localhost:8080/api/v1/productorder/add-product/" + orderId,
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
