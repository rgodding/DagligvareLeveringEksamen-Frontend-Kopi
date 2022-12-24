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
function fetchAllObjectContaining(type, field, input, destination){
  fetch(getLink(type) + '/find-all-by-name/' + input)
  .then((response) => response.json())
  .then((object) => {
    let html = "";
    html += getTableHead(type)
    object.forEach((object) => {
      html += getTableBody(type, object)
    })
    document.getElementById(destination).innerHTML = html;
  })
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

// Patch
function patch(type, field, id, value) {
  const responseFlow = fetch(getLink(type) + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: generatePatchBody(type, field, value),
  });
}

// Create
function post(type, input){
  postObject(type, generateForm(type, input))
}
async function postObject(type, formObject) {
  let response = await fetch(getLink(type), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  });
}

// Delete
function deleteObject(type, id) {
  fetch(getLink(type) + "/" + id, {
    method: "DELETE",
  })
    .then((res) => {
      console.log("TODO: Make site more responsive here");
    })
    .catch((error) => {
      console.log(error);
    });
}
