let num=[1,2,3]; //Declaramos una array con los numeros que queramos calcular*/

/* Creamos la funcion (numArray es el parametro que le pasamos como alias, hace referencia al array num)*/
function standarDeviation(numArray) {
    let suma = 0; /*Declaramos una variable llamada suma*/
    let resta = 0;
    for (let i = 0; i < numArray.length; i++) {
        suma += numArray[i];
        
        /*Este bucle lo que hace es ir recorriendo la array e ir sumando cada operacion a suma */
    }
    let media = suma / numArray.length;
    console.log(media);
        /*Creamos una variable en donde almacenaremos la media, lo dividimos entre numArray.length para asi dividirlo por
        la cantidad de numeros que tenga la array*/

    let sumed = 0;
    for (let i = 0; i < numArray.length; i++) {
        resta = media / numArray;
        sumed += Math.pow(resta, 2);
        
    }
    sumed = sumed /numArray.length;
    console.log(sumed);
    let desvtip = Math.sqrt(sumed);/* Esta funcion es para que me saque la raiz cuadrada */
    console.log(desvtip);
    
}

standarDeviation(num);  
