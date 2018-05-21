var fs = require('fs');
var csv = require('fast-csv');
var stream = fs.createReadStream("consumer_complaints.csv");
var file = fs.createWriteStream('./output.json');
var count=0;
var headers=[];
var result="";
var x = [];
var dt = new Date();
console.log("Start"+dt);
file.write("[");

var csvStream = csv()
    .on("data", function(data){
           csvJSON(data);
    })
    .on("end", function(){
      file.write("]");
         var dt1 = new Date();
         console.log("done");
         console.log("Endtime"+dt1);
    });

stream.pipe(csvStream)

function csvJSON(csv){
var obj={};
if(count==0){
  headers=csv;
}
count++;
if(count==2){
  for(var i=0;i<csv.length;i++){
      obj[headers[i]] = csv[i];
      result=JSON.stringify(obj);
    }
    file.write(result);
}
if(count>2)
{
for(var i=0;i<csv.length;i++){
    obj[headers[i]] = csv[i];
    result=","+JSON.stringify(obj);
  }
      file.write(result);
}
}
