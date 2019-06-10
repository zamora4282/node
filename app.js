const argv = require ('yargs')
                    .command('Listar', 'Imprime en consola la tabla del número indicado',{
                        base : {
                            demand: true,
                            alias: 'b'
                        },
                        limite: {
                            alias: 'l',
                            default: 10
                        }
                    })
                    .help()
                    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 7;
console.log('limite',argv.limite);


// let parametros = arv.split('=');
// crearArchivo(parametros[1])
//     .then(archivo => console.log(`Archivo creado ${ archivo }`))
//     .catch(e => console.log(e));
