// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

// Pour que la popup ne vienne qu'une seule fois : use booléen
let playOnce = true;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    // 0 ou lui a mis 50
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }

  // L'image doit apparaître à 45% de scrollY pour s'adapter à toutes les tailles d'écran :
  // Il faut créer une variable avec le % de scrollY
  // La valeur max du body = document.body.offsetHeight

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  // ATTENTION : window.scrollY correspond au pixel supérieur de la barre de scroll donc il faut lui ajouter sa taille = window.innerHeight

  console.log(scrollValue);

  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(0px)";
  }

  console.log(window.scrollY);

  if (scrollValue > 0.85 && playOnce == true) {
    // && permet d'ajouter plusieurs conditions au if
    console.log("OK");
    popup.style.opacity = "1";
    popup.style.transform = "translateX(0px)";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = "0";
  popup.style.transform = "translateX(400px)";
});
