function quick_sort(arr){
    if(arr.length<=1){
        return arr;
    }

    let pivot = arr[arr.length - 1]
    let left  = []
    let right = []

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quick_sort(left), pivot, ...quick_sort(right)];
}

let numbers = [64, 3, 25, 12, 22, 11];
console.log("Sorted array:", quick_sort(numbers));
