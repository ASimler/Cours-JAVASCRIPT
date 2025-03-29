// Convert today date to input format YYYY-MM-DD :
const today = new Date().toISOString().split("T")[0];
let daysPrice = 46;

start_date.value = today;
start_date.min = today;

// Tomorrow date calc :

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

let tomorrowFormat = tomorrow.toISOString().split('T')[0];

end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;





start_date.addEventListener('change', (e) => {
    let day = new Date(e.target.value);

    if (end_date.value < start_date.value) {
        day.setDate(day.getDate() + 1);
        end_date.value = day.toISOString().split("T")[0];
    }
});


end_date.addEventListener('change', (e) => {
    let day = new Date(e.target.value);

    if (end_date.value < start_date.value) {
        day.setDate(day.getDate() - 1);
        start_date.value = day.toISOString().split("T")[0];
    }
});


// Calcul du prix :

const bookingCalc = () => {
    let diffTime = Math.abs(new Date(end_date.value) - new Date(start_date.value));
    let diffDay = Math.ceil(diffTime / (1000 * 60 *60 * 24));
    console.log(diffDay);
    
    daysPrice = 46 * diffDay;

    total.textContent = `${daysPrice}`;

};

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);
// Quand on appelle on fonction direct dans un addEvent il ne faut pas mettre les parenthèses !! 
// Mais il l'appelle quand même ensuite comme ça :
bookingCalc();