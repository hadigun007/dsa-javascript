function merge_sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = merge_sort(arr.slice(0, mid));
    let right = merge_sort(arr.slice(mid));

    return merge(left, right)
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

let numbers = [6, 3, 25, 12, 22, 11];
console.log("Sorted array:", merge_sort(numbers));