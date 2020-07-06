function cartesian(set, index) {
    const cartesianProduct = [];
    if (index == set.length - 1) {
        set[index].forEach((num) => {
            cartesianProduct.push([num]);
        });
        return cartesianProduct
    }

    const output = cartesian(set, index + 1);
    output.forEach((outputArr) => {
        set[index].forEach((num) => {
            cartesianProduct.push(outputArr.concat([num]));
        })
    })
    return cartesianProduct;
}


console.log('------- final output', cartesian([[1, 2, 6], [9, 5], [33, 0]], 0));