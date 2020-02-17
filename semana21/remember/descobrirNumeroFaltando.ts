const array:number[] = [0,1,2,3,4,5,6,8,9,10]

function numeroFaltando(array: number[]): number {
    const arrayLength: number = array.length + 1;
    let valorPa: number = arrayLength * (arrayLength + 1) / 2;
    for (let i:number = 0; i < arrayLength; i++) {
        let result:number = valorPa -= arrayLength[i];
        return result
    }
    return this.result
}
