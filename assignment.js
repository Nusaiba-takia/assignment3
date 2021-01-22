//kilometerToMeter
function kilometerToMeter(myInput) {
    if (myInput <= -1) {
      return "Wrong input!";
    } else {
      var kiloToMeter = myInput * 1000;
      return kiloToMeter;
    }
  }
  console.log(kilometerToMeter(5));

  //budgetCalculator
function budgetCalculator(quantityOfWatch, quantityOfMobile, quantityOfLaptop) {
    if (quantityOfWatch < 0 || quantityOfMobile < 0 || quantityOfLaptop < 0) {
      return "Wrong input!";
    } else {
      //calculation of total watch
      var priceOfWatch = quantityOfWatch * 50;
      //calculation of total mobile
      var priceOfMobile = quantityOfMobile * 100;
      //calculation of total laptop
      var priceOfLaptop = quantityOfLaptop * 500;
      //total produc costs
      var totalPrice = priceOfWatch + priceOfMobile + priceOfLaptop;
      return totalPrice;
    }
  }
  console.log(budgetCalculator(20, 40, 50));

  //hotelCost
function hotelCost(day) {
    if (day > 0) {
        var cost = 0;
        if (day <= 10) {
            cost = day * 100;
        }
        else if (day <= 20) {
            var firstTenDays = 10 * 100;
            var restOfTheDays = day - 10;
            var secondTenDays = restOfTheDays * 80;
            cost = firstTenDays + secondTenDays;
        }
        else {
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var restOfTheDays = day - 20;
            var ThirdTenDays = restOfTheDays * 50;
            cost = firstTenDays + secondTenDays + ThirdTenDays;
        }
        return cost;
    }
}

console.log(hotelCost(25));


//megaFriend
function megaFriend(friend_name)
  {
  return friend_name.reduce(function(longname, friend) 
  {
    return longname.length > friend.length ? longname : friend;
  }, 
"");
}
console.log(megaFriend(["Nusaiba Takia", "Adiba Ahiya", "Isatur Radia", "Masnun Mahir"]));


