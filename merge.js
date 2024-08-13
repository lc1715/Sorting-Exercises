function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i += 1;
        } else {
            result.push(arr2[j]);
            j += 1;
        }
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j += 1;
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i += 1;
    }

    return result;
}


function mergeSort(arr) {
    //base case 
    if (arr.length <= 1) {
        return arr;
    }

    let midPoint = Math.floor(arr.length / 2)

    let leftArr = mergeSort(arr.slice(0, midPoint))
    let rightArr = mergeSort(arr.slice(midPoint))

    return merge(leftArr, rightArr)
}

module.exports = { merge, mergeSort };