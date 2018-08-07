var getHTML = require('./http-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions,function(string) {
   console.log(string);
});
