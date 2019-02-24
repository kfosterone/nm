

//The problem has been narrowed down to the value not being pulled from HTML to associate with array.


//ARRAY IS WORKING IN THIS FORMAT!!
var bed_prices = {"0" : 0, "1" : 20, "2" : 40, "3" : 60, "4" : 80, "5" : 100}
    //bed_prices["0"] = 0;
    //bed_prices["1"] = 20;
    //bed_prices["2"] = 40;
    //bed_prices["3"] = 60;
    //bed_prices["4"] = 80;
    //bed_prices["5"] = 100;


//Array is working in this format
var bath_prices = new Array();
bath_prices["1"] = 25;
bath_prices["2"] = 50;
bath_prices["3"] = 75;
bath_prices["4"] = 100;
bath_prices["5"] = 125;


//Array is working in this format
var service_prices = new Array();
service_prices["light"] = 30;
service_prices["standard"] = 40;
service_prices["deep"] = 50;
service_prices["move"] = 60;



function getBedroomPriceTop() {
    var bedPrice = bed_prices[document.getElementById('bedroom-top').value];
    return bedPrice;
}

function getBathroomPriceTop() {
var bathPrice = bath_prices[document.getElementById('bathroom-top').value];
    return bathPrice;

}


function getServicePriceTop() {

var servicePrice= service_prices[document.getElementById('service-top').value];
    
    return servicePrice;
}

function calculateTotalTop() {

    var totalPrice = getBedroomPriceTop() + getBathroomPriceTop() + getServicePriceTop();

    document.getElementById('button-top').innerHTML = "Book now for $" + totalPrice;
}

////////////////////////////////////////////////


function getBedroomPriceBottom() {
    var bedPrice = bed_prices[document.getElementById('bedroom-bottom').value];
    return bedPrice;
}

function getBathroomPriceBottom() {
var bathPrice = bath_prices[document.getElementById('bathroom-bottom').value];
    return bathPrice;

}


function getServicePriceBottom() {

var servicePrice= service_prices[document.getElementById('service-bottom').value];
    
    return servicePrice;
}



function calculateTotalBottom() {

    var totalPrice = getBedroomPriceBottom() + getBathroomPriceBottom() + getServicePriceBottom();

    document.getElementById('button-bottom').innerHTML = "Book now for $" + totalPrice;
}


////Mobile Top////////////////////

function BedPriceTopMob() {
    var bedPrice = bed_prices[document.getElementById('bedroom-top-mob').value];
    return bedPrice;
}

function BathPriceTopMob() {
var bathPrice = bath_prices[document.getElementById('bathroom-top-mob').value];
    return bathPrice;

}


function ServicePriceTopMob() {

var servicePrice= service_prices[document.getElementById('service-top-mob').value];
    
    return servicePrice;
}



function TotalTopMob() {

    var totalPrice = BedPriceTopMob() + BathPriceTopMob() + ServicePriceTopMob();

    document.getElementById('button-top-mob').innerHTML = "Book now for $" + totalPrice;
}
//Mobile  Bottom//////////////////:


function BedPriceBottomMob() {
    var bedPrice = bed_prices[document.getElementById('bedroom-bottom-mob').value];
    return bedPrice;
}

function BathPriceBottomMob() {
var bathPrice = bath_prices[document.getElementById('bathroom-bottom-mob').value];
    return bathPrice;

}


function ServicePriceBottomMob() {

var servicePrice= service_prices[document.getElementById('service-bottom-mob').value];
    
    return servicePrice;
}

function TotalBottomMob() {

    var totalPrice = BedPriceBottomMob() + BathPriceBottomMob() + ServicePriceBottomMob();

    document.getElementById('button-bottom-mob').innerHTML = "Book now for $" + totalPrice;
}


/////////////////////////////////////






function defaultButtonText() {
    var defaultText = "69";

    document.getElementById('button-top').innerHTML = "Book now for $" + defaultText;
    document.getElementById('button-bottom').innerHTML = "Book now for $" + defaultText;
    document.getElementById('button-top-mob').innerHTML = "Book now for $" + defaultText;
    document.getElementById('button-bottom-mob').innerHTML = "Book now for $" + defaultText;
}
