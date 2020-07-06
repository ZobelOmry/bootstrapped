function sortedMerge(arrA, arrB) {
    let indexA = 0;
    for (let indexB = 0; indexB < arrB.length; indexB++) {
        if (arrA[indexA] >= arrB[indexB]) {
            arrA.splice(indexA, 0, arrB[indexB]);
        } else {
            while (indexA < arrA.length && arrA[indexA] < arrB[indexB]) {
                indexA++;
            }
            arrA.splice(indexA, 0, arrB[indexB]);
        }
    }
    return arrA;
}

console.log(sortedMerge([4, 10, 22, 34, 55], [25, 29, 36, 100]))