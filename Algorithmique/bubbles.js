let array = [451, 2, 65, 4, 7, 98, 2, 3, 1];

function bubbleSort(array) {

    for (i = 0; i < array.length - 1; i++) {
        // - 1 car le dernier sera forcément le plus grand car il n'a pas de voisin à droite
    
        for (j = 0; j < (array.length) -1 -i; j++ ) {
            // - i car les i passés par la boucle sont déjà à leur place en bout de tableau
            
            if (array[j] > array[j + 1]) {
                // let temp = array[j];
                // array[j] = array[j + 1];
                // array[j + 1] = temp;

                // Syntaxe en une ligne avec JS :
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}

console.log(bubbleSort(array));


// TRI A BULLES AVEC .sort() :
function bubble(array) {
    console.log(array.sort((a, b) => a - b));
}

bubble(array);

