function solve(input) {
    let sorted = input.sort((a,b) => a - b)
    let a = sorted[0];
    let b = sorted[1];
    return a + b;

}

solve([19, 5, 42, 2, 77])
solve([5, 8, 12, 19, 22])