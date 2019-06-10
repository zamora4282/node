const fs = require('fs');

let listarTabla = ( base, limite ) => {
    for(let i=1;i<limite;i++){
       
        console.log( `${base}*${i} = ${base*1}`);
    }
    
}

let crearArchivo = ( base )=>{
 
    return new Promise((resolve,reject) => {
        let data = '';

        if( !Number( base ) ){
            reject(`El valor introducido ${ base } No es un número`);
            return;
        }
        for(let i=1;i<11;i++){
            console.log(base*i);
            data += `${base}*${i} = ${base*1}\n`;
        }


        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
        if (err) reject (err)
        else    
            reject(`tabla-${base}.txt`);
        
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
 

