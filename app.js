let oneEuro = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

function fromEuroToDollar(euro) {
    return euro * oneEuro.USD;
}

function fromDollarToYen(dollar){
    let euro = dollar / oneEuro.USD;
    return euro * oneEuro.JPY;
}

function fromYenToPound(yen){
    let euro = yen / oneEuro.JPY;
    return euro * oneEuro.GBP;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};




// // We declare the function with the exact name "fromEuroToDollar"
//     const fromEuroToDollar = function(valueInEuro) {
// // Convert the given valueInEuro to dollars
//     let valueInDollar = valueInEuro * 1.07;
// // return the dollar value
//     return valueInDollar;
// }

// // This is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // Just a console log for ourselves
// console.log(sum(7,3))

// // Export the function to be used on other files 
// // (similar to the keyword "export" when using webpack)
// module.exports = { sum, fromEuroToDollar };
