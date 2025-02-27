function jump_search(arr, target) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n))
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n))
        if (prev >= n) {
            return -1;
        }
    }

    for(let i=prev;i<Math.min(step, n);i++){
        if(arr[i] == target) return i;
    }

    return -1;
}

console.log(jump_search([10, 20, 30, 40, 50, 60, 70, 80, 90], 80));