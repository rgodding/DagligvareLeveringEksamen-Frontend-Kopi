const deliveryApi = "http://localhost:8080/api/v1/delivery";
const productApi = "http://localhost:8080/api/v1/product";
const orderApi = "http://localhost:8080/api/v1/productorder";
const vanApi = "http://localhost:8080/api/v1/van";

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