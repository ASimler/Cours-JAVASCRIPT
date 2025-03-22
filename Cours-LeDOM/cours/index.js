// ********************************************************
// LES SELECTEURS :
// ********************************************************

// Dans la console : document.querySelector('body') body ou autre élément que l'on veut pointer
// document.querySelector("h4").style.background = "yellow";
// querySelector est une méthod = function

// const baliseHTML = document.querySelector("h4");
// mettre la sélection dans une variable const permet de pointer directement et facilement un élément.
// Exemple d'utilisation :
// baliseHTML.style.background = "red";

// ********************************************************
// CLICK EVENTS :
// ********************************************************

const questionContainer = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
// on aurait du dire "answer"

// C'est toujours bien de log la variable que l'on crée pour savoir si elle est bien pointée

// ATTENTION :
// les tirets dans les attribus CSS ne sont pas pris en compte --> faire du kamelCase exemple : border-radius = borderRadius

// questionContainer.addEventListener('évènement', function);
// 2 paramètres :
questionContainer.addEventListener("click", () => {
  // console.log("Click !!");
  // Ici le style est injecté dans la balise html
  // questionContainer.style.background = "red";
  // Injection d'une class créée en CSS
  questionContainer.classList.toggle("question-clicked");
  // add : ajoute une class
  // toggle : permet d'ajouter la class au premier click puis de la retirer au click suivant et etc...
});

btn1.addEventListener("click", () => {
  // console.log("Clicked !");
  response.classList.toggle("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  // console.log("Clicked !");
  response.classList.toggle("show-response");
  response.style.background = "red";
});

// ATTENTION : si l'élément en CSS est sélectionné par un id cela ne fonctionne pas en ajoutant une class par dessus car il conservera les propriétés données à l'id car il est prioritaire :
// Ordre des priorités : <div style="xxx">Exemple<div/> > #id > .class > <baliseHTML />
// On peut contrer ça en ajoutant !important; à la propriété CSS

// ********************************************************
// MOUSE EVENTS :
// ********************************************************
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  // On peut récupérer l'évènement : e
  // console.log(e);
  // console.log(e.target);
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// Ici on pointe window car le .mousemove a un z-index trop bas et la souris ne clique pas réellement dessus ducoup :
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  // 25% car scale de 2
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

// mouseenter/mouseout = lorsque la souris survole un élément puis le quitte :
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

// mousehover : meilleur à faire en CSS mais existe en js :
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(5deg)";
});
response.addEventListener("mouseout", () => {
  response.style.transform = "rotate(0deg)";
});

// ********************************************************
// KEYPRESS EVENT :
// ********************************************************
const keyPressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// MAJ JS : on peut directement sélectionner un id sans '-' donc en KamelCase:

// Ajouter un son en JS :

// On crée une fonction qui va sonner :
const ring = (key) => {
  const audio = new Audio();
  // Audio() est un objet existant dans JS (la première lettre des objets JS est en majuscule)
  audio.src = "./" + key + ".mp3";
  audio.play();
  // play() est une method de l'objet Audio()
};
// On pourrait nommer nos fichiers audio par la lettre à presser et mettre audio.src = "./" + key + ".mp3"; ET mettre key en paramètre !!! et appeler la fonction plus bas avec le paramètre e.key
// On ne peut pas utiliser e.key car ce n'est pas une string

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "k") {
    // console.log("Bravo tu appuies sur k !");
    keyPressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keyPressContainer.style.background = "orange";
  } else {
    keyPressContainer.style.background = "red";
  }
  if (e.key === "z") {
    ring(e.key);
  }
});

// ********************************************************
// SCROLL EVENTS :
// ********************************************************
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // window.scrollY permet de donner la valeur du scroll
  if (window.scrollY > 120) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

// ********************************************************
// FORM EVENTS :
// ********************************************************
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  // quand on écrit dedans : pour récupérer le text saisi :
  pseudo = e.target.value;
});

