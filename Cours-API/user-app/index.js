
let userData = [];

const fetchUser = async () => {   
    await fetch('https://randomuser.me/api/?results=24')
    .then((res) => res.json())
    .then((data) => userData = data.results)

    console.log(userData[0]);
    
};

// en refaisant un console.log() dans la console on voit que le navigateur a bien les éléments dans UserData mais le consolelog de la function arrive trop vite et la valeur n'est pas encore incrémentée. Donc on a ajouté un async/await.


const userDisplay = async () => {
    await fetchUser();

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        return newDate;
    };

    const dayCalc = (date) => {
        let today = new Date();
        // Pour faire des calculs sur des dates il faut les mettre en timeStamp :
        let todayTimeStamp = Date.parse(today);
        let timeStamp = Date.parse(date);

        return Math.ceil((todayTimeStamp - timeStamp) / 8.64e7);
    };

    document.body.innerHTML = userData
    .map(
    (user) => 
    `
        <div class="card">
            <img src=${user.picture.large} alt="photo de ${user.name.last}">
            <h3>${user.name.first}</h3>
            <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
            <em>Membre depuis : ${dayCalc(user.registered.date)} jours</em>
        </div>
    
    `)
    .join("");
};

userDisplay();