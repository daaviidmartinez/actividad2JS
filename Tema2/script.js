let dataArray = [1,2,3,4,5];
let x = 3;

function linearSearch(dataArray,valor) {
    for (let i = 0; i < dataArray.length; index++) {
        if (x == dataArray[i]) {
            return true;
        }
        
    }
    return false
}

let resultado = linearSearch(dataArray, x);
console.log(resultado);
