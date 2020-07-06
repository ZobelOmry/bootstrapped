function tripleStep(n) {
    if (n < 0) return 0;
    if (n == 0) return 1;
    return tripleStep(n - 3) + tripleStep(n - 2) + tripleStep(n - 1);
}

console.log(tripleStep(9));