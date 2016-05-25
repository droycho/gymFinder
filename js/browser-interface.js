// var pingPong = require('./gym-finder.js').pingPong;
var pingPong = require('./../js/gym-finder.js').pingPong;

$(document).ready(function(){
  $('#gym-finder').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
