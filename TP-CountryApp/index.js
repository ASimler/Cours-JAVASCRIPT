// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

// S'appuyer sur l'architecture de l'appli cuisine

// Architecture de la fonction d'affichage :
// countriesContainer.innerHTML = monTableau
//     .filter((country) => country.nomdupays.includes(inputSearch.value))
//     .sort((a, b) => {
//         if (...) {
//             return ...
//         } else if (...) {
//             return ...
//         }
//     })
//     .slice(0, inputRange.value)
//     .map((country) => `
//         <div> class="card">

//         </div>    
//     `);

// Au début : ne pas faire filter/sort/slice mais uniquement le map puis ajouter les 3



// ------------
// TP - SCRIPT
// ------------

// Constantes et variables :
const countriesUL = document.getElementById("countries");
const countriesContainer = document.querySelector(".countries-container");
const search = document.getElementById("inputSearch");
const range = document.getElementById("inputRange");
const rangeSpan = document.getElementById("rangeValue");
const btnSort = document.querySelectorAll(".btnSort");

let countries = [];
let countrySearched = '';
let countriesSlice = [];
let countriesSort = [];
let countriesValues = [];
let triVar = "maxToMin";

// Pour récupérer les données :
async function fetchCountries() {
    await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => countries = data)
    .catch((err) => console.log(err));
    console.log(countries);
}

// Pour afficher les données directement :
function countriesDisplay() {
    if (!countries.length) {
        countriesContainer.innerHTML = '<h2>Aucune donnée à afficher</h2>';
    } else {
        countriesContainer.innerHTML = countries
        .filter((country) =>
            country.translations.fra.common.toLowerCase().includes(search.value.toLowerCase())
        )   
        .sort((a, b) => {
            if (triVar === 'maxToMin') {
                return b.population - a.population;
            } else if (triVar === 'minToMax') {
                return a.population - b.population;
            } else if (triVar === 'alpha') {
                return a.translations.fra.common.localeCompare(b.translations.fra.common);
            }
        })
        .slice(0, inputRange.value)
        // Fallbacks avec || si capital et alt non existants
        .map(country => `
            <div class="card">
                <img src="${country.flags.svg}" alt="${country.flags.alt || 'Drapeau'}">
                <h2>${country.translations.fra.common}</h2>
                <p>Capitale : ${country.capital?.[0] || "Aucune capitale"}</p>
                <p>Population : ${country.population.toLocaleString()} habitants</p>
            </div>
        `).join('');
    }
}

window.addEventListener('load', async () => {
    const loadingMsg = document.createElement('h2');
    loadingMsg.textContent = "Chargement des données...";
    document.body.prepend(loadingMsg);
    // prepend() insère des objets ou string avant le premier enfant de l'élément courant, ici le body. Ils sont appelés "noeuds".

    await fetchCountries(); // Attend la fin du fetch
    loadingMsg.remove();
    countriesDisplay(); // Affiche immédiatement après
});

// Input focus
search.addEventListener('input', (e) => {
    countriesDisplay();
})

// Input not focus without value : réafficher tous les pays
search.addEventListener('focusout', (e) => {
    if (!e.target.value.trim()) {
        countriesDisplay();
    } 
});

// Input Range
range.addEventListener('input', (e) => {
    rangeValue = e.target.value;
    rangeSpan.textContent = rangeValue;
    countriesDisplay();

});


// Tris
btnSort.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        triVar = e.target.id;
        countriesDisplay();
        
    })
})
