async function postForm(type, formObject) {
    let response = await fetch(getLink(type), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    });
}