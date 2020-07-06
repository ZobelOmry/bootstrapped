function bubbleSort(arr) {
    while (true) {
        let sortedIteration = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sortedIteration = false;
            }
        }
        if (sortedIteration) return arr;
    }
}

console.log(bubbleSort([5, 2, 66, 1, 3, 9]));