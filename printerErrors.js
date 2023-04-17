function printerError(s) {
    let chars = s.split('');
    let errors = 0;
    for (const char of chars) {
        // if (!char.charCodeAt(0) < 97 && char.charCodeAt(0) > 109) {
        //     errors++;
        // }
        debugger
        if (!char < 'a' || char > 'm') {
            errors++;
        }
    }
    return `${errors}/${s.length}`;
    
}


console.log(printerError('aaabbbbhaijjjm'));
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));