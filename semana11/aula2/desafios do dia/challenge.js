/*
    Leia ATENTAMENTE o código abaixo:
    a) Descreva o que ele está fazendo.
    b) Como temos que invocar a função para que ela calcule a área e o perímetro de um círculo de raio 5?
    c) Preencha a parte comentada COMPLETE AQUI , sabendo que a área do quadrado é dada por Area = lado*lado e o 
    perímetro é Perimetro = 4*lado.
*/

a) está executando um cálculo matemático de área e perímetro de um objeto geométrico.
    b) node generateInformation(0, 5)

c) function generateInformation(type: ShapeType, measure: number): { perimeter: number, area: number } {
    let result: { perimeter: number, area: number };
    switch (type) {
        case ShapeType.SQUARE:
            result = {
                perimeter: measure ^ 2,
                area: 4 * measure
            };
            break;
        case ShapeType.CIRCLE:
            result = {
                perimeter: 2 * Math.PI * measure,
                area: Math.PI * measure * measure
            };
            break;
        default:
            result = { perimeter: 0, area: 0 };
    }
    return result;
}

enum ShapeType {
    SQUARE = 0,
    CIRCLE = 1
}