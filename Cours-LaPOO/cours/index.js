// Rappel des objets
// ATTENTION : le type of d'un objet et d'un array dans la console est "object"...
// Chaque balise est un object.

const obj = {
    pseudo: "Adele",
    ville: "Le Thor",
    admin: false,

    direBonjour: function() {
        console.log("Bonjour je suis " + this.pseudo);
        // this désigne les choses à l'intérieur d'un objet
    }
}

// Ajouter
obj.age = 28
// ou
obj["admin"] = true

// Modifier
obj.pseudo = "Adèle"

// Supprimer
delete obj.ville

// Interroger si une propriété existe :
console.log("pseudo" in obj);
console.log("ville" in obj);

// Parcourir un objet :
for (const key in obj) {
    console.log(key + " : " + obj[key]);
}

// fonctions dans un objet = méthodes
console.log(obj.direBonjour());

// -----------------------------------------------
// Méthodes natives dans JS :
// -----------------------------------------------

// Pour obtenir les clés d'un obj :
const keys = Object.keys(obj);
console.log(keys);

// Obtenit les valeurs :
const values = Object.values(obj);
console.log(values);

// Décomposer l'objet :
const nestedArray = Object.entries(obj);
console.log(nestedArray);

// Fusionner des objets :
const obj2 = {
    taille: "1m66",
    poids: "60kg",
    pseudo: "AD"
}

const fusion = Object.assign({}, obj, obj2);
console.log(fusion);
// Si une clé est déclarée deux fois, c'est la dernière déclaration qui l'emporte ex ici avec "pseudo"

// Méthode freeze
// Empêcher les modification et créations :
const newObj = Object.freeze(obj);
newObj.pseudo = "Test";
newObj.adresse = "42 avenue du Code";
console.log(newObj);
// Le pseudo reste Adèle et l'adresse n'est pas incrémentée


// Méthode seal
// Empêche les créations :
const newObjS = Object.seal(obj2);
newObjS.taille = "6m66";
newObjS.adresse = "42 avenue du Code";
console.log(newObjS);
// La taille change mais l'adresse n'est pas incrémentée


// -----------------------------------------------
// Construire des objets :
// -----------------------------------------------

// Fonction constructeur
// METTRE LA PREMIERE LETTRE EN MAJUSCULE !
function User(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;

    this.getCity = function() {
        console.log(this.pseudo + " habite à " + this.ville);
    }
}

const user1 = new User('Altarielle', 'Atlantide');
console.log(user1);

const user2 = new User('Miltrin', 'Océania');
console.log(user2);

console.log(user2.getCity());

// **********************************************

// Factory functions
function User3(pseudo, ville) {
    return {
        pseudo,
        ville
    }
}

const user4 = User3('pseudo4', 'ville4');
console.log(user4);

// **********************************************

// Classes

class Utilisateur {
    constructor(pseudo, ville) {
        this.pseudo = pseudo;
        this.ville = ville;
    }

    // +++ METHODS
    sayMyName = function() {
        console.log('Bonjour je suis ' + this.pseudo);
    }
}

const user5 = new Utilisateur('Laure', 'Cabriès');

// PROTOTYPES : plus rapides si déclar&ées en prototypes !!
// Ajout d'une fonction à la class
Utilisateur.prototype.sayCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
    // ATTENTION à ne pas faire de fonction fléchée car elle perd sa dépendance
}

console.log(user5.sayCity());

// Pour passer plusieurs fonctions à une class :
Object.assign(Utilisateur.prototype, {
  method1() {
    // Méthode 1
  },
  method2() {
    // Méthode 2
  }
})

console.log(user5);


// L'HERITAGE
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    saySomething(text) {
        console.log(this.name + " dit : " + text);
    }
}

class Dog extends Animal  {
    run() {
        console.log("Le chien court !");
    }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin);


class Cat extends Animal {
    hunt() {
        console.log("J'ai tué un oiseau !");
    }
}