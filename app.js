//1

function esParImpar (numero) {
    if (numero % 2 === 0) {
       // console.log(`El ${numero} es par`)
        return `El ${numero} es par`
    }
    else {
       // console.log(`El ${numero} es impar`)
        return `El ${numero} es impar`
    }
   
}

//esParImpar(10)


//2



const esMayorIgual = (numeroA, numeroB) => {
    if (numeroA > numeroB){
        console.log(`El ${numeroA} es mayor`)
        return `El ${numeroA} es mayor`
    }
    else if (numeroA < numeroB){
        console.log(`El ${numeroB} es mayor`)
        return `El ${numeroB} es mayor`
    }
     else {
        console.log(`Son iguales`)
        return `son iguales`
    }
    
}

//esMayorIgual(2, 2)



//3

const valor1 = (numero) => {
    if (numero % 5 == 0){
        console.log(`El ${numero} es multiplo de 5`)
    }
    else{
        console.log(`El ${numero} no es multiplo de 5`)
    }
}

//valor1(14)

//4 

function escala (numero){
   for(let i = 0; i <= numero; i++) {
        console.log(i);
    }
}
//escala(3);

//5

function escala2 (palabra, numero){
    for(let i = 0; i < numero; i++){
        console.log(palabra);
    }
}

escala2('pablo', 2)

//valores primitivos: numeros, booleanos, undefined, strings.

//6

function recorrerArray (item){
    for(let i = 0; i < item.length; i++){
        const elemento = item[i]
        console.log(elemento)
    }  


}
const array1 = ["estadio", "jugador", "pelota"]
recorrerArray(array1)

//7

function recorrerArray2 (array) {
    for (let i = 0; i < array.length; i++) {
        if(i === 4){
            continue
        }
        const element = array[i];
        console.log(element)
    }
}

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
recorrerArray2(array2)


//8
function multiplicacion(array1, numero){
    for(let i = 0; i < array1.length; i++){
        console.log(array1[i] * numero);
    }
    
}

let array = [100, 200, 300]
let multiplo = 2

multiplicacion(array, multiplo);





