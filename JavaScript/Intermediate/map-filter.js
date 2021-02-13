const numbers = [243,25,242,56,7,8,2,1];
const output =[]
for (let i =0; i<=numbers.length; i++){
    const element= numbers[i];
    const squaredElement = element*element;
    output.push(squaredElement);
}
console.log(output);