class Musica {
    nome: string
    artista: string
    album: string
    ano: number

    constructor(nome: string, artista: string, album: string, ano: number) {
        this.nome = nome
        this.artista = artista
        this.album = album 
        this.ano = ano
    }

    tocar(){
        console.log(`Tocando agora ${this.nome} de ${this.artista}`)
    }
}

const musica1 = new Musica("Musica 1", "artista1", "Album1", 1990);
const musica2 = new Musica("Musica 2", "artista2", "Album2", 1989);

musica1.tocar();
musica2.tocar();