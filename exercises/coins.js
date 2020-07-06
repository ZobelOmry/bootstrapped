function sumArray(arr) {
    return arr.reduce((acc, num) => {
        acc += num;
        return acc;
    }, 0)
}
function coins(n, arr, output) {
    // console.log(n, arr, output);
    if (sumArray(arr) == n) {
        output.push(arr)
        return output;
    }
    if (sumArray(arr) > n) {
        return output;
    }

    coins(n, arr.concat([25]), output);
    coins(n, arr.concat([10]), output);
    coins(n, arr.concat([5]), output);
    coins(n, arr.concat([1]), output);

    return output;
}




console.log(coins(20, [], []));