// console.log(pseudo); à taper directement dans la console pour savoir si pseudo a bien été incrémenté

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // preventDefault() permet de ne pas recharger la page à chage submit qui est le comportement par défaut du navigateur

  if (cgv.checked) {
    // cgv = #cgv id : pas besoin de le déclarer en const car JS connait l'id des checkbox et des boutons TROP BIEN ! <3
    document.querySelector("form > div").innerHTML = ` 
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage préféré : ${language}</h4>    
    `;
    // ATTENTION : pour innerHTML ce sont les guillemets de la touche 7 qu'il faut utiliser : ils font de la concaténation plus simplement
  } else {
    alert("Veuillez accepter les CGV.");
  }
});

// ********************************************************
// LOAD EVENTS :
// ********************************************************
// Se déclenche une fois que toute la page a été chargée
// window.addEventListener("load", () => {
//   console.log("Document chargé !");
// });

// ********************************************************
// FOR EACH :
// ********************************************************
// Sélectionner plusieurs éléments de la même class :
// const boxes = document.getElementsByClassName("box"); Marche pas souvent mieux vaut utiliser :
const boxes = document.querySelectorAll(".box");

// Or on ne peut pas ajouter un addEventListener sur plusieurs éléments. Donc :
boxes.forEach((box) => {
  // Le premier paramèttre (ici box) correspond à comment ont va les appeler individuellement dans la suite de la fonction
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.8)";
  });
});

// ********************************************************
// addEventListener VS onclick :
// ********************************************************
// document.body.onclick = function () {
//   console.log("Click !");
// };
// Mais il est recommandé de faire un addEventListener car avec onclick ou onscroll, etc... on ne peut pas déclarer deux évènements différents sur un même élément.

// Bubbling => se déclenche à la fin (de base l'eventListener est paramétré en mode Bubbling : troisième argument = false)
document.body.addEventListener(
  "click",
  () => {
    console.log("Click n°1");
  },
  false
);
// false écrit de base, pas à mettre en vrai

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("Click n°2");
  },
  true
);
// Le click n°2 se fait en premier car mode usecapture

// ********************************************************
// STOP PROPAGATION OF AN EVENT :
// ********************************************************
// questionContainer.addEventListener("click", (e) => {
//   alert("Test !");
//   e.stopPropagation();
// });
// stop la propagation des events 'click' suivants sur cet élément

// removeEventListener existe pour supprimer dans une fonction un event si besoin

// ********************************************************
// BOM (Browser Object Model) :
// ********************************************************
// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("https://www.google.com", "Cours JS", "height=600, width=800");
// Pour fermer une fenêtre ouverte comme ça on peut faire ensuite window.close();

// EVENTS ADDOSSES A WINDOW :

// ALERT
// alert est un event de window mais on est pas obligé de l'écrire window.alert('hey');

// CONFIRM
btn2.addEventListener("click", () => {
  confirm("Voulez-vous vraiment vous tromper ?");
  // Donne à l'utilisateur la possibilité d'annuler son action son click
});

// PROMPT
let answer;

btn1.addEventListener("click", () => {
  answer = prompt("Entrez votre nom  !");

  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
  // += permet de ne pas écraser ce qu'il y avait avant dedans
});

// SETTIMEOUT
// setTimeout(() => {
//   // Logique à exécuter
// }, "temps en millisecondes avant de déclencher");
setTimeout(() => {
  questionContainer.style.borderRadius = "150px";
}, 2000);
// sert à faire exécuter du code après un temps donné

// SETINTERVAL
// let interval = setInterval(() => {
//   document.body.innerHTML += "<div class='box'><h2>Nouvelle Boîte !</h2></div>";
// }, 1000);
// // Pour l'arrêter avec un click par exemple :
// document.body.addEventListener("click", () => {
//   clearInterval(interval);
// });

// retirer un élément cliqué dans une fonction :
// e.target.remove()

// LOCATION
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search); /* Pour les ?query=... */
// location.replace("https://lequipe.fr");

// window.onload = () => {
//   // location.href = "http..."
// };

// NAVIGATOR
// console.log(navigator.userAgent);
// On peut localiser le user :
// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// HISTORY
// console.log(history);
// pour revenir sur la page précédente du projet :
// window.history.back();
// pour revenir d'un nombre de page précis :
// history.go(-2);

// SETPROPERTY
// En JS on ne peut pas sélectionner un ::after ou un ::before
// on a injecté dans les positions top et left du css de l'after des variables x et y
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
// layerX et Y s'utilisent lorsqu'on survole un objet
