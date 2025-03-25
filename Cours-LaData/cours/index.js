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
