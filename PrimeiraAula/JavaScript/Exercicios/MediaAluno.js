/*
1) faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a media
e a sua classificação conforme a tabela abaixo.

    Méida = (nota1 + nota2 + nota3) / 3;

    Classificação:
     - Media menor 5, reprovação
     - Média entre 5 a 7, recuperação
     - Média acima de 7, passou de semestre;
*/

const nota1 = 5;
const nota2 = 3;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log("Reprovado");
}
else if(media >= 5 && media <= 7){
    console.log("Recuperação");
}
else{
    console.log("Passou");
}