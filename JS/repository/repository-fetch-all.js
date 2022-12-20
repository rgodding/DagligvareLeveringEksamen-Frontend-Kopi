// Fetch All
function fetchAll(type, destination) {
  fetch(getLink(type))
    .then((response) => response.json())
    .then((object) => {
      let html = "";
      html += getTableHead(type);
      object.forEach((object) => {
        html += getTableBody(type, object);
      });
      document.getElementById(destination).innerHTML = html;
    });
}
