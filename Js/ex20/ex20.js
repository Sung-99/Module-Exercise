const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let linhas = [];
rl.on('line', (input) => {
    
    
    if (linhas.length < 1) {
        linhas.push(Number((input.split(' '))[0]));
        linhas.push(Number((input.split(' '))[1]));
        linhas.push(Number((input.split(' '))[2]));
        quickSort(linhas, 0, linhas.length); 
        rl.close();
    }
    for (let i = 0; i < linhas.length; i++) {
        console.log(linhas[i] + " ");
    }   
});

function partition(arr, low, high)
{

    // Choose the pivot
    let pivot = arr[high];

    // Index of smaller element and indicates
    // the right position of pivot found so far
    let i = low - 1;

    // Traverse arr[low..high] and move all smaller
    // elements to the left side. Elements from low to
    // i are smaller after every iteration
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    // Move pivot after smaller elements and
    // return its position
    swap(arr, i + 1, high);
    return i + 1;
}

// Swap function
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// The QuickSort function implementation
function quickSort(arr, low, high)
{
    if (low < high) {

        // pi is the partition return index of pivot
        let pi = partition(arr, low, high);

        // Recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}


//

// Optimized javaScript implementation
// of Bubble sort
/*function bubbleSort(arr, n){
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++){
        swapped = false;
        for (j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
}*/