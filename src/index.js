

const boton_entrar = document.getElementById("boton_entrar");
let incorrectos = 0;

boton_entrar.addEventListener("click", () => {
  if ("LABORATORIA" === document.getElementById("pass").value) {
      document.getElementById("pantalla1").classList.add("hide");
      document.getElementById("pantalla2").classList.remove("hide");
  } else {
    document.getElementById("mensaje").innerHTML = "incorrectos";
    incorrectos = incorrectos + 1;
  if(incorrectos>2){
    document.getElementById("solo tiene 3 intentos").innerHTML ="up! lo sentimos vuelba intentarlo mas tarde";
  }
  } 
});

// eslint-disable-next-line no-undef
cifrado.addEventListener("click", () => {
 let codigos =parseInt(document.getElementById("codigos").value); 
 let texto = document.getElementById("texto").value;
 let resultadofinal=cipher.encode(codigos,texto);
 document.getElementById("resultado").value=resultadofinal;
 });
// eslint-disable-next-line no-undef
descifrado.addEventListener("click", () => {
  let codigos =parseInt(document.getElementById("codigos").value); 
  let texto = document.getElementById("texto").value;
  let resultadofinal1=cipher.decode(codigos,texto);
  document.getElementById("resultado").value=resultadofinal1;
  });