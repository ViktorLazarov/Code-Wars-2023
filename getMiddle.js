function getMiddle(s){
    let length = s.length;
    let result = '';

    if (length % 2 === 0) {
        result = s[(length/2)-1] + s[length/2];
    } else {
        result = s[Math.floor(length/2)]
    }
    return result;
}

console.log(getMiddle('testuu'));
console.log(getMiddle('testing'));
console.log(getMiddle('A'));