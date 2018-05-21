var fs = require('fs');
var csv = require('fast-csv');
var stream = fs.createReadStream("2010_Census_Populations_by_Zip_Code.csv");
var file = fs.createWriteStream('./output.json');
var count=0;
var headers=[];
var result="";
var csvStream = csv()
    .on("data", function(data){
         // file.write(JSON.stringify( csvJSON(data))+",");
           csvJSON(data);

    })
    .on("end", function(){
         console.log("done");
    });

stream
.pipe(csvStream)

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
