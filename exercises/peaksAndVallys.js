function PnV(arr, index) {
    console.log(index, arr);

    if (index + 1 == arr.length - 1) {
        console.log('boom?', arr);
        return arr;
    }

    if (arr[index] < arr[index + 1]) {
        if (arr[index + 2] != arr.length) {
            if (arr[index + 1] < arr[index + 2]) {
                const temp = arr[index + 1];
                arr[index + 1] = arr[index + 2];
                arr[index + 2] = temp;
            }
            PnV(arr, index + 1);
        }
    }
    if (arr[index] > arr[index + 1]) {
        if (arr[index + 2] != arr.length) {
            if (arr[index + 1] > arr[index + 2]) {
                const temp = arr[index + 1];
                arr[index + 1] = arr[index + 2];
                arr[index + 2] = temp;
            }
            PnV(arr, index + 1);
        }
    }
    if (arr[index] == arr[index + 1]) PnV(arr, index + 1);
}

const inputArr = [5, 3, 1, 2, 3, 4, 5, 6];
PnV(inputArr, 0)
console.log('----', inputArr);