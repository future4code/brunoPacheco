/*[Google] Escreva uma função que receba uma string e devolva o primeiro número recorrente nela
*/

//ver o tamanho da palavra, pegar a primeira letra e comparar com a próxima letra
//caso não encontre, irá para a segunda letra e ira comparar com as demais
//no final, se chegar na ultima letra, quer dizer que não há letra que se repete na string

export function primeiraLetraRecorrente(palavra: string): any {
    const tamanhoPalavra: number = palavra.length;
    let array: string[] = [];
    let letraRepetida: string = ""
    for (let i: number = 0; i <= tamanhoPalavra; i++) {
        if (array.indexOf(palavra[i]) === -1) {
            array.push(palavra[i])
        } else {
            return letraRepetida = palavra[i]
        }
    }
    return letraRepetida
}