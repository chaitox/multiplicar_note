const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multiplicar',{
                    base:{
                        demand: true,
                        alias: 'b'
                    },
                    limite:{
                        alias: 'l',
                        default: 10
                    }
                })
                .command('crear', 'Imprime en consola la tabla de multiplicar con limite',{
                    base:{
                        demand: true,
                        alias: 'b'
                    },
                    limite:{
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
        crearArchivo(argv.base)
        .then( archivo => console.log(`Archivo creado ${archivo}`))
        .catch(e=>console.log(e));
        break;
    case 'crear':
        console.log(argv.base, argv.limite);
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('COmando no reconocido');
        break;
}


/*
let argv2 = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];*/

/*
crearArchivo(base)
    .then( archivo => console.log(`Archivo creado ${archivo}`))
    .catch(e=>console.log(e));*/