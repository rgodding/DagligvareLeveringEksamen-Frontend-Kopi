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
