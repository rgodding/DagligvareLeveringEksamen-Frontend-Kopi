let tempProductObject;

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

function generateDeliveryPatchBody(field, value){
  switch (field) {
      case "destination":
        return JSON.stringify({
          destination: value,
        });
      case "fromWarehouse":
        return JSON.stringify({
          fromWarehouse: value,
        });
      case "destination":
        return JSON.stringify({
          destination: value,
        });
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

function generatePatchBodyOrderProduct(type, field, value){
  console.log('generating patch body order product')
  switch(field){
    case "product":
      console.log('product field')
    return `
    {
      "id": ` + value + `
    }
    `
  }

}
function generateOrderPatchBody(field, value){
  switch (field) {
    case "quantity":
      return JSON.stringify({
        quantity: value,
      });
    case "product":
      return fetchObjectByIdReturn('product', value)
    case "delivery":
  }
}

function generateVanPatchBody(field, value){
  switch(field){
    case "brand":
      return JSON.stringify({
        brand: value,
      });
    case "model":
      return JSON.stringify({
        model: value,
      });
    case "capacity":
      return JSON.stringify({
        capacity: value,
      });
  }
}