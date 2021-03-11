

function counter() {
    var people = document.getElementById("people").value;
    var hours = document.getElementById("hours").value;
    var priceHours;


    function sumHours() {
        if (hours == 1) {
            return priceHours =  120;
        } else if(hours == 2) {
            return priceHours =  250;
        } else if(hours == 3)  {
            return priceHours = 300;
        } else {
            return priceHours = 300 + (hours - 3) * 100;
        }
    }

    var morePeople = (people - 4) * 50;
    var total = sumHours() + morePeople;

    document.getElementById("all").innerHTML = total;


    var proPerson = total / people;

    document.getElementById("proPerson").innerHTML = proPerson;
}
