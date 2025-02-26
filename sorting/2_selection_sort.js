function selection_sort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min_index = i; 
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j; 
            }
        }

        if (min_index !== i) {
            [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
        }
    }

    return arr;
}

let numbers = [64, 3, 25, 12, 22, 11];
console.log("Sorted array:", selection_sort(numbers));
