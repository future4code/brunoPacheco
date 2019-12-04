import { readFile } from 'fs;'

const fileName: string = "text.txt";

const readFilePromise = new Promise((resolve, reject) => {
    readFile(fileName, (err: ErrnoException | null, data: Buffer) => {
        if(err){
            reject(err)
            console.error(err)
            return;
        }
        resolve(data.toString());
        
    })
})

readFilePromise.then((content)=> {
    console.log("Este é o conteúdo do arquivo", content)
}).catch((e)=> {
    console.error("Opa,")
})