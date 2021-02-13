function kilometerToMeter(inKilometer){
    //checking given number is valid or not.
    if (inKilometer<0){
        return "Distance Cannot be negative. Please Enter a positive Value";
    }
    else{
        meter = inKilometer*1000;
        return meter ;
    }
    
}

function budgetCalculator(phone,watch,laptop){
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

function hotelCost(days){
    if (days<0){
        return "Not a acceptable information. Please Write Days.";
    }
    else{
        if (days <=10){
            // Total cost if days in equal or less than 10
            costOfTen= days*100;
            return costOfTen;
        }
        else if(days>10 && days<=20){
            // Total cost if days in equal or less than 20
            costOfTwenty= 1000+ (days-10)*80;
            return costOfTwenty;
        }
        else{
            // Total cost if days is greater than 20
            totalcost= 1800+(days-20)*50;
            return totalcost;
        }
    }
}

function megaFriend(array) {

    //First Checking which is the longest value in the array. 
    var longestName = array[0].length;
    //keeping the longest value
    var longest = array[0];
    for (var i = 1; i < array.length; i++) {
        var maximum = array[i].length;
        if (maximum > longestName) {
            output = array[i];
            longestName = maximum;
        }
    }
    return longest;

}
