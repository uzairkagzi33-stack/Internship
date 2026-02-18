function sortArray(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) 
    {
    for (let j = 0; j < n - i - 1; j++) 
    {
        if (arr[j] > arr[j + 1]) 
        {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        }
    }
    }

    return arr;
}

function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
    } else {
        result.push(arr2[j]);
        j++;
    }
    }  

  // Add remaining elements
    while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
    }

    while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    }

    return result;
}

let a = [5,4,3,2,1]
let b = [9,6,8,7]
let aSort = sortArray(a)
let bSort = sortArray(b)

let result = mergeSortedArrays(aSort,bSort)
console.log(result);