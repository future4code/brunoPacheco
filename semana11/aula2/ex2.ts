type especificacao= {
    marca:string,
    tanque:number,
    flex:boolean
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


const arrayDeCarros:especificacao[] = [up,up2]


function frota (carro:especificacao[],marca?:string):especificacao[] {
    return carro.filter((el:especificacao)=> {
        return el.marca=== marca
    }
    )}

console.log(frota(arrayDeCarros, "volkswagen"))