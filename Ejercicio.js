
//Ejercicio 1 
const  array = [10, "5", "7", 9,23, "17"]
const result = array.map(x => Number(x)).reduce((a,b) => {
  return a * b
})
console.log(result)

//Ejercicio 2 
const nombres = ["flor", "marias", "katy", "rafael"]
const persona = nombres.filter(persona => persona.length===6)
console.log(persona)

//Ejercicio 3
const tabla7 = [1,2,3,4,5,6,7,8,9,10]
 tabla7.forEach(tabla7 => {
  const result = tabla7 * 7;
  console.log(`7 x ${tabla7} = ${result}`)
 })

 //Ejercicio 4
const frutas = ["manzana", "limon", "sandia", "pera", "toronja", "naranja"]
const resultado = frutas.filter(value => value==="sandia");
console.log(resultado)

//Ejercicio 5
const Usuarios=[
 
  {
    name: "Rafael perez",
    email: "rafael@gmail.com"
 },
{
    name: "Rosario Perez",
    email: "rosario@gmail.com"
 },
{
    name: "Rodrigo avila",
    email: "rodrigo@gmail.com"
 },
{
    name: "Alberto Campos",
    email: "alberto@gmail.com"
 },
]

const resultados= Usuarios.find(Usuarios=>Usuarios.email==='rafael@gmail.com');
console.log(resultados)

//Ejercicio 6
const arreglo = [1,6,3,4,2,56,10]
const resultado1 = arreglo.sort((a, b) => a - b);
console.log(resultado1)

//Ejercicio 7
const arreglos = [80,9,30,49,59,60,74]
const resultado2 = arreglos.every(numero => numero > 5)
console.log(resultado2)

//Ejercicio 8
const arreglo1 = [2,2]
const arreglo2 = ["Flor", "Maria"]
const arreglo3 = [true,false]

const resultado3 = arreglo1.concat(arreglo2,arreglo3)
console.log(resultado3)

//Ejercicio 9
const arregloo = [1,2,3,4,5]

const resultad = arregloo.shift()
console.log(arregloo)

//Ejercicio 10
const arreglo10 = [12,6,7,8,11,10,9,5,3,43]
const resultt = arreglo10.findIndex(value => value===5);
console.log(resultt);

//Ejercicio 11
// const areglo = [1,2,3,4,5,6,7,8,9,10]
