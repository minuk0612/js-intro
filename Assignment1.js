//question 1


let obj = {
    h:10,
    r:3,
    volume : function() {
        return Math.PI*this.r*this.r*this.h;
    },
    surfaceArea : function() {
        return 2*Math.PI*this.r*this.h;
    }
};
 console.log("volume = " + obj.volume());
 console.log("Area ="+ obj.surfaceArea());




 //question 2

 var power=function(v,e){
     return v*e;
 };
 console.log(power(3,4));


 //question3

var noOfWallsPainted=function(area,h,w){
    return Number(area/(h*w));
}

console.log(noOfWallsPainted(24,3,4));

