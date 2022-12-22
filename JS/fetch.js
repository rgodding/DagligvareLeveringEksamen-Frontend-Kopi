// Fetch
function fetchOne(type, id, destination) {
    fetch(getLink(type) + "/" + id)
      .then((response) => response.json())
      .then((object) => {
        html = "";
        html += getTableHead(type);
        html += getTableBody(type, object);
        document.getElementById(destination).innerHTML = html;
      });
}

// Fetch By Name
function fetchOneByName(type, name, destination) {
  fetch(getLink(type) + "/name/" + name)
      .then((response) => response.json())
      .then((object) => {
        html = "";
        html += getTableHead(type);
        html += getTableBody(type, object);
        document.getElementById(destination).innerHTML = html;
      });
}

// Product
function fetchProductToOrder(id, destination){
  fetch(getLink('product') + "/" + id)
      .then((response) => response.json())
      .then((object) => {
        document.getElementById(destination).innerHTML += getTableBodyProductToOrderList(object)
      });
}

