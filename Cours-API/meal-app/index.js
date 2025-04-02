// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato

const result = document.getElementById('result');
const form = document.querySelector('form');
const input = document.querySelector('input');

let meals = [];


async function fetchMeals(search) {

    await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
    .then((res) => res.json())
    .then((data) => meals = data.meals);

    console.log(meals);
    
};



function mealsDisplay() {
    if (meals === null) {
        result.innerHTML = "<h2>Aucun résultat</h2>";
    } else {

        // Pour mettre que 12 plats :
        meals.length = 12;
        
        result.innerHTML = meals.map(
        (meal) => {
        // On peut mettre de la logique avant de return des choses dans un map = array.map ((x) => {logique puis return}).joint(''); :
        let ingredients = [];

        for (i = 1; i < 21; i++) {
            if (meal[`strIngredient${i}`]) {
                let ingredient = meal[`strIngredient${i}`];
                let measure = meal[`strMeasure${i}`];

                ingredients.push(`<li>${ingredient} - ${measure}</li>`);
                
                console.log(ingredients);
            }
        }

        // Pour rendre plusieurs lignes dans un map on peut utiliser des {} avec return et le guillet du 7 sur la même ligne que le return !!!
        return `
            <li class="card">
                <h2>${meal.strMeal}</h2>
                <p>${meal.strArea}</p>
                <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
                <ul>${ingredients.join("")}</ul>
            </li>
            `
        }
        ).join("");        
    };
};



input.addEventListener('input', (e) => {
    fetchMeals(e.target.value);    
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    mealsDisplay();
});
