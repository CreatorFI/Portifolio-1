function budgetCalculator(watch,phone,laptop){
    //per phone price=100
    //per watch price =50
    //per laptop price=500
    if (phone<0 || watch <0 || laptop<0){
        return "Please Buy something Or Correct Your Input";
    }
    else{
        totalPricePhone= phone*100;
        totalPriceWatch= watch*50;
        totalPriceLaptop= laptop*500;
        //counting total budget
        totalbudget= totalPriceLaptop+totalPricePhone+totalPriceWatch;

    return totalbudget;
    }
    
}
var result=budgetCalculator(5,10,15);
console.log(result);