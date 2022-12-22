// Fetch All
function fetchAll(type, destination) {
    fetch(getLink(type))
    .then((response) => response.json())
    .then((object) => {
      let html = "";
      html += getTableHead(type);
      let indexNumber = 1;
      object.forEach((object) => {
        html += getTableBody(type, object, indexNumber);
        indexNumber++;
      });
      document.getElementById(destination).innerHTML = html;
    });
}

function fetchAllProductListToOrder(type, destination) {
  fetch(getLink(type))
  .then((response) => response.json())
  .then((object) => {
    let html = "";
    html += getTableHead(type);
    let indexNumber = 1;
    object.forEach((object) => {
      html += getTableBodyProductListToOrder(object, indexNumber);
      indexNumber++;
    });
    document.getElementById(destination).innerHTML = html;
  });
}