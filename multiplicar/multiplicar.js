//requiered

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('=================='.green);
    console.log(` Tabla de ${base} `.red);
    console.log('=================='.green);
    for (let i = 0; i <= limite; i++) {

        console.log(`${base} X ${i} = ${base * i}`);
    }
}


let data = '';

let createArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base))
            reject(`El valor introducido ${base} no es numérico`);
        return;

        console.log(base);


        for (let i = 0; i <= limite; i++) {

            data += (`${base} X ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });


    });
}

module.exports = {
    createArchivo,
    listarTabla
}