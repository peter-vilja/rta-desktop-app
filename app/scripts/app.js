'use strict';

(function() {

  var content = document.getElementById('content');
  
  document.getElementById('time').addEventListener('click', function() {
    content.innerHTML = JST['app/templates/time.hbs']();
  });

  document.getElementById('customers').addEventListener('click', function() {
    content.innerHTML = JST['app/templates/customers.hbs']();
  });

  document.getElementById('invoices').addEventListener('click', function() {
    content.innerHTML = JST['app/templates/invoices.hbs']();
  });

})();

function startTimer() {
  var element = document.getElementById('elapsed');
  var start = new Date;

  function addZeros(time) {
    return ( time < 10 ? '0' : '') + time;
  }

  setInterval(function() {
    var difference = (new Date - start) / 1000;

    var hours = Math.floor(difference / 3600);
    difference = difference % 3600;
    var minutes = Math.floor(difference / 60);
    difference = difference % 60;
    var seconds = Math.floor(difference)

    hours = addZeros(hours)
    minutes = addZeros(minutes)
    seconds = addZeros(seconds)

    element.innerHTML = hours + ':' + minutes + ':' + seconds;
  }, 1000)


}