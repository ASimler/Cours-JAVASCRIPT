const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ù!:;.,?#-_@°¤&éçè\'\"(=+)";

const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");



function generatePassword() {
    let data = [];
    let password = "";
    // Ensuite on veut tout mettre dans data caractère par caractère (use ...) : 
    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("Veuillez sélectionner des critères");
        return;
    }

    for (i = 0; i < rangeValue.value; i++) {
        password += (data[Math.floor(Math.random() * data.length)]);
    }

    passwordOutput.value = password;

    // Pour copier le mot de passe :
    passwordOutput.select();
    navigator.clipboard.writeText(window.getSelection());

    generateButton.textContent = "Coppié !";

    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe"
    }, 2000);
    
}

generateButton.addEventListener('click', generatePassword);
// Attention ici il ne faut pas mettre de parenthèses après la fonction sinon elle se joue direct.


