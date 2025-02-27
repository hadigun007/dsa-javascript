function binary_search(arr, target){
    
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1; // Not found
}



function exponential_search(arr, target){
    if (arr[0] === target) return 0;

    let i = 1;
    while (i < arr.length && arr[i] <= target) i *= 2;

    return binary_search(arr.slice(0, Math.min(i, arr.length)), target);
}

console.log(exponential_search([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 40)); 