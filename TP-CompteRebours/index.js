// Créer la logique de compte à rebours

// choice.value = 5 minutes

// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours

// input choice : id="choice"

// choice.value = 5;
console.log(choice.value);

choice.addEventListener('input', (e) => {
        // Calcul du total en secondes du temps choisi :
        totalSeconds = choice.value * 60;
        console.log(totalSeconds);
    
        // Ici on fait un Math.floor car lors du compte à rebours il faut que les minutes descendent... pas très clair mais bon :
        minutes = choice.value;
        console.log(minutes);
    
        // seconds = "00";
    
        countdownDisplay.innerHTML = `${minutes} : 00`;

})


form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let timer = setInterval(() => {
        if (totalSeconds < 1) {
            console.log('test');
            countdownDisplay.innerHTML = `0 : 00`;
            clearInterval(timer);
            window.location.reload();

        } else {
            totalSeconds = totalSeconds - 1;
            minutes = Math.floor(totalSeconds / 60);
            seconds = (totalSeconds % 60);
    
            if (seconds >= 10) {
                countdownDisplay.innerHTML = `${minutes} : ${seconds}`;
            } else {
                countdownDisplay.innerHTML = `${minutes} : 0${seconds}`;
            }

            stopTimer.innerHTML = '<button id="btnStopTimer">STOP</button>';
            document.getElementById('btnStopTimer').addEventListener('click', () => {
                window.location.reload();
            })
        }

    }, 1000);


    
    });






        // if (seconds < 10) {
        //     countdownDisplay.innerHTML = `${minutes} : 0${seconds}`;
        // } else if (minutes <= 0 && seconds <= 0) {
        //     countdownDisplay.innerHTML = "0 : 00";
        // } else {
        //     countdownDisplay.innerHTML = `${minutes} : ${seconds}`;
        // }