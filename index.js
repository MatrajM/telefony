function phone (brand, price, color){
    this.brand = brand;
    this.price = price;
    this.color = color;
}
phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var iPhone6s = new phone("Apple",2000,"silver");
var samsungGalaxyS6 = new phone("Samsung Electronics",2500,"black");
var onePlusOne = new phone("OnePlus",2300,"white");

iPhone6s.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();