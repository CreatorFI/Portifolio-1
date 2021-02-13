//10!

// function factorial(n){
//     if (n==1){
//         return 1;
//     }
//     else{
//         return n* factorial(n-1);
//     }
// }
// var result =factorial(10)
// console.log(result)



// function fibonacci(n){
//     var fibo =[0,1]

//     for (var i=2; i<=10; i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];
//     }
//     result fibo;


// console.log(fibo)

function fibonacci(n){
    if (n==0){
        return 0;
    }
    else if (n==1){
        return [0,1];
    }
    else{
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1]+fibo[n-2];
        fibo.push(nextElement);
        return fibo;
        
    }
}
var result =fibonacci(10);
console.log(result);