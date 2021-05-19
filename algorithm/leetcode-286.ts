

function MissingNumber(arr) {
    var len = arr.length;
    var total = 0;
    var total1 = 0;
    for (var i = 0; i < len + 1; i++) {
        if (i < len) total += arr[i];
        total1 += i;
    }
    return total1 - total;
}

console.log(MissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))