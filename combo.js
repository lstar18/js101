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

const checkPalindrom = (string) => {
    let stringLength = string.length;
        if (stringLength === 0 || stringLength === 1){
            return true;
        }
    if (string[0] === string[stringLength -1]) {
        return checkPalindrom(string.slice(1, stringLength -1));
    }
        return false;
    };
    console.log(checkPalindrom("hello"));
    console.log(checkPalindrom("dad"));

const mouthSize = (animal) => {
    if (animal === 'alligator') {
        return 'small'    }
    else {
        return 'wide'
    }

};
    console.log(mouthSize('alligator'));
    console.log(mouthSize('frog'));
   