let item;

document.addEventListener('dragstart', (e) => {
    item = e.target; 
});

// Retirer le sens interdit qui apparaît lorsqu'on attrape l'objet
document.addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.getAttribute("data-draggable") == "target") {
        e.target.appendChild(item);
    }
});

// Pour éviter d'éventuels soucis :
document.addEventListener('dragend', () => {
    item = null;
})