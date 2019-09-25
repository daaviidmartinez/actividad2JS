let sides = (20);
let raza = "";

while (raza !="human" && raza != "elven" && raza != "dwarf" && raza !="mage") {
    raza = prompt("Elije la raza que te guste: huan, elven, dwarf, mage");
}

alert("Has elejido" +raza);
createRPGCharacter(raza);

function diceThrow(sides) {
    let x = Math.random();
    x = (x * sides) + 1;
    return Math.floor(x);
}

function createRPGCharacter(race) {
    let str = 0;
    let spd = 0;
    let vit = 0;
    let dex = 0;
    let mag = 0;
    let stats = [];
    if (race == "human") {
        str = 8 + diceThrow(6) + diceThrow(6);
        spd = 4 + diceThrow(6);
        vit = diceThrow(20);
        dex = diceThrow(20);
        mag = 1 + diceThrow(10);
        stats.push(str,spd,vit,dex,mag);
        console.log(raza,stats);
        return stats;
    }

    else if (race == "elven"){
        str = 6 + diceThrow(4) + diceThrow(4);
        spd = diceThrow(20);
        vit = diceThrow(12);
        dex = 3 + diceThrow(10) + diceThrow(10);
        mag = diceThrow(20);
        stats.push(str,spd,vit,dex,mag);
        console.log(raza,stats);
        return stats;
    }

    else if (race == "dwarf"){
        str = 10 + diceThrow(10);
        spd = diceThrow(8) + diceThrow(8);
        vit = 10 + diceThrow(8);
        dex = diceThrow(20);
        mag = diceThrow(8);
        stats.push(str,spd,vit,dex,mag);
        console.log(raza,stats);
        return stats;
    }

    else {
        str = diceThrow(6);
        spd = 4;
        vit = diceThrow(10);
        dex = diceThrow(20);
        mag = 12 + diceThrow(8);
        stats.push(str,spd,vit,dex,mag);
        console.log(raza,stats);
        return stats;
    }
}

function getDamage(race,damage) {
    if (race == "human"){
        damage = 1.5 *str + 0.4 * dex;
        return damage;
    }

    if (race == "elven"){
        damage = str + 1.2 * dex + 0.1 * mag;
        return damage;
    }

    if (race == "dwarf") {
        damage = 2 * str;
        return damage;
    }
    
    if (race == "mage") {
        damage = 2 * mag + 0.1 * dex;
        return damage;
    }
}

function getDefense(race,defense) {
    if (race == "human") {
        defense = vit + 0.2 * spd;
        return defense;
    }

    if (race == "elven") {
        defense = 1.3 * spd + 0.5 * vit;
        return defense;
    }

    if (race == "dwarf") {
        defense = 1.1 * vit + 1.1 * str;
        return defense;
    }

    if (race == "mage") {
        defense = 0.8 * mag + 0.3 * spd;
        return defense;
    }
}

function simulateBattle(race, firtsCharacterStats, secondCharacterStats){
    if (firtsCharacterStats[dex] < secondCharacterStats[dex]) {
        firtsCharacterStats = getDamage(race);
    }
    else if (firtsCharacterStats[dex] > secondCharacterStats[dex]){
        secondCharacterStats = getDamage(race);
    }
    
}