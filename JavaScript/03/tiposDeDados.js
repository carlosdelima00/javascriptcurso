//String
//Numbers
//Bool
//array
//objects
const ola = "olá,pessoal";
console.log(typeof ola);
console.log(ola);
let numeroInt = 5;
let numeroFloat = 5.5;
console.log(typeof numeroFloat,"\n",typeof numeroInt);
console.log(numeroFloat,"\n",numeroInt);
let VouF = false;
console.log(typeof VouF);
console.log(VouF ?1:0);
let ListaDeCompras = ["farinha","macarrão"];
console.log(ListaDeCompras);
ListaDeCompras[2] = "arroz";
console.log(ListaDeCompras);
// objects
let em1 = null;
let em2 = null
let Empregados = [
    [em1 = {nome:"carlos"}],
    [em2 = {nome:"marcos"}]
];
console.log(em1.nome);
console.log(em2.nome);

