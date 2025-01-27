function filterArray(numbers, value) {
    const filteredNumbers = [];

    for (const number of numbers) {
        if (numbers > value) {
            filteredNumbers.push(number);
        }
    }

    return filteredNumbers;
}