function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  var https = require('https');
  //var stream = require('stream');

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');
    var result = "";
    response.on('data', function (data) {


    // console.log('Chunk Received.', data);


    result += data;


    });



    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(result);
    });

  });

}

getAndPrintHTML();