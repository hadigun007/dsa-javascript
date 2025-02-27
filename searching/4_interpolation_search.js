function interpolation_search(arr, target){
    let left = 0;
    let right = arr.length -1;

    while (left <= right && target >= arr[left] && target <= arr[right]){
        if(left===right){
            if(arr[left] === target) {
                return left;
            }
            return -1;
        }

        let pos = left + Math.floor(((target - arr[left]) * (right-left)) / (arr[right] - arr[left]));

        if(arr[pos] === target){
            return pos
        }
        if(arr[pos] < target) {
            left = pos+1
        }
        else{
            right = pos-1;
        }
        return -1;
    }


}


console.log(interpolation_search([10, 20, 30, 40, 50, 60, 70], 70));