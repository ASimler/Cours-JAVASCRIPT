// ******************************************************
//  XMLHttpRequest
// ******************************************************

function reqListener() {
    console.log(this.responseText);    
}

let req = new XMLHttpRequest();
req.onload = reqListener;

// req.open('get', 'data.txt', true);
// req.open('get', 'data.json', true);
// req.open('get', "https://api.blablagues.net/?rub=blagues", true);
// req.send();

// ******************************************************
// FETCH
// ******************************************************

// = "Va chercher !"

// fetch("monLien", "objet d'option")
// .then((response) => {
//     // response top exploit
//     // console.log(response);
    
// })
// .catch((err) => console.log(err));

// On peut ajouter plusieurs ".then(() => {});" à la suite ou un ".catch(() => {});" pour log les erreurs.

// fetch('data.txt').then((res) => {
//     console.log(res);
//     // Ici on voit le header de la response
//     // status: 200 = bon signe :
//     // STATUS = Codes réponses HTTP :
//         // Les réponses informatives : 100 - 199
//         // Les réponses de succès : 200 - 299
//         // Les redirections : 300 - 399
//         // Les erreurs du client : 400 - 499 (ex : err 404)
//         // Les erreur du serveur : 500 - 599
// });


// Pour lire le fichier texte : 
// ---------------------------
// fetch('data.txt')
// .then((res) => res.text())
// .then((data) => console.log(data));

// fetch('data.json').then((res) => console.log(res));
// // Le body étant en ReadableStream on ne peut pas encore le lire, il faut appliquer la méthode .json() :

// fetch('data.json').then((res) => res.json()).then((data) => console.log(data));


// Passer des objets : 
// -------------------

const myHeaders = new Headers();

const init = {
    method: 'GET',
    // de base la méthode est en get
    // get = fournis-moi les données
    // (R) du CRUD : Create (POST), Read (GET), Update (PUT), Delete (DELETE)
    headers: myHeaders,
    mode: 'cors',
    // cors gère les permissions pour faire des requêtes
    cache: 'default'
}

// fetch("data.json", init).then((res) => console.log(res));

// POST :

// simuler un server avec npm json-server :
// ----------------------------------------
// 'json-server db.json' dans le terminal après avoir créé le fichier db.json, pour lancer le server

// Envoyer des données dans db.json via le server :
// ------------------------------------------------
// Incrément la db "posts" de db.json :  
// const init2 = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         pseudo: "Adele",
//         message: "Yo les gens !"
//     }),
//     mode: "cors",
//     credentials: "same-origin",
// };

// document.querySelector('form').addEventListener('submit', () => {
//     fetch('http://localhost:3000/posts', init2).then(() => console.log('Data envoyée'));
// });


// Incrément la db "users" de db.json :  
// const init3 = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         pseudo: "Adele",
//         age: "28"
//     }),
//     mode: "cors",
//     credentials: "same-origin",
// };

// document.querySelector('form').addEventListener('submit', () => {
//     fetch('http://localhost:3000/users', init3).then(() => console.log('Data envoyée'));
// });


// Pour supprimer un id dans db.json : 
// -----------------------------------
// const init4 = {
//     method: "DELETE",
//     headers: {
//         "Content-Type": "application/json"
//     },

//     mode: "cors",
//     credentials: "same-origin",
// };

// document.querySelector('form').addEventListener('submit', () => {
//     fetch('http://localhost:3000/posts/baf2', init2).then(() => console.log('Data envoyée'));
// });



// ******************************************************
// ASYNCHRONE
// ******************************************************

// Permet d'attendre avant d'exécuter du code 

// setTimout()
// -----------
setTimeout(() => {
    // console.log('test');
    
}, 2000);
// MAIS setTimeout est peu précis

// Promise
// -------
// fetch('monlien').then((res) => res.something);
// Ce code ne sera exécuté que lorsque le fetch('monlien') sera fait et qu'on aura des données en retour. Exemple après un addEvent sur un bouton lié au fetch

// async/await
// -----------
async function fetchData() {
    await fetch('minLien')
    // attend que le await soit exécuté avant de faire la suite
    // On peut faire plusieurs await

    executeFunction();
}

// ATTENTION : avec la fonction fléchée :
const fetchData2 = async () => {
    await fetch('monLien')

    executeFunction();
}


// ******************************************************
// FORMAT JSON
// ******************************************************
// = JavaScript Object Notation

// Méthode .json() = méthode qui s'auto-résout en renvoyant le body de la requête.

fetch('data.json')
.then((res) => res.json()) /* renvoie le body en texte */
.then((data) => {
    // Pour retransformer un objet en json :
    // 1. Stringify convertit en JSON :
    let settings = JSON.stringify(data);
    // console.log(settings);
    // 2. Parse transforme JSON en objet JS :
    // console.log(JSON.parse(settings));
});


// ******************************************************
// WEB API
// ******************************************************
// API du navigateur


// Client Storage
// --------------

// ***** Local storage : *****

// 10Mo de stockage sur Chrome et Firefox
// Les données ne sont pas transmises aux sites contraitement aux cookies

localStorage.data = "Je stock la data";
// Pour récupérer la data :
document.body.textContent = localStorage.data;


// Pour supprimer l'élément du localStorage :
localStorage.removeItem("data");

// Mettre çà jour le localStorage :
localStorage.user = "Denis";

// Attention il faut passer uniquement des chaînes de caractères :
const obj = {
    name: "Denis",
    age: 22,
};

localStorage.user = JSON.stringify(obj);

// Puis pour réinterpréter l'obj :

console.log(JSON.parse(localStorage.user));


// ***** Session storage : *****

// Stock des données le temps que l'utilisateur est sur la page Web : se met à jour s'il ferme le navigateur.
// sessionStorage.dataSettings = "55px";
// console.log(sessionStorage.dataSettings);
// Pour supprimer :
// sessionStorage.clear();


// ***** Cookies : *****

document.cookie = "username=Adele";

// De base un cookie si on ne lui donne pas de date d'expiration il s'arrête à l'arrêt de la session.
// Pour qu'il reste plus longtemps :
// document.cookie = "pseudi=Ad; path=/; max-age=450000; secure; samesite";
// max-age ou expire en date en format js


