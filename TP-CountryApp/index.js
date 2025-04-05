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
console.log(countriesUL);
const search = document.getElementById("inputSearch");
const range = document.getElementById("inputRange");
const rangeSpan = document.getElementById("rangeValue");

let countries = [];
let countrySearched = '';

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
        countriesUL.innerHTML = '<h2>Aucune donnée à afficher</h2>';
    } else {
        // Fallbacks avec || si capital et alt non existants
        countriesUL.innerHTML = countries.map(country => `
            <li class="card">
                <h2>${country.name.common}</h2>
                <p>Capitale : ${country.capital?.[0] || "Aucune capitale"}</p>
                <img src="${country.flags.png}" alt="${country.flags.alt || 'Drapeau'}">
                <p>Population : ${country.population.toLocaleString()} habitants</p>
            </li>
        `).join('');
    }
}

// Pour mettre à jour les données avec l'input :
function updateCountryDisplay(foundCountries) {
    if (foundCountries.length === 0) {
        countriesUL.innerHTML = countrySearched 
            ? '<li>Aucun pays trouvé</li>'
            : '';
        return;
    }
    
    countriesUL.innerHTML = foundCountries.map(country => `
        <li class="card">
            <h2>${country.name.common}</h2>
            <p>Capitale : ${country.capital?.[0] || "Aucune capitale"}</p>
            <img src="${country.flags.png}" alt="${country.flags.alt || 'Drapeau'}">
            <p>Population : ${country.population.toLocaleString()} habitants</p>
        </li>
    `).join('');
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

// Pour afficher les données demandées par l'utilisateur :
// Input focus
search.addEventListener('input', (e) => {
    const newSearch = e.target.value.trim().toLowerCase();
    // trim() retire les espaces inutiles ajoutés par l'utiisateur en début et en fin de string
    
    // Éviter de traiter si la valeur n'a pas changé
    if (newSearch === countrySearched) return;
    
    countrySearched = newSearch; 

    const countryFound = countrySearched ? countries.filter(country => country.name.common.toLowerCase().includes(countrySearched)) : [];

    updateCountryDisplay(countryFound);

    if (newSearch.length == 0) {
        countriesDisplay()
    }
})


// Input not focus without value : réafficher tous les pays
search.addEventListener('focusout', (e) => {
    if (!e.target.value.trim()) {
        countriesDisplay();
    } 
});

let countriesSlice = [];

// Input Range
range.addEventListener('input', (e) => {
    rangeValue = e.target.value;
    rangeSpan.innerHTML = rangeValue;
    
    countriesSlice = Object.entries(countries).slice(0, rangeValue).map(entry => entry[1]);

    updateCountryDisplay(countriesSlice);

});









// -------------------------------------------------
// Optimisation deepseek à revoir : 
// Variables
// let countrySearched = '';
// let searchTimeout;

// // Pour afficher les données demandées par l'utilisateur :
// search.addEventListener('input', (e) => {
//     const newSearch = e.target.value.trim().toLowerCase();
    
//     // Éviter de traiter si la valeur n'a pas changé
//     if (newSearch === countrySearched) return;
    
//     countrySearched = newSearch;
    
//     // Debounce pour éviter de traiter à chaque frappe
//     clearTimeout(searchTimeout);
//     searchTimeout = setTimeout(() => {
//         const countryFound = countrySearched 
//             ? countries.filter(country => 
//                 country.name.common.toLowerCase().includes(countrySearched))
//             : [];
            
//         updateCountryDisplay(countryFound);
//     }, 300);
// });

// // Input not focus without value
// search.addEventListener('focusout', (e) => {
//     if (!e.target.value.trim()) {
//         countriesDisplay();
//     }
// });

// // Fonction helper pour mettre à jour l'affichage
// function updateCountryDisplay(foundCountries) {
//     if (foundCountries.length === 0) {
//         countriesUL.innerHTML = countrySearched 
//             ? '<li>Aucun pays trouvé</li>'
//             : '';
//         return;
//     }
    
//     countriesUL.innerHTML = foundCountries.map(country => `
//         <li class="card">
//             <h2>${country.name.common}</h2>
//             <p>Capitale : ${country.capital?.[0] || "Aucune capitale"}</p>
//             <img src="${country.flags.png}" alt="${country.flags.alt || 'Drapeau'}">
//             <p>Population : ${country.population.toLocaleString()} habitants</p>
//         </li>
//     `).join('');
// }

// Fon optimisation
// -------------------------------------------------







// -----------------------------------
// Code non utile (mais intéressant) :
// -----------------------------------

// Pour récupérer les capitales même si certains n'en n'ont pas :
// let countryKeys = Object.keys(country);
// countryKeys.sort();

// let capital = '';

// if (countryKeys[2] === 'capital' || countryKeys[3] === 'capital') {
//     capital = country.capital[0];
// } else {
//     capital = "Aucune capitale pour ce pays";
// };
