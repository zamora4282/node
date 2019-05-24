const fs = require('fs');

let base = 4;
let data = '';

for(let i=1;i<11;i++){
    console.log(base*i);
    data += `${base}*${i} = ${base*1}\n`;
}


fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

