if(localStorage.getItem("user")=null) {
  window.location.href="html/index.html";
}
  
  var user = document.getElementById("user").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var endpoint = "https://api-parcial.crangarita.repl.co/students/%5bcodigo%5d/notas";

  var usuario = {
    "user": user,
    "password": password,
    "name": name,
    "email": email
  }

  fetch(endpoint+"/endpoint",{
        method: "POST",
        body: JSON.stringify(usuario),
        headers:{
            "Content-type": "application/json"
        }
  });
