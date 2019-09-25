let sinVocales = prompt("Dime una frase y te quitare las vocales.")

function removeVowels(withoutVowels) {
    withoutVowels = withoutVowels.replace(/[aeiou]/gi, '')
    console.log(withoutVowles);
    
}

removeVowels(sinVocales);