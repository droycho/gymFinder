var pingPong = require('./gym-finder.js').pingPong;
var prompt = require('prompt');
prompt.start();

prompt.get('goal', function(err, result) {
  var result = pingPong(result.goal);
  result.forEach(function(element) {
    console.log(element);
  });
});
