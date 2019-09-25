let Tbase = 10;
let Pmin = 0;

let min = Number(prompt("Dime tus minutos hablados"));


    if (min > 240) {
        Pmin = min - 240; 
        Tbase = Tbase + 6;
        Pmin = Pmin * 0.20;
        console.log (`Tu precio es ${Pmin + Tbase}`);
    } else if (min > 180 && min <=240) {
        Pmin = min - 180;
        Pmin = Pmin * 0.10;
        console.log(`Tu precio es ${Pmin + Tbase}`);
        
    } else {
        console.log(`Tu precio es ${Tbase}`);
        
    }