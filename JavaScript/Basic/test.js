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


var result=hotelCost(-45)
console.log(result)