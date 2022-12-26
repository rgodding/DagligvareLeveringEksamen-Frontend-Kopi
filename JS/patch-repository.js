let tempProductObject;

function generatePatchBody(type, field, value) {
  console.log('generate patch body')
  console.log('type: ' + type)
  console.log('field: ' + field)
  console.log('value: ' + value)
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
      "id": 1,
      "name": "Product 1",
      "price": 100.0,
      "weight": 5.0
    }
    `
  }

}
function generateOrderPatchBody(field, value){
  console.log('patching body order')
  console.log(' field(' + field + ')')
  console.log(' value(' + value + ')')
  switch (field) {
    case "quantity":
      return JSON.stringify({
        quantity: value,
      });
    case "product":
      console.log('product found id(' + value + ')')
      console.log(fetchObjectByIdReturn('product', value))
      return fetchObjectByIdReturn('product', value)
    case "delivery":
  }
}
