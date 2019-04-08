//requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return; //hacer que se detenga el código
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}`);
        });
    });
}

//exportar el metodo
module.exports = {
    crearArchivo,
    listarTabla
}