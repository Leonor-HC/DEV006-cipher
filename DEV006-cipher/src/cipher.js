const cipher = {
  encode: (offsetValue,textValue) => {
    // Crear array para almacenar codigo ASCII
    const mensajeCifrado = [];
    for (let i = 0; i < textValue.length; i++) {
      // obtener el Codigo ASCII
      const valorCodigoAscii = textValue.charCodeAt(i);
      // PONER LA FORMULA DEL ALGORITMO 
      let valorAsciiMasOffset = parseInt(valorCodigoAscii) + parseInt(offsetValue);
      //IMPLEMETAR CONDICIONAL IF
      if (valorAsciiMasOffset > 90) {
        valorAsciiMasOffset = valorAsciiMasOffset - 26;
      } else if (valorAsciiMasOffset < 65) {
        valorAsciiMasOffset = valorAsciiMasOffset + 26;
      }
      // HACER PUSH
      mensajeCifrado.push(valorAsciiMasOffset);
    }
    // DEVOLVER EL ARREGLO A STRING CON EL METODO JOIN
    const resultadoCifrado = String.fromCharCode(...mensajeCifrado);
    return resultadoCifrado;
  },
  decode: (offsetValue,textValue) => {
    // Crear array para almacenar codigo ASCII
    const mensajeDescifrado = [];
    for (let i = 0; i < textValue.length; i++) {
      // obtener el Codigo ASCII
      const valorCodigoAscii = textValue.charCodeAt(i);
      // PONER LA FORMULA DEL ALGORITMO 
      let valorAsciiMenosOffset = parseInt(valorCodigoAscii) - parseInt(offsetValue);
      //IMPLEMETAR CONDICIONAL IF
      if (valorAsciiMenosOffset > 90) {
        valorAsciiMenosOffset = valorAsciiMenosOffset - 26;
      } else if (valorAsciiMenosOffset < 65) {
        valorAsciiMenosOffset = valorAsciiMenosOffset + 26;
      }
      // HACER PUSH
      mensajeDescifrado.push(valorAsciiMenosOffset);
    }
    // DEVOLVER EL ARREGLO A STRING CON EL METODO JOIN
    const resultadoDescifrado = String.fromCharCode(...mensajeDescifrado);
    return resultadoDescifrado;
  }
};

export default cipher;
