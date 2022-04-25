function loginFunc(e)
{
    //event.preventDefault();

    var username = document.getElementById('codigo').value;
    var clave = document.getElementById('password').value;


    var urllogin = 'https://api-parcial.crangarita.repl.co/login';
    var data = {codigo: username, password: clave};
    
    fetch(urllogin, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
                        console.log('Success:', response);
                        localStorage.setItem("user", response.codigo);
                        localStorage.setItem("name", response.name);
                        window.location.href="html/dashboard.html";
                      }
         );
}

if(localStorage.getItem("codigo")==null) {
  window.alert("Datos incorrectos");
}
if(localStorage.getItem("codigo")!=null) {
  window.location.href="html/dashboard.html";
}


