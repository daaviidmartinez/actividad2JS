
let compra = []; //en esta array se almacenara los valores que le pase.
let lista=""; //en esta variable se almacenara primero los valores para subirlo despues a la array

while (lista != "salir") /* hacemos un while, mientras lista sea diferente de salir, hara el prompt */ {
        lista=prompt("Dime tus items de compra, escribir salir para terminar la lista")
    if (compra.includes(lista))/*compara lo que hay dentro de la array, si ya esta el objeto te salta el alert*/ {
        alert("No puedes comprar lo mismo");
    }   
    else {
        if( lista != "salir")/*este if lo que hace es, si lista es diferente a salir, hace un push a compra desde lista*/{
            compra.push(lista);
        }    
    }
}
console.log(compra);
