const fs = require('fs');
const { resolve } = require('url');

let listarTabla = (base, limite)=>{
    return new Promise((resolve, reject)=>{
        if (!Number(base)) {
            reject(`La base ${base} no es un numero`);
            return
        }

        if (!Number(limite)) {
            reject(`El limite ${limite} no es un numero`);
            return
        }
        for (let index = 1; index < limite; index++) {
            console.log(` ${base} * ${index} = ${base * index}`)
            
        }
    });
}

let crearArchivo = (base, limite)=> {
    return new Promise((resolve, reject )=>{

        let contenido = '';
        if (!Number(base)) {
            reject('No es un numbero');
            return;
        }

        for (let index = 1; index < 11; index++) {
            contenido +=`${base} * ${index} = ${base*index} \n`;
        }

        fs.writeFile(`tablas/tabla_${base}.txt`, contenido, (err) => {
        
            if (err) throw reject(err)
            else
            resolve(`tabla-${base}`);
            
            });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};


