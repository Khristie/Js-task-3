const Function= (parameter) => {
    numberDivisible= [];
    for (let i = 0;  i < parameter; i++) {
        numberDivisible[i]= i+1;
    if(
        numberDivisible[i] % 2 === 0 &&
        numberDivisible[i] % 3 === 0 &&
        numberDivisible[i] % 5 === 0
    )
    numberDivisible[i] = "yu-gi-oh";
    if (numberDivisible[i] % 2 === 0 && numberDivisible[i] % 5 === 0 )
    numberDivisible[i] = "yu-oh";
    if (numberDivisible [i] % 2 === 0 && numberDivisible[i] % 3 === 0)
    numberDivisible[i] = "yu-gi";
    if (numberDivisible[i] % 2 === 0) numberDivisible [i] = "yu";
    if (numberDivisible[i] % 3 === 0) numberDivisible [i] = "gi";
    if (numberDivisible[i] % 5 === 0) numberDivisible [i] = "oh";
    
    }
    return numberDivisible;
};

Function(100);
console.log(numberDivisible);
Function(50);
console.log(numberDivisible);
