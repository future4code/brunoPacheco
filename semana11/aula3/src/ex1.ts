
import axios, { AxiosResponse } from 'axios';

const fs = require("fs")

const directoryPath = ('./src/textos')

const promise = new Promise((resolve, reject)=> {
    fs.readdir(directoryPath, function (err: string, path: string[]) {

    if(err) {
        reject(err)
        return
    }
   
    
})


