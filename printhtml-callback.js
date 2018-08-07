function getAndPrintHTML (options, callback) {

  /* Add your code here */
  var https = require('https');

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
function printHTML (html) {
  console.log(html);
}

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

getAndPrintHTML(requestOptions, printHTML);