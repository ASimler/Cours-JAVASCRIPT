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

fetch('data.json').then((res) => console.log(res));
// Le body étant en ReadableStream on ne peut pas encore le lire, il faut appliquer la méthode .json() :

fetch('data.json')
    .then((res) => res.json())
    .then((data) => console.log(data));