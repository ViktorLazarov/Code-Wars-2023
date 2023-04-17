function isPangram(string){
    let result = false;
    let arr = string.toLowerCase()
                    .split('')
                    .filter(x => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122);
    let uniqueArr = [];
    arr.forEach(element => {
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element)
        }
    });
    if (uniqueArr.length === 26) {
        result = true;
    }
    return result;
}


// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
// console.log(isPangram("This is not a pangram."));
console.log(isPangram('Cwm fjord bank glyphs vext quiz'));