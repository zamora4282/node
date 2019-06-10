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

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        
        listarTabla(argv.base, argv.limite);
        
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('No existe este comando');
        break;
}


// let parametros = arv.split('=');
// crearArchivo(parametros[1])
//     .then(archivo => console.log(`Archivo creado ${ archivo }`))
//     .catch(e => console.log(e));
