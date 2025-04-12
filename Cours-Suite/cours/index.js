"use strict";

// -----------------------------------------
// CANVAS
// -----------------------------------------

function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);
    // deux premières valeurs = position
    // deux dernières valeurs = taille
    
ctx.fillStyle = "rgba(0,100,200,0.5)";
ctx.fillRect(30, 30, 100, 50);

ctx.fillStyle = "rgba(0, 10, 230, 0.5)"
ctx.fillRect(100, 25, 100, 100);

ctx.clearRect(15, 25, 40, 40);
ctx.strokeRect(125, 75, 50, 50);

ctx.fillStyle = "rgba(200, 100, 200, 0.8)"
ctx.beginPath();
ctx.moveTo(180, 150);
ctx.lineTo(100, 75);
ctx.lineTo(100, 150);
ctx.fill();
}

window.addEventListener('load', draw);


// -----------------------------------------
// DRAG & DROP
// -----------------------------------------

// Voir exos


// -----------------------------------------
// TRY / CATCH
// -----------------------------------------

try {
    // Test un block de code
    maFonction();
} catch(err) {
    console.log(err);
}

function isValidJSON(txt) {
    try {
        JSON.parse(txt);
        return true;
    } catch(err) {
        return false;
    }
}

console.log(isValidJSON("ojhkhjjkh"));

try {
    // Test un block de code
    isValidJSON("jhswfg");
} catch(err) {
    console.log(err); 
} finally {
    console.log('On est arrivé au bout !');
    // Quoi qu'il arrive tu fais ça ! 
}

// Throw

function isNumber(num) {
    if (isNaN(num)) {
        throw "Not a number"
    } else {
        console.log("C'est un nombre"); 
    }
}
try {
    isNumber("kjfh");
} catch (err) {
    console.log(err);
    // catch attrape le throw
}
// Le throw arrête le code si la conditino est remplie


// -----------------------------------------
// STRICT MODE
// -----------------------------------------

// "use strict";   à déclarer en haut de page
voiture = "Toyota";
console.log(voiture);



// -----------------------------------------
// MODULES (IMPORT / EXPORT)
// -----------------------------------------

// Voir ./test-js : parcel (bunder)
// import export de functions entre fichiers .js



// -----------------------------------------
// LES TESTS
// -----------------------------------------

// IDEM IMPORT/EXPORT

// Dans le terminal on download l'outil : 
// npm i --save-dev jest
// Puis dans le json : scripts : 
// "test":"jest",
// Puis lancer : "npm run jest" dans la console

// Voir sa vidéo


// -----------------------------------------
// ECMA SCRIPT
// -----------------------------------------

// Normes standardisées pour faire évoluer le language
// Aller voir sur Wiki pour suivre les avancées !!!
// attendre un ou deux ans pour faire les nouveautés !


// -----------------------------------------
// CACHES
// -----------------------------------------

// Cache storage
// Voir le lien de la vidéo FS


// -----------------------------------------
// TYPESCRIPT
// -----------------------------------------

// Intaller : "npm i -g typescript"
// Permet de : déclarer le type des éléments et de ne pas pourvoir le changer ; idem pour les type des paramètres de fonction : utile pour certaines appli


// -----------------------------------------
// BIBLIOTHEQUES ET FRAMEWORKS
// -----------------------------------------

//  Bibliio "légères" :
// Aller voir sa chaîne là où il explore des biblio !!!
// (graph, parallax, 3D...)
// Aller voiiir ça a l'air trop cool !!



