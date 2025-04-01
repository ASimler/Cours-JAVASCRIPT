// https://api.blablagues.net/?rub=blagues

// Première chose à faire : tester le lien via l'url pour voir s'il fonctionne bien !

const header = document.getElementById("header");
const jokeText = document.getElementById("content");


function getJoke() {
    fetch('https://api.blablagues.net/?rub=blagues')
    .then((res) => res.json())
    .then((data) => { 
        const { content } = data.data;
        // Destructuring
        console.log(content);
        
        header.textContent = content.text_head;
        jokeText.textContent = content.text !== "" ? content.text : content.text_hidden;
        // ici on a utilisé l'opérateur !== ('! = = ') car si les deux sont vides il répondrait true avec l'opérateur '?'
    });
}


getJoke();

document.body.addEventListener('click',getJoke);
// Sans les parenthèses de la fonction !
