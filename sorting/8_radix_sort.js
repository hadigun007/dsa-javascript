function radix_sort(arr) {
    let maxNum = Math.max(...arr);
    let digit = 1;
    
    while (maxNum / digit > 0) {
        arr = counting_sort_by_digit(arr, digit);
        digit *= 10;
    }
    
    return arr;
}

function counting_sort_by_digit(arr, digit) {
    let output = new Array(arr.length);
    let count = new Array(10).fill(0);

    for (let num of arr) count[Math.floor(num / digit) % 10]++;
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        let index = Math.floor(arr[i] / digit) % 10;
        output[--count[index]] = arr[i];
    }

    return output;
}


console.log(radix_sort([170, 45, 75, 90, 802, 24, 2, 66]));
