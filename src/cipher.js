window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    let resultado = "";
    for(let i=0; i<string.length; i++){ /*contador*/
      let asciinum= string.charCodeAt(i); /*indica la posicion de mis letras*/
     if (65 <= asciinum && asciinum <= 90)  /*la cantidad que empieza mayusculas 65 al 90*/
        resultado += String.fromCharCode((asciinum - 65 + offset) % 26 + 65);  
     else if (97 <= asciinum && asciinum <= 122) /*la cantidad que empiza la minuscula 97 al 122*/
        resultado += String.fromCharCode((asciinum - 97 + offset) % 26 + 97);
     else if(asciinum === 32 ) /* el numero de spam*/
     resultado += " " ; 
    }
   return resultado;
  },

  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  let resultado = "";
  for(let i=0; i<string.length; i++){ 
  let asciinum= string.charCodeAt(i); 
  if (65 <= asciinum && asciinum <= 90) 
    resultado += String.fromCharCode((asciinum + 65 - offset) % 26 + 65); 
  else if (97 <= asciinum && asciinum <= 122)
    resultado += String.fromCharCode((asciinum - 45 - offset) % 26 + 97); 
  else if(asciinum === 32 )
  resultado += " " ;
  }
  return resultado;
  }
}; 
