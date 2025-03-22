// alert("Salut JS");

// en tapant : log il met immédiatemment console.log()
// console.log("Coucou");

// Attention : la casse est importante
// Le '-' est un moins : à ne pas utiliser dans les noms de variables ou autres
// Ne pas utiliser le '_" non plus, mais mettre des MajusculesEntreLesMots = Kamel Case

// ************************************************************************
// Variables :
// ************************************************************************
let maSuperVariable = "Hello";
// avant on écrivait "var" au lieu de "let" ou "const" mais var fonctionne toujours
// const prenom = "Justine";
// console.log(prenom);

// prenom = "Julie";
/* Ne peut pas fonctionner car la constante ne bouge pas ! */
// Pour avoir une variable qui peut évoluer :
let unChiffre = 24;
unChiffre = 22;
// console.log(unChiffre);

let chaine = "Je suis une chaine de caractères";
// les simples guillets ou les doubles sont identiques en JS. Faut juste mettre les memes dans la phrase.
// Pour insérer un guillemet dans une chaine il faut le précéder par : \ antislash

// Concaténation :
let nouvelleChaine = "Chaine précédente : " + chaine;
// console.log(nouvelleChaine);
// Concatenation avec guilleemets altgrt + 7 :
let autreConcatenation = `Chaine précédente : ${chaine} Voila une autre concatenation avec les guillemets de la touche 7`;

// console.log(nouvelleChaine);
// console.log(autreConcatenation);

// ************************************************************************
// Les types de données :
// ************************************************************************

let string = "Je suis une chaine de caractère";
let number = 28;
let boolean = true; /* ou false */

// Tableau : il y a des crochets : []
let array = ["je", "suis", 47, true];

// L'objet : il  y a des accolades : {}
let object = {
  prenom: "audray",
  age: 33,
  ville: "bordeaux",
};
// object = une clé: une valeur, une clé: une valeur,...

// On peut aussi renseigner la composition de la variable utlérieurement et uniquement la déclarer :
let arbre;

// ************************************************************************
// Les opérateurs :
// ************************************************************************
// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);
// console.log(4 ** 5); /* ** = puissance */

// Les opérateurs d'affectation :
let total = 0;
total = total + 1;
// console.log(total);
// Mais mauvaise pratique : mieux vaut faire :
total++;
// ++ => incrémenter de 1
// puis :
total += 5;
// ici on ajoute 5 à total ou :
total -= 2;
total *= 2;

// ************************************************************************
// Les structures de controle :
// ************************************************************************
let x = 2;
let y = 2;

// if (x > y) {
//   alert("yes x plus petit que y");
// } else if (y > x) {
//   alert("y est plus grand");
// } else {
//   alert("ils sont égaux");
// }

// On teste si la variable est true
let a = 2;
if (a) {
  // console.log("a existe");
  // signifie if a==true
}

// if ((x = y)) {
// console.log("ils sont égaux");
// Attention il ne teste pas l'égalité ici car ils donne à x la valeur de y
// }
// Pour tester une égalité il faut utiliser le triple égal === :
if (x === y) {
  // console.log("x et y sont égaux en valeur et type");
}
//  === teste l'égalité en type et en contenu

// == teste l'égalité de valeur sans prendre en compte le type :
if (x == y) {
  // console.log("x et y sont égaux en valeur");
}

//  || ou
//  && et
// let b = 7;
// if (a < b || a > 6) {
//   console.log("Oui");
// }

// if (a < b && a > 6) {
//   console.log("Oui");
// }

// ************************************************************************
// Les fonctions :
// ************************************************************************
// Fonction classique à l'ancienne
function faireQuelqueChose() {
  console.log("je fais un truc");
  console.log(5 + 6);
  alert("Calcul temriné");
}

// Il faut impérativement appeler la fonction pour qu'elle se joue (attention à bien mettrre les parenthèses : ())
faireQuelqueChose();

// La fonction flechée avec paramètres
const addition = (a, b) => {
  console.log(a + b);
};

addition(4, 3);

// ************************************************************************
// La portée des variables :
// ************************************************************************
function add2() {
  let a = 4;
  console.log(a + 2);
}
// Le return met fin à la fonction ou retourner une valeur
// Une variable déclarée dans la fonction n'existera pas ailleurs. C'est intéressant de les mettre dans la fonction si elle n'est utilisé qu'ici, cela évite de remonter en haut.
