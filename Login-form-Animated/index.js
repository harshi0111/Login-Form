$("#login").click(function (event) {
  event.preventDefault();

  $("form").fadeOut(500);
  $(".wrapper").addClass("form-success");
});

const formRef = document.getElementById("form");
formRef.addEventListener("submit", (event) => {
  const email = document.elementFromPoint("email").value;
  const password = document.elementFromPoint("password").value;
  const formdata = { email, password };
  const backendUrl = "https://www.google.com/webhp?authuser=1";

  fetch(backendUrl, { method: post, body: JSON.stringify(formdata) })
    .then((RES) => {
      //response
    })
    .catch((err) => {
      //error
    });
});
