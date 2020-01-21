console.log('Arrays');

const junkDrawer = ['hi', 2, true, {name: 'Liza Star'}, [1,2,3,4]];

console.log(junkDrawer[2]);
junkDrawer.push('fluffy');


//function valuePrinter

const valuePrinter = (arr, idx) => {
    return arr[idx];

};
// const numArray = [1, 2, 3, 4,5];
//console.log(valuePrinter(numArray, 2))

console.log(valuePrinter([1, 2, 3, 4, 5], 2)); //3
console.log(valuePrinter(['cat', 'dog', 'bear', 'turle', 'fish'], 3)); //turtle
