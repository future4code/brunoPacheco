/*[Google] Escreva uma função que receba uma string e devolva o primeiro número recorrente nela
*/

//ver o tamanho da palavra, pegar a primeira letra e comparar com a próxima letra
//caso não encontre, irá para a segunda letra e ira comparar com as demais
//no final, se chegar na ultima letra, quer dizer que não há letra que se repete na string

export function primeiraLetraRecorrente(palavra: string): string {
    const tamanhoPalavra: number = palavra.length;
    let letraParaComparar: number = 1;
    let letra = palavra[0];
    for (let i: number = 0; i <= tamanhoPalavra; i++) {
        letra = palavra[i]
        if (letra === palavra[letraParaComparar]) {
            return letra
        } else {
            letraParaComparar++
        }
    }
    return letra
}