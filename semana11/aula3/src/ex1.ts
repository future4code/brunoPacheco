
import { readdir, readFile } from 'fs';

//TODO TIPAR ESSE ERRO DE FORMA DECENTE
//faz a leitura dos arquivos do diretório que apontei
readdir("textos", (err: any, fileNames: string[]) => {
    console.log(fileNames)
    //para cada arquivo com nomeDoArquivo, vou lê-lo
    // fileNames.forEach((fileName: string) => {
    const allPromises = fileNames.map((fileName: string) => {
        return new Promise((resolve, reject) => { // essa é a promisse onde tem a resolução ou rejeição
            //leitura do arquivo                      Quando você lê um arquivo, ele não consegue pegar tudo, pega por partes e o Buffer é um tipo de variável que traz todo o Buffer e transforma em uma string
            readFile(`textos/${fileName}`, (error: any, data: Buffer) => {
                // console.log(fileName); //nome do arquivo
                // console.log(data.toString()); //conteúdo do arquivo 
                // console.log() // apenas uma linha em branco
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data.toString())
            })
        })
    });
    Promise.all()
});

