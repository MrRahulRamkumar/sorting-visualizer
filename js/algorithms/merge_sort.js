function mergeSort(a, d) {
    if (a.length <= 1) {
        return a;
    }
    d--;
    if (d < 1) {
        return a;
    }
    var mid = Math.round((a.length / 2));
    var left = a.slice(0, mid);
    var right = a.slice(mid);
    return merge(mergeSort(left, d), mergeSort(right, d));
}

function merge(left, right) {
    sorted = [];
    while (left && left.length > 0 && right && right.length > 0) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        }
        else {
            sorted.push(right.shift());
        }
    }
    return sorted.concat(left, right);
}