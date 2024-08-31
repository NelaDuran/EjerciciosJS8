//Ejercicio 1

const diccionarioDivisa = {
    euro:"€",
    dollar:"$",
    yen:"¥"
}

const buscarDivisa = prompt("Ingrese la divisa a buscar")
let divisa = diccionarioDivisa[buscarDivisa.toLowerCase()]
if(divisa  == undefined){
    console.log(`Su divisa no se presenta en el diccionario`)
}else{
    console.log(`La divisa es ${divisa}`)
}

//Ejercicio 2

const usuario = {
    nombre:"",
    edad:"",
    direccion:"",
    telefono:""
}

usuario.nombre = prompt(`Ìngrese el nombre`)
usuario.edad = prompt(`Ingrese la edad`)
usuario.direccion = prompt(`Ingrese la dirección`)
usuario.telefono = prompt(`Ingrese el telefono`)

const mensaje = `${usuario.nombre} tiene ${usuario.edad} años, vive en ${usuario.direccion} y su numero de telefono es ${usuario.telefono}`
console.log(mensaje)


//Ejercicio 3

const frutas = {
    platano:1.35,
    manzana:0.80,
    pera:0.85,
    naranja:0.70
}

const fruta = prompt(`Ingrese la fruta`).toLowerCase()

if(frutas[fruta] == undefined){
    console.log(`Su fruta no se presenta en el diccionario`)
}else{
    const pesoFruta = parseFloat(prompt(`Ingrese el peso de la fruta`))
    const valorFruta = frutas[fruta] * pesoFruta
    console.log(`fruta ${fruta.toUpperCase()} con peso ${pesoFruta}Kilos con valor de ${valorFruta}`)
}

//Ejercicio 4

let costoTotal = 0
console.log(`___________________________________________`)
console.log(`                                           `)
console.log(`           Lista de la compra              `)
console.log(`___________________________________________`)
do{
    salir = prompt(`Desea salir escriba (si) o (no)`).toLowerCase()
    if(salir != "si"){
       
        const cesta = {
            articulo:"",
            precio:0
        }
        cesta.articulo = prompt(`Ingrese el articulo`)
        cesta.precio = parseInt(prompt(`Ingrese el precio del articulo`))
        console.log(`${cesta.articulo}           ${cesta.precio}`)
        console.log(`___________________________________________`)
        costoTotal = costoTotal + cesta.precio
    }
}while(salir != "si")
    console.log(`Total          ${costoTotal}`)