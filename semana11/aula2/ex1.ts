type especificacao = {
    marca: string,
    tanque: number,
    flex: boolean
}

const up:especificacao = {
    marca: "volkswagen",
    tanque: 47,
    flex: true
}

const up2:especificacao = {
    marca: "volkswagen",
    tanque: 47,
    flex: true
}

const frota: especificacao[] = [up,up2]

console.log(frota)