// ... = espalhador = spread
let ColectionHtml = document.getElementsByTagName("div")
console.log(ColectionHtml)
let ArrayHtml = [...ColectionHtml]
console.log(ArrayHtml)
for(let i=0;i<ArrayHtml.length;i++){
    console.log(ArrayHtml[i])
}
