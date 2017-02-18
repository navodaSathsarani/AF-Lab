/**
 * Created by it15110244 on 2/18/2017.
 */

 var sayHello=function(callback) {
    var hello='Hello world';
    callback(hello);

}

var setvalue=function(value){

    console.log(value);

}
sayHello(setvalue);

var text = {
    name:"emma",
    printname:function () {

       console.log(this.name);
    }
}
text.printname();

window.vehicleName='van';
function printVehicleName(){
    console.log(this.vehicleName);

}

var vehicle={
vehicleName:'car',
 getnew:printVehicleName.bind(window),
    getVehicleName:printVehicleName,


}
printVehicleName();
vehicle.getVehicleName();
vehicle.getnew();
function setTax(tax){
    this.tax=0;
    return function(amount){
       var total=tax+amount;
       console.log(total);


    }


}

var show=setTax(400);
show(6000);