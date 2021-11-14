//question 1



     function volume() {
        //  var r=number(document.getElementById("volume"));
        //  var h=number(document.getElementById("radius"));
var r=(radius.value);
var h=(height.value);


        vol1.innerText="Volume ="+(Math.PI*r*r*h);
    }
    function surfaceArea() {
        var r=(radius.value);
        var h=(height.value);
       area.innerText="Surface Area ="+ (2*Math.PI*r*h);
    };
//  console.log("volume = " + obj.volume());
//  console.log("Area ="+ obj.surfaceArea());




 //question 2

 var power=function(){
var volt=vv.value;
var cur=cc.value;

pow.innerText="Power = "+ (volt*cur);

};


 //question3

 function noOfWallsPainted(){
var areaa=a.value;
var hei= he.value;
var wid=width.value;
if(hei<=0||wid<=0){
    alert("Height and width Must be greater than 0");
    return 0;
}

noOfWalls.innerText="no. of walls painted = "+Math.floor(areaa/(hei*wid));
};

