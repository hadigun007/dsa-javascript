function insertion_sort(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        let key = arr[i]
        let j = i-1;
        while (j >= 0 && arr[j]> key){
            arr[j+1] = arr[j];
            j--; 
        }
        arr[j+1] = key
    }
    return arr;
}

let numbers = [6, 3, 25, 12, 22, 11];
console.log("Sorted array:", insertion_sort(numbers));