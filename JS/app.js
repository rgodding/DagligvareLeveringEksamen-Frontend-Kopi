function start(){
    fetchAllProductListToOrder('product', 'table-fetch-all-product')
}

// Event Listeners
document.addEventListener("submit", (e) => registerSubmit(e));
document.addEventListener("onclick", (e) => registerClick(e));
function registerClick(e) {
  e.preventDefault();
}
function registerSubmit(e) {
  e.preventDefault();
}