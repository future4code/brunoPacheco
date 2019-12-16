import * as fs from 'fs'

interface FileManager {
    saveToFile(value: any): void
    getContent(): any
}

class JSONFileManager implements FileManager {
    fileName: string
    constructor(fileName: string) {
        this.fileName = `${fileName}.json`
    }

    saveToFile(objectToSave: object) {
        fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2))
    }

    getContent() {
        return JSON.parse(fs.readFileSync(this.fileName).toString())
    }
}