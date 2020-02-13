function merge(s, low, middle, high) {
    let i;
    let buf1 = [], buf2 = [];
    for (let i = low; i <= middle; i++) {
        buf1.push(s[i]);
    }
    for (let j = middle + 1; j <= high; j++) {
        buf2.push(s[j]);
    }

    i = low;
    while (!(!buf1.length || !buf2.length)) {
        if (buf1[0] <= buf2[0]) {
            s[i++] = buf1.shift();
        } else {
            s[i++] = buf2.shift();
        }
    }
    while (!!buf1.length) s[i++] = buf1.shift();
    while (!!buf2.length) s[i++] = buf2.shift();

}

function mergesort(s, low, high) {
    let middle;
    if (low < high) {
        middle = Math.floor((low + high) / 2);
        mergesort(s, low, middle);
        mergesort(s, middle + 1, high);
        merge(s, low, middle, high);
    }
}

let arr = [5, 6, 1, 8, 6, 4, 3, 9];
mergesort(arr, 0, arr.length - 1);
console.log(arr)