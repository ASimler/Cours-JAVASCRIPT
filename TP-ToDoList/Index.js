let taskValue = "";
// let indexTask = 0;

const form = document.querySelector('form');


// window.localStorage.maboite = "";

// --------------------------------------------------
// Storage :
// --------------------------------------------------
function storeList() {
    window.localStorage.todolist = list.innerHTML;
}

function getTodos() {
    if (window.localStorage.todolist) {
        list.innerHTML = window.localStorage.todolist;
    } else {
        list.innerHTML = `<li>Cliquez sur un toDo pour le supprimer</li>`
    }
}

window.addEventListener('load', getTodos());

// Test : stockage des to dos dans une var pour use en back :
let mesToDos = window.localStorage.todolist;

mesToDos = mesToDos.replace("<li>", "/");
mesToDos = mesToDos.replace("</li>", "/");
mesToDos = mesToDos.split("/");
// Voir la suite en python je pense
console.log(mesToDos);


// --------------------------------------------------
// Ajout d'un évènement au submit :
// --------------------------------------------------

form.addEventListener('submit', (e) => {
    e.preventDefault();

    taskValue = item.value;
    list.innerHTML += 
    `<li>${taskValue}</li>`;

    // Storage :
    storeList();

    // Pour faire revenir à 0 l'input une fois validé
    item.value = '';
});

// --------------------------------------------------
// Ajout d'un évènement au clic du li :
// --------------------------------------------------

list.addEventListener('click', (e) => {
    // Si il a déjà la classe active donc deuxième click : remove sinon premier click = ajout .active
    if (e.target.classList.contains('active')) {
        e.target.remove();
    } else {
        e.target.classList.add('active');
    }    

    // Storage :
    storeList();
});










// Mon code avec des checkbox :
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     taskValue = item.value;
//     list.innerHTML += 
//     `<li>
//     <input type="checkbox" id="task${indexTask}"></input>
//     <label for="task${indexTask}" id="label${indexTask}">${taskValue}</label>
//     </li>`;

//     window.localStorage.maboite += taskValue;
    
//     console.log(indexTask);
    
//     indexTask++;

//     // Pour faire revenir à 0 l'input une fois validé
//     item.value = '';
// });


// console.log(mesDonnees);


