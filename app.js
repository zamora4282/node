const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 7;


let arv = process.argv[2];

let parametros = arv.split('=');
crearArchivo(parametros[1])
    .then(archivo => console.log(`Archivo creado ${ archivo }`))
    .catch(e => console.log(e));
