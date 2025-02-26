function counting_sort(arr, maxVal) {
    let count = new Array(maxVal + 1).fill(0);
    let output = [];

    for (let num of arr) count[num]++;
    for (let i = 0; i < count.length; i++) {
        while (count[i]-- > 0) output.push(i);
    }
    return output;
}

console.log(counting_sort([4, 2, 2,11, 23, 3, 8, 3, 3, 1], 100));
