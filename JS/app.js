function getLink(type){
  switch(type){
    case "delivery":
      return deliveryApi
    case "product":
      return productApi
    case "order":
      return orderApi
    case "van":
      return vanApi
  }
}

function templateSwith(){
  switch(type){
    case "delivery":
    case "product":
    case "order":
    case "van":
  }
}



(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

document.getElementById('patch-delivery-form').addEventListener("click", function(event){
  event.preventDefault()
})
document.getElementById('patch-product-form').addEventListener("click", function(event){
    event.preventDefault()
})
document.getElementById('patch-order-form').addEventListener("click", function(event){
  event.preventDefault()
})
document.getElementById('patch-van-form').addEventListener("click", function(event){
  event.preventDefault()
})
document.getElementById('add-delivery-van-form-id-field').addEventListener("click", function(event){
  event.preventDefault()
})
function registerClick(e) {
  e.preventDefault();
}
function registerSubmit(e) {
  e.preventDefault();
}