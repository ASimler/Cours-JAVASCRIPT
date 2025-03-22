// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
const nav = document.querySelector("nav");

// On l'implémente une première fois avec la valeur initiale
let scrollValue = window.scrollY;

window.addEventListener("scroll", (e) => {
  console.log(scrollValue);

  // Une fois le scroll commencé on le compare avec la variable scrollValue
  if (window.scrollY < scrollValue) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-60px";
  }

  // Une fois le test terminé on réimplémente scrollValue avec la nouvelle valeur du scrollY
  scrollValue = window.scrollY;
});
