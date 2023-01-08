let totalPrice
let totalWeight

let totalVanPrice
let totalVanWeight

// Calculate Van (Specifically for view Details)
function calculateVan(id){
    totalVanPrice = 0
    totalVanWeight = 0
    fetch(getLink('delivery') + '/find-deliveries-by-van-id/' + id)
    .then((reponse) => reponse.json())
    .then((object) => {
        object.forEach((object) => {
            fetch(getLink("order") + "/find-order-by-delivery-id/" + object.id)
            .then((reponse) => reponse.json())
            .then((object) => {
                object.forEach((object) => {
                totalVanPrice += object.quantity*object.product.price
                totalVanWeight += object.quantity*object.product.weight
              });
            });
        });
        
    })
    setTimeout(() => {
        fetch(getLink('van') + '/' + id)
        .then((reponse) => reponse.json())
        .then((object) => {
            console.log('van:' + JSON.stringify(object))
            setTimeout(() => { validateVanCapacity(object)}, 500)
        })
    }, 500)
}
function validateVanCapacity(object){
    document.getElementById('van-view-details-total-price').innerHTML = totalVanPrice
    document.getElementById('van-view-details-total-weight').innerHTML = totalVanWeight
    if(totalVanWeight>object.capacity){
        document.getElementById('van-view-details-total-weight').style.color = "red"
        document.getElementById('van-view-details-weight-validation').innerHTML = "Weight is above maximum capacity of " + object.capacity + " g"
        document.getElementById('van-view-details-weight-validation').style.color = "red"
    } else {
        document.getElementById('van-view-details-total-weight').style.color = "green"
        document.getElementById('van-view-details-weight-validation').innerHTML = "Weight is below maximum capacity of " + object.capacity + " g"
        document.getElementById('van-view-details-weight-validation').style.color = "green"
    }
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
    })  
}