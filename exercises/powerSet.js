function powerSet(set, index) {
    const additionalPowerSet = [];
    if (set.length - 1 == index) {
        additionalPowerSet.push([set[index]]);
        return additionalPowerSet;
    }
    const powerset = powerSet(set, index + 1);
    powerset.forEach((arr) => {
        additionalPowerSet.push(arr.concat([set[index]]));
    });
    additionalPowerSet.push([set[index]]);

    return additionalPowerSet.concat(powerset);
}

console.log(powerSet([2, 7, 6, 3], 0));