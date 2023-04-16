function nbYear(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 = p0 + Math.floor(p0 * (percent/100)) + aug;
        years ++;
    }
    return years;
}

console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500, 5, 100, 5000));