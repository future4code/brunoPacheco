const name = process.argv[2];
const age = (process.argv[3]);
console.log("Olá", name, "seja bem-vindo(a)!");

if(age >=18){
    console.log("você é maior de idade!");
} else {
    console.log("você é menor de idade!");
}