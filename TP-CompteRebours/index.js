let timer;
let totalSeconds;
let minutes;
let seconds;

choice.addEventListener('input', (e) => {
        if (isNaN(choice.value)) {
            alert('Veuillez entrer un chiffre');
        } else {
            // Calcul du total en secondes du temps choisi :
            totalSeconds = choice.value * 60;

            minutes = choice.value;
        
            countdownDisplay.textContent = `${minutes} : 00`;
        }
})


form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    // choice.value = "";
    choice.style.display = "none";
    // On aurait aussi pu clearInterval(timer); ici plutôt que de disable le form durant le chrono : le user aurait pu alors lancer directement un autre chrono même si l'autre n'était pas terminé. Au choix.

    timer = setInterval(() => {
        if (totalSeconds >= 1) {
            totalSeconds --;
            minutes = Math.floor(totalSeconds / 60);
            seconds = (totalSeconds % 60);

            let sec = seconds < 10 ? "0" + seconds : seconds;

            countdownDisplay.textContent = `${minutes} : ${sec}`;

            stopTimer.innerHTML = '<button id="btnStopTimer">STOP</button>';
            document.getElementById('btnStopTimer').addEventListener('click', () => {
                window.location.reload();
            });


        } else {
            countdownDisplay.textContent = `C'est terminé !`;
            clearInterval(timer);

            stopTimer.innerHTML = '<button id="btnStopTimer">Lancer un autre chrono</button>';
            document.getElementById('btnStopTimer').addEventListener('click', () => {
                window.location.reload();
            });
        }

    }, 100);


    
    });