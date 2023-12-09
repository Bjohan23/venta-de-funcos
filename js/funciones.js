document.addEventListener("DOMContentLoaded", function () {
  // Obtener los parámetros de la URL
  const urlParams = new URLSearchParams(window.location.search);
  // si la url esta bacia redireccionar a iniciar secion
  // if (urlParams.get("usuario") == null) {
  //   redireccionar();
  // }

  // Obtener los valores de los parámetros
  const usuario = urlParams.get("usuario");
  const clave = urlParams.get("clave");
  console.log("usuario:" + usuario);
  console.log("clave:" + clave);

  // si el usuario y la contraseña no esta bacia  mostrar boton salir
  if (usuario) {
    document.getElementById("iniciar").style.display = "none";
    document.getElementById("salir").style.display = "flex";
  }
});

//  si no se a iniciado secion redireccionar a iniciar secion
function redireccionar() {
  window.location.href = "usuario/iniciarSesion.html";
}

// contador
// Función para incrementar el contador

function incrementarContador() {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get("usuario") == null) {
    redireccionar();
  }

  var contadorElemento = document.getElementById("contador");
  var contadorActual = 0;
  contadorActual = parseInt(contadorElemento.innerText);

  var nuevoContador = contadorActual + 1;

  contadorElemento.innerText = nuevoContador;
  document.getElementById("contador").value = nuevoContador;

  console.log(nuevoContador);
}
