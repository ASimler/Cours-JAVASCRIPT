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
