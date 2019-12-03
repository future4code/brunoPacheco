/*
    Considere que você esteja implementando uma rede social composta por posts
    de usuários. Cada um dos posts possui: um autor e um texto.

    a) Crie um array com 5 objetos deste tipo de posts

    b) Crie uma função que receba dois parâmetros: um array de posts e um autor. 
    Ela deve devolver todos os posts deste autor
*/

type post = {
    text: string,
    autor: string,
}

const arrayDePosts: post[] = [
    {
        text: "Ouvir rock ativa o Coldplay que pode ativar o Los Hermanos",
        autor: "Presidente da Funarte",
    },
    {
        text: "Deus acime de todos, menos do preço da carne",
        autor: "Biruliro",
    },
    {
        text: "Trump vai taxar aço brasileiro e eu continuo tomando ferro",
        autor: "Biruliro",
    },
    {
        text: "Flamengo está a cinco minutos sem ganhar título",
        autor: "Sofredor do Flamengo",
    },
    {
        text: "QUeríamos o troféu de vôlei mas não foi possível!",
        autor: "Sofredor do Flamengo",
    },
]

function filtroDeAutor(arrayDePosts: post[], autor: string): post[] {
    return arrayDePosts.filter(el: post)=> {
        return el: post === autor
    };


    console.log(filtroDeAutor( arrayDePosts, "Sofredor do Flamengo" ))

//Ex2

    enum Marca {
        FIAT = "fiat",
        VOLKSWAGEN = "volkswagen"
      }
      ​
      type carro = {
        marca: Marca;
        capacidadeDeGasolina: number;
        flex: boolean;
        litrosGastosParaAndar?: (km: number) => number;
      };
      ​
      const uno: carro = {
        marca: Marca.FIAT,
        capacidadeDeGasolina: 60,
        flex: true,
        litrosGastosParaAndar: (quilometro: number): number => {
          return 0.25 * quilometro;
        }
      };
      ​
      const fusca: carro = {
        marca: Marca.VOLKSWAGEN,
        capacidadeDeGasolina: 40,
        flex: false
      };
      ​
      const gol: carro = {
        marca: Marca.VOLKSWAGEN,
        capacidadeDeGasolina: 80,
        flex: true
      };
      ​
      const arrayDeCarros: carro[] = [uno, fusca, gol];
      ​
      // EXERCICIO 2
      ​
      function pegaCarrosPorMarca(carros: carro[], marca?: string): carro[] {
        if (!marca) {
          return carros.filter((el: carro) => {
            return el.marca === marca;
          });
        }
        return carros;
      }