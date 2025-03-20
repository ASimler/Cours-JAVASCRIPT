// Création du compteur :
const counterDisplay = document.querySelector("h3");
let counter = 0;

alert("Explosez les bubulles !");

// Créer une fonction qui génère une bulle :
const bubbleMaker = () => {
  // Créer une bulle :
  const bubble = document.createElement("span");
  // Pour lui mettre la classe .bubble :
  bubble.classList.add("bubble");
  // Pour ajouter ce span au body :
  document.body.appendChild(bubble);

  // Pour random la taille des bulles : Math.random
  // console.log(Math.random()); --> Donne un chiffre entre 0 et 1
  // console.log(Math.random() * 100); --> Donne un chiffre entre 0 et 100 etc...

  // Pour avoir une taille entre 100 et 300 :
  // console.log(Math.random() * 200 + 100);
  const size = Math.random() * 200 + 100 + "px";

  // Pour ajouter la height et width à bubble :
  bubble.style.height = size;
  bubble.style.width = size;

  // Pour la positionner aléatoirement en top et left :
  bubble.style.top = Math.random() * 100 + 50 + "%";
  // ici on met + 50 car on veut qu'elle démarre du bas et qu'elle monte ensuite
  bubble.style.left = Math.random() * 100 + "%";
  // En pourcentage c'est mieux quand même pour être plus étalé sur la page

  // Pour random la left en positif ou négatif :
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  // Pour random la direction left de la bulle :
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  // Pour tuer la bulle quand on la click :
  bubble.addEventListener("click", () => {
    // counter += 1;
    counter++;
    counterDisplay.textContent = counter;
    counterDisplay.style.color = "rgba(95, 151, 21, 0.644)";
    bubble.remove();
  });

  // Pour supprimer la bulle au bout de 8 secondes :
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 300);
// Tous les 3 dixièmes de seconde

// ******************** CREER DES BULLES NOIRES PAS TOUCH ! ***********************

// Créer une fonction qui génère une bulle :
const bubbleBlackMaker = () => {
  // Créer une bulle :
  const bubbleBlack = document.createElement("span");
  // Pour lui mettre la classe .bubble :
  bubbleBlack.classList.add("bubbleBlack");
  // Pour ajouter ce span au body :
  document.body.appendChild(bubbleBlack);

  // Pour random la taille des bulles : Math.random
  // console.log(Math.random()); --> Donne un chiffre entre 0 et 1
  // console.log(Math.random() * 100); --> Donne un chiffre entre 0 et 100 etc...

  // Pour avoir une taille entre 100 et 300 :
  // console.log(Math.random() * 200 + 100);
  const size = Math.random() * 200 + 100 + "px";

  // Pour ajouter la height et width à bubble :
  bubbleBlack.style.height = size;
  bubbleBlack.style.width = size;

  // Pour la positionner aléatoirement en top et left :
  bubbleBlack.style.top = Math.random() * 100 + 50 + "%";
  // ici on met + 50 car on veut qu'elle démarre du bas et qu'elle monte ensuite
  bubbleBlack.style.left = Math.random() * 100 + "%";
  // En pourcentage c'est mieux quand même pour être plus étalé sur la page

  // Pour random la left en positif ou négatif :
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  // Pour random la direction left de la bulle :
  bubbleBlack.style.setProperty(
    "--left",
    Math.random() * 100 * plusMinus + "%"
  );

  // Pour tuer la bulle quand on la click :
  bubbleBlack.addEventListener("click", () => {
    counter--;
    counterDisplay.textContent = counter;
    counterDisplay.style.color = "rgba(238, 8, 8, 0.5)";
    bubbleBlack.remove();
  });

  // Pour supprimer la bulle au bout de 8 secondes :
  setTimeout(() => {
    bubbleBlack.remove();
  }, 8000);
};

setInterval(bubbleBlackMaker, 800);
