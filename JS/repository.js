// Fetch All
function fetchAllObject(type, destination) {
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

// Fetch
function fetchObjectById(type, id, destination) {
  fetch(getLink(type) + "/" + id)
    .then((response) => response.json())
    .then((object) => {
      html = "";
      html += getTableHead(type);
      html += getTableBody(type, object);
      document.getElementById(destination).innerHTML = html;
    });
}

function fetchObjectByName(type, name, destination) {
    fetch(getLink(type) + "/name/" + name)
      .then((response) => response.json())
      .then((object) => {
        html = "";
        html += getTableHead(type);
        html += getTableBody(type, object);
        document.getElementById(destination).innerHTML = html;
      });
}


