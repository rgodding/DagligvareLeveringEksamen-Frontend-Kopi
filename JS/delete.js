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
  