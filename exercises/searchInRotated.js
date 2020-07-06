function searchInRotated(rotated, elem, start, end) {


    if (start >= end) return null;
    const middle = Math.round((start + end) / 2);
    if (rotated[middle] == elem) { return middle; }
    if (rotated[middle] < elem && rotated[end] > elem) {
        return searchInRotated(rotated, elem, middle + 1, end);
    }
    if (rotated[middle] < elem && rotated[end] < elem) {
        return searchInRotated(rotated, elem, start, middle);
    }
    if (rotated[middle] > elem) {
        return searchInRotated(rotated, elem, start, middle);
    }
}

const arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
console.log(searchInRotated(arr, 5, 0, arr.length - 1));