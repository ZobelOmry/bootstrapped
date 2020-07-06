function permutations(strArr, index) {
    if (index == strArr.length - 1) {
        return [[strArr[index]]];
    }

    const permArr = permutations(strArr, index + 1);

    const output = [];
    permArr.forEach((perm) => {
        for (let i = 0; i <= perm.length; i++) {
            const newArr = [...perm];
            newArr.splice(i, 0, strArr[index]);
            output.push(newArr);
        }

    });
    return output;
}

console.log(permutations('2345'.split(''), 0));