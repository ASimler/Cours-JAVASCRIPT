let array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

function quickSort(array) {

    if (array.length === 1) {
        return array;
    }

    const pivot = array[array.length - 1]
    let arrayLeft = [];
    let arrayRight = [];

    for (let i = 0; i < array.length - 1; i++) {
        array[i] < pivot ? arrayLeft.push(array[i]) : arrayRight.push(array[i]);
    }

    if (arrayLeft.length > 0 && arrayRight.length > 0) {
        return [...quickSort(arrayLeft), pivot, ...quickSort(arrayRight)];
    } else if (arrayLeft.length > 0 ) {
        return [...quickSort(arrayLeft), pivot];
    } else {
        return [pivot,...quickSort(arrayRight)];
    }
    
}

console.log(quickSort(array));
