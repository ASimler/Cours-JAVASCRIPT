const canvas = document.getElementById('art');
const ctx = canvas.getContext('2d');

// Récupérer la position de la souris dans le canvas :
function getMousePos(e) {
    // Obtenir les dimensions du canvas :
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }
}

function mouseMove(e) {
    const mousePos = getMousePos(e);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();  /* stroke() crée une ligne */
    ctx.strokeStyle = "salmon";
    ctx.lineWidth = 8;
}

canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    // prevent pour éviter d'emporter des choses avec nous

    const mousePos = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);
    
    canvas.addEventListener('mousemove', mouseMove);

    // Arrêt lors du relâchement de la souris :
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', mouseMove);
    });
});

reset.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

