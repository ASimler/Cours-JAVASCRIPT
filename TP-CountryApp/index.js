// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
coutry.name.includes(inputSearch.value);

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

