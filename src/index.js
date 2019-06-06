/* Acá va tu código */
const boton_entrar = document.getElementById("boton_entrar");
let incorrectos = 0;

boton_entrar.addEventListener("click", () => {
  // console.log(document.getElementById("pass").value);

  if ("laboratoria" === document.getElementById("pass").value) {

    if (incorrectos < 3) {
      console.log("Entraste a tu cuenta");
    }

  } else {
    console.log("incorrecto");
    incorrectos = incorrectos + 1;

  }
});
/* Acá va tu código */