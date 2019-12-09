import * as fs from 'fs'

export class JSONFileManager {
    private fileName: string
    constructor(fileName: string) {
        this.fileName = fileName
    }

    public saveToJSON(objectToSave: object) {
        fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2))
    }

    public getJSONContent() {
        return JSON.parse(fs.readFileSync(this.fileName).toString())
    }
}