var express = require("express");
var app = express();
var response = {};

app.get("/:str", function(req, res){
    var time = req.params.str;
   
    if(/^[0-9]+$/.test(time) == true){
        time = parseInt(time);
    }
     console.log(time);
    var date = new Date(time);
    if(date.getTime()){
        response = {
            unix : date.getTime(),
            natural : date.toDateString()
        }
    }
    else{
        response = {
            unix : null,
            natural : null
        }
    }
    
    res.json(response);
    res.end("\n");
});

app.listen(process.env.PORT, function(){
   console.log("App listening on port " + process.env.PORT); 
});