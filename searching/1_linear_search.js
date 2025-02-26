function linear_search(arr, target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    // if data not found in list
    return -1;
}

const numbers = [10, 20, 30, 40, 50];
const target = 50;
const result = linear_search(numbers, target);

console.log(result !== -1 ? `Element found at index ${result}` : "Element not found");