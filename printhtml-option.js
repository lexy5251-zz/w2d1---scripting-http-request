function getAndPrintHTML (options) {

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
      console.log(result);
    });

  });

}

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

getAndPrintHTML(requestOptions);