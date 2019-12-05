/*
    No exercício de remember de hoje, vamos precisar lembrar um pouquinho de matemática 
    (de novo nãããããão). Quando aprendemos figuras geométricas planas, os principais conceitos
    que nos passam são a área e o perímetro. Vocês devem se lembrar, por exemplo, do nosso querido 
    quadrado: ele é um quadrilátero (figura de 4 lados) com  todos os lados iguais. No caso dele, a 
    área é dada por: A = lado*lado e o perímetro por P = 4*lado. Outra figura interessante para se analisar 
    é o círculo. Todos os pontos desta figura estão igualmente distante do seu centro; a essa distância, damos
    o nome de raio. A área dele é dada por A = pi*raio*raio e o perímetro (na verdade, chamado de comprimento da 
    circunferência) é dado por P = 2*pi*raio .
    Dada esta introdução, a sua tarefa é a seguinte: escreva uma função, em Javascript, que receba dois parâmetros: 
    tipo e medida. Se o tipo for 0, você deve assumir que se trata de um quadrado; mas, se for 1, assuma que é um círculo.
    O parâmetro medida trará a medida necessária para se determinar a área e o perímetro (lado, para o quadrado; e o raio 
    para o círculo). Por fim, você deve devolver um objeto que contenha as informações da área e do perímetro. 
    (Obs.: o valor de pi pode ser acessado através de Math.PI)
*/
const escolha = Number(process.argv[2]);
const medida = Number(process.argv[3]);


function tipoGeometrico(geometria) {
    if (geometria === 1) {
        return true
    }
}

try {
    if (tipoGeometrico(escolha)) {
        const area = medida * medida;
        const perimetro = 4 * medida;
        console.log(`A área do quadrado é de ${area} e o seu perímetro é de ${perimetro}`);
    } else {
        const area = Math.PI * (medida ^ 2);
        const perimetro = 2 * Math.PI * medida;
        console.log(`A área do círculo é de ${area} e o seu perímetro é de ${perimetro}`);
    }
} catch (err) {
    console.error(err)
}

