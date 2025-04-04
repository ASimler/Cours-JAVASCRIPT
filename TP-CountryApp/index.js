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




let countries = [];


// Pour récupérer les données :
async function fetchCountries() {

    await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json()) 
    .then((data) => countries.push(data))
    .catch((err) => console.log(err));
    
    countries = countries[0];

    console.log(countries);
};


function countriesDisplay() {

    countriesUL.innerHTML = countries.map(
        (country) => {
            let name = country.name.common;
            let img = country.flags.png;
            let altImg = country.flags.alt;
            let population = country.population;
        
            console.log(name, img, altImg, population);

            // Pour récupérer les capitales même si certains n'en n'ont pas :
            let countryKeys = Object.keys(country);
            countryKeys.sort();
        
            let capital = '';
        
            if (countryKeys[2] === 'capital' || countryKeys[3] === 'capital') {
                capital = country.capital[0];
            } else {
                capital = "Aucune capitale pour ce pays";
            };

            console.log(capital);


            return `
            <li class="card">
                <h2>${country.name.common}</h2>
                <p>${capital}</p>
                <img src=${country.flags.png}>
                <p>Nombre d'habitants : ${country.population}</p>
            </li>
            `
        }
    ).join('');
};


window.addEventListener('load', () => {
    document.body.innerHTML += "<h2>Nous chargeons les données...</h2>";
    async function loadCountries() {
        await fetchCountries();
        document.body.querySelector('h2').remove();
    }
    
    loadCountries();
    setTimeout(() => {
        countriesDisplay();
    }, 3000);
});


// Il lui faut quand même au moins une seconde pour trouver les résultats

setTimeout(() => {
    console.log(countries[1]);
},1000);













// Avec une boucle for :
// async function fetchCountries() {

//     for (i = 0; i < 250; i++) {
//         await fetch("https://restcountries.com/v3.1/all")
//         .then((res) => res.json()) 
//         .then((data) => countries.push(data[i]))
//         .catch((err) => console.log(err));
//     }
    
//     console.log(countries);
// };