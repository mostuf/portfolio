const fs = require('fs');

exports.loadFile = (req, res, next) => {
   
    fs.readFile("./../../FrontEnd/" + file, function(error, data){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(data);
        return res.end();

    })
}