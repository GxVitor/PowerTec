
// [] quer dizer que é uma lista, começa do 0 até quando precisar
// para pedir a posição chamar a variavel lista[3] e a posição

const alunos = ['vitor', 'joao', 'maria', 'leo'];

//push adiciona na list na ultima posição
alunos.push(2);

alunos[2] = 'Laura';

//tira o ultimo item da lista
alunos.pop();

//tira o primeiro intem da lista
alunos.shift();

//mostrar o tamanho da lista
alunos.length()

//for um laço de repitição e (a condição) declarar a variaveis iniciando em 0 ver se o i é menor que 10
//se for false ele vai executar os comandos dentro do {} e i++, e i = i + i dando um incemento no i
for(let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 0; i < alunos.length(); i++){
    console.log(alunos[i]);
}
console.log(alunos);