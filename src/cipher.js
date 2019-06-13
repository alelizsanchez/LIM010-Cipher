window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    let resultado = "";
    for(let i=0; i<string.length; i++){ /*contador*/
      let asciinum= string.charCodeAt(i); /*indica la posicion de mis letras*/
      if (65 <= asciinum && asciinum <= 90)  
        resultado += String.fromCharCode((asciinum - 65 + offset) % 26 + 65);  
      else
        resultado += string.charAt(i);  
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
  else
    resultado += string.charAt(i);  
  }
  return resultado;
  }
};