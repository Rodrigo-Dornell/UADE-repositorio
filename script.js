let nombre = []
let apellido = []
let cuadro = []
nombre.push(prompt("ingrese nombre"))
apellido.push(prompt("ingrese apellido"))
cuadro.push(prompt("ingrese club del que es hincha"))

console.log(nombre+" "+apellido+" hincha de "+cuadro);
if(cuadro[0] === "boca") {
console.log(" hincha de un ex club");
}