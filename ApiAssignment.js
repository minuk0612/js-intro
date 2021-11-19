let response1 = fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
  .then(response => response.json())
  .then(data => {
      var obj=data;
      console.log(obj);

      var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);

var obj1=result[1][1];
var result1 = Object.keys(obj1).map((key) => [String(key), obj1[key]]);

var dateTime = [];
var dataobj = [];
var result3=[]
    //   var result = Object.keys(array).map((key) => [Number(key), array[key]]);
for(let i=0;i<result1.length;i++){
dateTime[i]=result1[i][0]
dataobj[i]=result1[i][1]
console.log(dateTime[i]);
console.log(dataobj[i]);
var x=dataobj[i];
result3[i] = Object.keys(x).map((key) => [String(key), x[key]]);

}

var open=[];
var high=[]
var low=[]
var close=[]


for(let i=0;i<result3.length;i++)
{
     open[i]= result3[i][0][1];
      high[i]= result3[i][1][1]
      low[i]=result3[i][2][1]
      close[i]=result3[i][3][1]
}








var xValues = dateTime;
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
        label: 'open price',
      data: open,
      borderColor: "red",
      fill: false
    }, { 
        label: 'high price',
 
        data:high,
      borderColor: "green",
      fill: false
    }, { 
        label: 'low price',

      data: low,
      borderColor: "blue",
      fill: false
    },{
        label: 'close price',

      data: close,
      borderColor: "purple",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});









  });
  

