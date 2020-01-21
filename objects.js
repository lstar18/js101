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

const expense = {
    dateCreated: '01/17/2020',
    location: 'Baja Burrito',
    cost: 12.57,
    isGood: true
};
// .dot notations-always use
console.log(expense.cost)
//bracket notation
console.log(expense['cost'])

const employee = {
    id: '1234',
    firstName: 'Liza',
    lastName: 'Star',
    startDate: 'January 1st 2020',
    title: 'Teacher',
    gradeLevel: "4th",
    collegeDegree: true,
    age: 30,
    supervisor: '2345'
};
console.log(employee.firstName);
//created function called statusMaker that takes simgle meployy
//if employee firstname starts with an M then add key of status vip
//if employee firstname doesnt add key of status peaseant
//return employy
const statusMaker = (emp) => {
    if (emp.firstName.startsWith('M')) {
        emp.status = 'vip';
    }
    
    else {
        emp.status = 'peasant';
    
    }
    return emp;
}

console.log(statusMaker(employee));


