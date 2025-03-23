const target = document.getElementById("target");

let array = ["développeur", "photographe", "créatif"];

let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

// Récursivité : une fonction qui s'appelle elle-même :
const loop = () => {
  setTimeout(() => {
    // Si on doit revenir au premier mot :
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();

      // Si on est dans le mot :
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();

      // Si on doit changer de mot :
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();
