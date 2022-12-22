// Event Listeners
document.addEventListener("submit", (e) => registerSubmit(e));
document.addEventListener("onclick", (e) => registerClick(e));
function registerClick(e) {
  e.preventDefault();
}
function registerSubmit(e) {
  e.preventDefault();
}

function updateDatabase(database) {
  switch (database) {
    case "delivery":
      document.getElementById("database-delivery").style.display = "block";
      document.getElementById("database-product").style.display = "none";
      document.getElementById("database-order").style.display = "none";
      document.getElementById("database-van").style.display = "none";
      fetchAll("delivery", "table-fetch-all-delivery");
      break;
    case "product":
      document.getElementById("database-delivery").style.display = "none";
      document.getElementById("database-product").style.display = "block";
      document.getElementById("database-order").style.display = "none";
      document.getElementById("database-van").style.display = "none";
      fetchAll("product", "table-fetch-all-product");
      break;
    case "order":
      document.getElementById("database-delivery").style.display = "none";
      document.getElementById("database-product").style.display = "none";
      document.getElementById("database-order").style.display = "block";
      document.getElementById("database-van").style.display = "none";
      fetchAll("order", "table-fetch-all-order");
      break;
    case "van":
      document.getElementById("database-delivery").style.display = "none";
      document.getElementById("database-product").style.display = "none";
      document.getElementById("database-order").style.display = "none";
      document.getElementById("database-van").style.display = "block";
      fetchAll("van", "table-fetch-all-van");
      break;
  }
}
