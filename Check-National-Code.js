const CheckNationalCode = (code) => {
    let L = code.length;

    // Not 10 digits
    if (L < 10) return false;

    code = ("0000" + code).substr(L + 4 - 10);
    if (parseInt(code.substr(3, 6), 10) == 0) return false;
    let c = parseInt(code.substr(9, 1), 10);

    // Sum of digits * positions 
    let s = 0;
    for (let i = 0; i < 9; i++) {
        s += parseInt(code.substr(i, 1), 10) * (10 - i);
    }

    // Sum mod 11
    s = s % 11;
    return (s < 2 && c == s) || (s >= 2 && c == 11 - s);
}

export { CheckNationalCode };