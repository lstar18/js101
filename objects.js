console.log('OBJECTS'); 

//returns length of words
const wordLength  = (word) => {
return word.length
};
console.log('num of letters', wordLength ('cat')); //3
console.log('num of letters', wordLength ('hello')); //5

const ageCheck = (age) => {
    if (age >= 21) {
        console.log('PARTY!!!!')
    }
    else {
        console.log('No drinks for you');
    }

}
ageCheck(12);
ageCheck(24);

