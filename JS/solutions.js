// Alternative
/* 

-- : Show all objects when empty search field
function searchProductByName(name, destination){
  if(name == ""){
    fetchAllProducts(destination)
  } else {
    fetchProductByName(name, destination)
  }
}


-- : Get total Weight for Van(and price, same method basically)
function getTotalVanWeight(vanId){
  const(array) vanDeliveries = findDeliveriesByVanId(vanId) : Hvordan gør jeg det her? "returning json objects?"
  let totalWeight = 0
  vanDeliveries.forEach((delivery) => {
    totalweight += getTotalOrderWeight(findOrderByDeliveryId(delivery.id))
  })
  return totalWeight;
}

-- : Get total weight for Order(Made like this for better accesibility in other methods
function getTotalOrderWeight(id){
  let tempOrder = findOrderByDeliveryId(id)
  let tempProduct = findOrderByDeliveryId(tempOrder.id)
  return tempOrder.quantity*tempProduct.weight : Returner den regnestykket eller resultatet?
}


-- : 3rd solution?
Make a js completely dedicated to calculations of said process. Attributes which are the temps and methods inside, will that work?
Return issue could be delay related, evt. make commands to make certain methods and processes discontinue until wished methods has finished
*/