// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix : fait en CSS avec .active span {}

// Aide
// Priorités en CSS : id > classe > baliseHtml

// Récupérer la sidebar dans une var :
const sideBar = document.getElementById("side-bar");
const content = document.querySelector(".content");
console.log(content);

btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  // Mettre l'opacité au fond : voir CSS .active ~ .content {};
});

// Pour que lorsqu'on click sur content ça range la sidebar :
content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
