// aprovação escolar
// media de aprovação >= 6,nome do aluno
let nome = null;
let notas1 = null;
let notas2 = null;
let notas3 = null;
let notas4 = null;
let resultado = null;
console.log("Aprovado ou Reprovado\n")
console.log("digite o Nome do aluno e suas notas:")
nome = prompt("Aluno:")
notas1 = Number(prompt("digite a nota1:"))
notas2 = Number(prompt("digite a nota2:"))
notas3 = Number(prompt("digite a nota3:"))
notas4 = Number(prompt("digite a nota4:"))
let media = (notas1 + notas2 + notas3 + notas4) / 4
if(media >=6){
    resultado = true ?"aprovado":"reprovado"
    console.log(nome," foi ",resultado,"com média",media)
}
else{
    resultado = false ?"aprovado":"reprovado"
    console.log(nome," foi ",resultado,"com média",media)
}
