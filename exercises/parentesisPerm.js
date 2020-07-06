function parenthesis(n) {
    if (n == 1) {
        return [['(', ')']];
    }

    const parenArr = parenthesis(n - 1);

}

console.log(parenthesis(1))