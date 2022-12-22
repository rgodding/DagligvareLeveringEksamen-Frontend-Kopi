
// Fetch Product
function fetchProduct(id, destination){
    fetchOne('product', id, destination)
}
// Fetch Product By Name
function fetchProductByName(name, destination){
    fetchOneByName('product', name, destination)
}

//Post Product
function postProduct(name, price, weight){
    const dataProductObject = {
      name: name,
      price: price,
      weight: weight,
  };
  postForm('product', dataProductObject)
}


// Patch Product
function patchProduct(id, field, value){
    patch('product', id, field, value)
}

// Delete Product
function deleteProduct(id){
    deleteObject('product', id)
}

function deleteProductPreview(id, destination){
    console.log('preview product: ' + id )
    fetchOne('product', id, destination)
}


// Create Order
// Fetch Product For Order
function addProductToOrder(index, type){
    fetchProductToOrder(index, 'create-order-product-preview')
    updateProductToOrderValue()
}

async function updateProductToOrderValue(){
    await new Promise(resolve => setTimeout(resolve, 100));
    let price = document.querySelectorAll('#product-for-order-price')
    let weight = document.querySelectorAll('#product-for-order-weight')
    let priceValue = 0
    let weightValue = 0
    price.forEach(object =>{
        priceValue += parseInt(object.textContent)
    })
    weight.forEach(object => {
        weightValue += parseInt(object.textContent)
    })
    insertNewPriceValue(priceValue, weightValue)
}

function insertNewPriceValue(priceValue, weightValue){
    document.getElementById('create-order-product-preview-price').innerHTML = priceValue
    document.getElementById('create-order-product-preview-weight').innerHTML = weightValue
}

