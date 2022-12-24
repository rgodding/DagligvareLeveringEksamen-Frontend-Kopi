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

function generateProductPatchBody(field, value){
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