var fs = require('fs');
var csv = require('fast-csv');
var dt = new Date();
var utcDate = dt.toUTCString();
console.log("Start"+utcDate);

var stream = fs.createReadStream("consumer_complaints.csv");

var csvStream = csv()
    .on("data", function(data){

    })
    .on("end", function(){
      var dt1 = new Date();
      var Endtime=dt1.toUTCString();
      console.log("done");
      console.log("Endtime"+Endtime);
    });

stream.pipe(csvStream);
