console.log('COMBO');

const evenOdd = (num) => {
    if (num % 2===0) {
    return ('Even')
    }
    else {
    return ('Odd')
    }

};
console.log(evenOdd(6));
console.log(evenOdd(10));
console.log(evenOdd(17));



const oppositeNum = (anyNum) => {
 return anyNum * -1
};
console.log(oppositeNum(500));

const checkPalindrome = (text) => {
    const cleanText= text.toLowerCase().replace(' ', ''); //removes spaces
    const opp = cleanText.split('').reverse().join('');

    return (cleanText === opp) 
};
console.log('palindrome', checkPalindrome("hello"));
console.log('palindrome', checkPalindrome("dad"));
console.log('palindrome', checkPalindrome("Race car"));

  

const mouthSize = (animal) => {
    if (animal.toLowerCase() === 'alligator') {
        return 'small'    }
    else {
        return 'wide'
    }

};
    console.log(mouthSize('alligator'));
    console.log(mouthSize('frog'));
    console.log(mouthSize('ALLigator'));
   