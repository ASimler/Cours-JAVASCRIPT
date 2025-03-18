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
// console.log(inputName);

inputName.addEventListener("input", (e) => {
  // quand on écrit dedans : pour récupérer le text saisi :
  console.log(e.target.value);
});
