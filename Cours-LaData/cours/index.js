// Rappel des types de données

let string = "chaine de caractères";
let number = 25;
let boolean = true;
// existe aussi type null = object

// Pour savoir le type de donnée d'une var :
// console.log(typeof number);
// --------------------------------------------------------------
// ************** TABLEAUX **************
// --------------------------------------------------------------
let array = ["Bordeaux", "Toulouse", "Nantes"];
// Attention : démarrage au n°0
// Tableau = crochets
// console.log(array[1]);
// console.log(
//   array[0][5]
// ); /* affiche la cinquième lettre du n°0 = a de Bordeaux */

// Autre exemple d'array :
let array2 = ["Bordeau", 25, true, [1, 2], { nom: "Denis" }];
// objet = {index: "valeur"}
// Pour afficher Denis attention il faut :
// console.log(array2[4].nom);
// On se balade dans l'objet avec des points

// --------------------------------------------------------------
// ************** OBJETS **************
// --------------------------------------------------------------
let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// Attention : dans le console log c'est rangé par ordre alphabétique
// console.log(objet.age);

// Ajouter un élément dans l'objet :
// objet.adresse = "22 rue du code";
// console.log(objet);
// A savoir : en JS on peut changer le type de la donnée nimporte quand/comment

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Adèle",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];
// Afficher le c du pseudo de Nicolas :
// console.log(data[2].pseudo[2]);

// --------------------------------------------------------------
// ************** LES STRUCTURES DE CONTROLE **************
// --------------------------------------------------------------
// *** IF ***
if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus âgé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// Peut s'écrire aussi sur qu'une seule ligne si petit sans accolades :
// if (valeur à tester) valeur si vrai
// Ou aussi :
// valeur à tester ? si vrai : si faux

// *** WHILE ***
let w = 0;

while (w < 10) {
  w++;
  // console.log("w = " + w);
}

// *** DO WHILE ***
// Très peu utiliséb
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// *** BOUCLES FOR ***
for (const user of data) {
  // chaque élément de data sera appelé "user"
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}
// ou
for (i = 0; i < data.length; i++) {
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>" + data[i].technos.join(" / ") + "</h2>";
}

// *** SWITCH ***
document.body.addEventListener("click", (e) => {
  // console.log(e.target.id);
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "purple";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

// --------------------------------------------------------------
// ************** LES METHODES **************
// --------------------------------------------------------------
// **************************************************************
// Méthodes String :
// **************************************************************
let string2 = "Javascript est un langage orienté objet";
console.log(eval(parseInt("1") + 2));
// parseInt() transforme des string en entiers
console.log(isNaN(string2));
// isNaN = is Not a Number ?

// Pour sortir le dernier caractère d'une chaine :
console.log(string2[string2.length - 1]);

// indexOf :
console.log(string2.indexOf("langage"));
// langage commence à l'index 18
// Si le terme n'y est pas il retourne -1

// SLICE :
// let newString = string2.slice(8);
let newString = string2.slice(5, 17); /* entre 5 et 17 */
console.log(newString);

// SPLIT :
console.log(string2.split("i"));
// Découpe à chaque fois qu'il croise un "i"

console.log(string2.toLowerCase());
console.log(string2.toUpperCase());

// REPLACE :
console.log(string2.replace("Javascript", "Php"));

// **************************************************************
// Méthodes Number :
// **************************************************************
let number2 = 42.1234;
let numberString = "42.12 est un chiffre";
console.log(number2.toFixed(2));
console.log(
  parseInt(numberString)
); /* Garde le premier nombre trouvé dans la chaine de caractère, ne tiens pas compte des points ou virgules */
console.log(parseFloat(numberString)); /* Tiens compte des points */

// L'objet Math :
console.log(Math.PI);
console.log(Math.round(4.8));
console.log(Math.floor(4.8)); /* Arrondi à l'inférieur */
console.log(Math.ceil(4.2)); /* Arrondi au supérieur */
console.log(
  Math.pow(2, 7)
); /* Puissances : 2 à la puissance 7 (aussi faisable en JS avec le double étoile ** ;*/
console.log(Math.sqrt(16)); /* ARacine carrée */

// Les plus importantes :
// **********************
console.log(
  Math.random()
); /* Chiffre aléatoire entre 0 et 1  * 50 si on veut entre 0 et 50 ou etc... */
console.log(
  Math.floor(Math.random() * 100)
); /* Pour qu'il n'y ait pas de virgule */

// **************************************************************
// Méthodes Arrays :
// **************************************************************
let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// Fusion de deux tableaux :
// let newArray = array3.concat(array4);
// console.log(newArray);
// OU :
let newArray = [...array3, ...array4]; /* ... = spread operator */
console.log(newArray);

// Méthode join :
console.log(
  array3.join("-")
); /* Créer une chaine de caractères avec les éléments du tableau séparés par des "tirets" ici */

// Méthode slice :
console.log(
  array3.slice(2)
); /* A retiré les deux premiers éléments du tableau */
// Peut prendre aussi 2 param : du n°x au n°y :
console.log(newArray.slice(3, 5));

// Index of !
console.log(array3.indexOf("Php"));

// For each :
array3.forEach((languages) => {
  console.log(languages);
});

// Test sur chaque élément :
console.log(array3.every((language) => language === "Php"));
// Attention : n'est pas capable de trouver une lettre précise dans chaque élément contitué d'un mot

// Some : savoir si le tbleau contient un élément précis :
console.log(array3.some((language) => language == "Php"));

// Shift :
// let shift = array3.shift(); /* Retire du tableau le premier index du tableau et le montre */
// console.log(shift);

// Pop :
// console.log(array3.pop());
// = retire le dernier élément du tableau et le montre

// SPLICE :
const restArray = array3.splice(
  1,
  1,
  "C++"
); /* A l'emplacement 1 tu retires un élément et du mets "C++" = remplace un élément */
console.log(restArray);
console.log(array3);

// IMPORTANT

let arrayNumber = [4, 74, 28, 12, 1];
console.log(arrayNumber.reduce((x, y) => x + y));
// reduce a additionné l'ensemble des nombres du tableau

// Ajouter un élément :
arrayNumber.push(17);
console.log(arrayNumber);

// FILTER, SORT, MAP
// *****************

console.log(arrayNumber.filter((number) => number > 10));
console.log(arrayNumber.sort()); /* sort le premier index, puis le 2 etc.. */
console.log(arrayNumber.sort((a, b) => a - b)); /* les range par ordre croissant */

console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b));
// En général on assemble plusieurs méthodes .

