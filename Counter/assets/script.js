

function counter() {
    var people = document.getElementById("people").value;
    var hours = document.getElementById("hours").value;
    var total;
    var morePeople;

    if (people <= 4 && hours <= 3) {
        if (hours == 1) {
            total =  120;
        } else if(hours == 2) {
            total =  250;
        } else {
            total = 300;
        };
        document.getElementById("all").innerHTML = total;
    } else {
        morePeople = (people - 4) * 50;
        if (hours == 1) {
            total = 120 + morePeople;
        } else if (hours == 2) {
            total = 250 + morePeople;
        } else if (hours == 3) {
            total = 300 + morePeople;
        } else {
            total = hours * 400 + morePeople;
        }
        document.getElementById("all").innerHTML = total;
    };

    var proPerson = total / people;
    document.getElementById("proPerson").innerHTML = proPerson;
}
