console.log("FUNCTIONS");
const nuggetizer = (animal) => {
const output = `processed ${animal}`;
return output;
//processed fish

};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('fish'));

const dogBreed = (dog) => {
return `My favorite dog is a ${dog}`;
;}
console.log(dogBreed ('lab'));

const fortyTwo = (number) => {
    return number + 42

}
console.log(fortyTwo(100));

const oldAge = (yearBorn) => {
    return 2099-yearBorn

}
console.log(oldAge(1989)); 