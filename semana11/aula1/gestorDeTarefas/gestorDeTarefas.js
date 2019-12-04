/*
Crie uma aplicação Node que receba uma string representando o nome 
da lista de tarefas e uma string representando uma nova tarefa, em seguida 
o programa deve adicionar a nova tarefa em um arquivo que tenha o nome da lista 
de tarefas.
*/

const fs = require('fs');
const fileName = "tarefas.txt";
const novaTarefa = process.argv[3];

try{
    const novaLista =`\n${novaTarefa}`;
    fs.appendFileSync(fileName,novaLista, 'utf8');
    console.log("Tarefa adicionada com sucesso!");
}catch(err){
    console.error(err)
}