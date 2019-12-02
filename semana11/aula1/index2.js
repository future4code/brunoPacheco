const fs = require('fs'); // é como um import do react
const data = 'Oi, eu su o conteudo do arquivo!';
const fileName = 'newFile.txt';

try{
    fs.writeFileSync(fileName, data);
    console.log("Arquivo criado com sucesso!")
}catch(err){
    console.error(err)
}