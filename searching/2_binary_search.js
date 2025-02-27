// using recursive
function binary_search(arr, left, right, target){
    
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binary_search(arr, mid + 1, right, target);
    return binary_search(arr, left, mid - 1, target);
}

let arr = [10, 20, 30, 40, 50, 60];
console.log(binary_search(arr, 0, arr.length - 1, 40)); 

