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
let num2:number;
let numOrString: number | string;

// ************
// TABLEAUX
// ************

let arr = ["chien", "chat", "poisson"];
arr[0] = "cheval";
// arr[0] = 24; = error

// Déclarer le type d'un tableau :
let tableau: number[] = [];
// Déclarer deux types dans un tableau :
let tableau2: (number | boolean)[] = [];

tableau2.push(false);
tableau2.push(24);
// tableau2.push('lol'); = error

// ************
// OBJETS
// ************

// Pour éviter de pouvoir ajouter des clés aux objets ou changer le type d'un objet etc... :
interface Player {
    id: number,
    name: string,
    jersey?: Number
};

// Le ? permet de déclarer une variable qu'on ne connaîtra pas forcément

let dada:Player = {
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
    id: number;
    name:string | number;
    alive?: boolean

    constructor(id: number, name: string | number, alive?: boolean) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
};

const prince = new Singer(0, 'Prince');
console.log(prince);

// ************
// FONCTIONS
// ************

const sayMyName = (name: string) => {
    console.log(`Bonjour ${name}`);
    
};

sayMyName("Dada");

const ageDuCapitaine = (age: number | string, size?: number):string => {
    if (size) {
console.log(`La taille du capitaine est de ${size} cm, et il est âgé de ${age} ans.`);
    } else {
        console.log(`Le capitaine est âgé de ${age} ans.`);
    }

    return 'OK cool';
}

// :void = on attend pas de return de toi

ageDuCapitaine(16);
ageDuCapitaine(16, 185);

// ************
// enum & Tuple
// ************

enum Role {ADMIN, PREMIUM, BASIC}
console.log(Role.ADMIN);


interface User {
    name: string;
    attributes: [number | boolean, string];
    role: Role;
}

const user1:User = {
    name: 'Julien',
    attributes: [false, 'author'],
    role: Role.ADMIN,
}

console.log(user1.role);

if (user1.role === Role.ADMIN) {
    console.log('Connexion spéciale admin');
}


