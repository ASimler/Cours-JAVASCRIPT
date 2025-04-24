"use strict";
console.log('yo');
// Pour compiler un fichier ts : dans la console -> tsc index.ts
// tsc --init dans la console pour montrer le json de ts
//  ET :
// watch = tsc -w dans la console pour watch les erreurs directement dans le terminal sans devoir compiler
// ************
// VARIABLES
// ************
let num1 = 24;
// num1 = false; /* surlignage de l'erreur */
// Déclarer un type :
let num2;
let numOrString;
// ************
// TABLEAUX
// ************
let arr = ["chien", "chat", "poisson"];
arr[0] = "cheval";
// arr[0] = 24; = error
// Déclarer le type d'un tableau :
let tableau = [];
// Déclarer deux types dans un tableau :
let tableau2 = [];
tableau2.push(false);
tableau2.push(24);
;
// Le ? permet de déclarer une variable qu'on ne connaîtra pas forcément
let dada = {
    id: 0,
    name: "Dada",
};
const sayName = () => {
    // console.log(player.surname); error surname doesn't exists
};
// ************
// CLASSES
// ************
// type "any" exists
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
;
const prince = new Singer(0, 'Prince');
console.log(prince);
// ************
// FONCTIONS
// ************
const sayMyName = (name) => {
    console.log(`Bonjour ${name}`);
};
sayMyName("Dada");
const ageDuCapitaine = (age, size) => {
    if (size) {
        console.log(`La taille du capitaine est de ${size} cm, et il est âgé de ${age} ans.`);
    }
    else {
        console.log(`Le capitaine est âgé de ${age} ans.`);
    }
    return 'OK cool';
};
// :void = on attend pas de return de toi
ageDuCapitaine(16);
ageDuCapitaine(16, 185);
// ************
// enum & Tuple
// ************
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
console.log(Role.ADMIN);
const user1 = {
    name: 'Julien',
    attributes: [false, 'author'],
    role: Role.ADMIN,
};
console.log(user1.role);
if (user1.role === Role.ADMIN) {
    console.log('Connexion spéciale admin');
}
