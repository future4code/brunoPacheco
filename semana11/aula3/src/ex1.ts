
import axios, { AxiosResponse } from 'axios';
import { promises } from 'dns';

const fs = require("fs")

//procura o caminho do arquivo.
const directoryPath1 = ('./src/textos')

// promise que pega os arquivos em texto 
const allFiles = new Promise((resolve, reject) => {
    fs.readdir(directoryPath1,'utf8', function (err: any, files: string[]) {

        if (err) {
            reject(err)
            return
        } 
        
        resolve(files);
    })
})

allFiles.then((resolve:string[])=> {
    const allPromises = resolve.map((eachFile)=> {

    })
})