arrayNumber.map((number) => document.body.innerHTML += `<li> ${number}</li>`);

// Peut s'écrire aussi :
document.body.innerHTML += arrayNumber
  .map((number) => `<li> ${number}</li>`)
  .join("");

// **************************************************************
// Méthodes Objets :
// **************************************************************

// Pour lister les données d'un objet ou d'un tableau :
document.body.innerHTML += data
/*.filter((user) => user.admin === false)*/
.filter((user) => user.pseudo.includes("e"))
.sort((a, b) => b.age - a.age) /* Pour les classer du plus agé au plus jeune */
.map(
  (user) => 
    `<div class="user-card">
        <h2>${user.pseudo}</h2>
        <p>Age : ${user.age}</p>
        <p>Status : ${user.admin ? "Modérateur" : "Membre"}<p>
    </div>`)
.join("");


// **************************************************************
// Les dates :
// **************************************************************

// Dates Classiques :
let date = new Date(); /* Donne la date du jour */

// Timestamp :
let timestamp = Date.parse(date);
// console.log(timstamp); Nb secondes entre 1970 et ajourd'hui

// IsoString
let iso = date.toISOString();

// Pour traiter une date :
function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long", /* ou numeric ou short */
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric"
  });
  return newDate;
}

console.log(dateParser(date));
console.log(dateParser(timestamp));
console.log(dateParser(iso));

// Lien exercice dates sous la vidéo du cours


// **************************************************************
// DESCTRUCTURING :
// **************************************************************

let moreData = {
  destVar: ['Element 1', 'Element 2']
};

const { destVar } = moreData; /* signifie "moreData.destVar" */
// On a destructué le tableau pour pouvoir l'appeler plus facilement que par moreData.destVar

console.log(moreData.destVar);
console.log(destVar);

let array5 = [70, 80, 90];
// console.log(array5[0]);
// console.log(array5[1]);
// console.log(array5[2]);
// Plutot que de devoir mettre chaque élement dans une variable on peut déstructurer l'array :

let [x, y, z] = array5;
console.log(x, y, z);
// On a réussi à isoler chaque élément dans une variable différente


// On peut destructurer la date ISO pour isoler l'année le mois et le jour :
const dateDestructuring = (chaine) => {
  let newDate = chaine.split('T')[0]; /* le [0] permet de ne garder que le premier élément du split */

  // Pour casser la chaine de caractères en tableau :
  let [y, m, d] = newDate.split("-");
  
  return [d, m, y].join("/");
  // Casse le tableau et met un / entre les éléments
}

console.log(dateDestructuring(iso));


// **************************************************************
// Les Datasets :
// **************************************************************

// = données que l'on peut mettre dans des balise.

const h3js = document.getElementById('javascript');
console.log(h3js.dataset.lang);
// Voir HTML pour voir le code de dataset = data-something

const h3 = document.querySelectorAll("h3");

h3.forEach ((language) => console.log(language.dataset.lang));


// **************************************************************
// Les Regex :
// **************************************************************

// regex = expressions régulières

let mail = "adelesimler96@gmail.com";

// Fonction search : la regex se représente avec des slash :
console.log(mail.search(/adele/)); /* renvoie "0" si il le trouve et "-1" s'il ne le trouve pas */

console.log(mail.replace(/adele/, "de"));

// cheatsheet sous la vidéo du cours

console.log(mail.match(/SImler/i));
// i ne tiens pas compte de la casse
console.log(mail.match(/[zug]/i)); 
// est-ce que les lettres z ou u ou g sont présentes dans mail
console.log(mail.match(/[129]/i));

// Tous les chiffres :
console.log(mail.match(/\d/));

// Toutes les lettres :
console.log(mail.match(/[a-z]/));

// Controler un mail :

console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 23987876575

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")); 
// sépare tous les millilers dans un nombre par exemple







