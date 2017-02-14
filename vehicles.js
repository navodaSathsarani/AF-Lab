/**
 * Created by it15110244 on 2/14/2017.
 */
function extend(ChildClass, ParentClass) {
    ChildClass.prototype = new ParentClass();
    ChildClass.prototype.constructor = ChildClass;
}

var vehicle =function () {
    this.price=120000;


    };
vehicle.prototype={
    getprice:function () {
        return this.price;
    },
    setprice:function (amount) {
        this.price=amount;
    }
};

var car=function () {
   // this.setprice(1200000);
}
extend(car,vehicle);
var car1=new car();
car1.setprice(1240000);
alert(car1.getprice());