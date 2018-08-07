var https = require('https');

module.exports = function getHTML (options, callback) {

  /* Add your code here */


  https.get(options, function(response){

    response.setEncoding('utf8');
    var result = "";
    response.on('data', function (data) {

    result += data;

    });

    response.on('end', function() {
      console.log('Response stream complete.');
      //invocation
      callback(result);
    });

  });

}
// definition
