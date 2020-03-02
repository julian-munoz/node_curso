const argv = require('./config/yargs').argv;
const colors = require('colors');


const { createArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        createArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        console.log('Crear');
        break;
    default:
        console.log('Commando no reconocido');

}

//let base = '8';

//console.log(process.argv);

let argv2 = process.argv;

//console.log(argv.base);
//console.log('Limite', argv.limite);


// let parametro = arg[2];
// let base = parametro.split('=')[1];

//console.log(base);

// let data = '';

// for (let i = 0; i <= 10; i++) {

//     data += (`${base} X ${i} = ${base * i}\n`);
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El Archivo tabla-${base}.txt ha sido creado`);
// });

// createArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));