let totalPrice
let totalWeight


let totalVanPrice
let totalVanWeight


function calculateVan(id){
    totalVanPrice = 0
    totalVanWeight = 0
    fetch(getLink('delivery') + '/find-deliveries-by-van-id/' + id)
    .then((reponse) => reponse.json())
    .then((object) => {
        // Delivery List
        object.forEach((object) => {
            // For Each Delivery
            fetch(getLink("order") + "/find-order-by-delivery-id/" + object.id)
            .then((reponse) => reponse.json())
            .then((object) => {
                // Order for current delivery List
                object.forEach((object) => {
                //current order
                let orderQuantity = object.quantity
                let orderPrice = object.product.price
                let orderWeight = object.product.weight
                totalVanPrice += orderQuantity*orderPrice
                totalVanWeight += orderQuantity*orderWeight
              });
            });
        });
        
    })
    setTimeout(() => { console.log('finished, total price: ' + totalVanPrice)}, 500)
    setTimeout(() => { console.log('finished, total weight: ' + totalVanWeight)}, 500)
}

function printVanPrice(destination){
    document.getElementById(destination).innerHTML = totalVanPrice
}
function printVanWeight(destination){
    document.getElementById(destination).innerHTML = totalVanWeight
}

// Get Price for Destination
function getDeliveryTotalPrice(id, destination){
    getDeliveryTotalPrice2(id)
    setTimeout(() => { printTotalPrice(destination)}, 500)
}
function printTotalPrice(destination){
    document.getElementById(destination).innerHTML = totalPrice
}

// Get Weight for Destination
function getDeliveryTotalWeight(id, destination){
    getDeliveryTotalWeight2(id)
    setTimeout(() => { printTotalWeight(destination)}, 500)
}
function printTotalWeight(destination){
    document.getElementById(destination).innerHTML = totalWeight
}

// Calculate Delivery Price
function getDeliveryTotalPrice2(id){
    let testPrice = 0
    fetch(getLink('order') + '/find-order-by-delivery-id/' + id)
    .then((reponse) => reponse.json())
    .then((object) => {
        object.forEach((object) =>{
            let tempPrice = object.quantity * object.product.price
            testPrice += tempPrice
        })
        totalPrice = testPrice
        console.log('price: ' + testPrice)
    })  
}

// Calculate Delivery Weight
function getDeliveryTotalWeight2(id){
    let testWeight = 0
    fetch(getLink('order') + '/find-order-by-delivery-id/' + id)
    .then((reponse) => reponse.json())
    .then((object) => {
        object.forEach((object) =>{
            let tempWeight = object.quantity * object.product.weight
            testWeight += tempWeight
        })
        totalWeight = testWeight
        console.log('weight: ' + testWeight)
    })  
}