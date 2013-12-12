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

var timer;

function startTimer() {
  var element = document.getElementById('elapsed');
  var button = document.getElementById('timer-button');
  var start = new Date;

  function addZeros(time) {
    return ( time < 10 ? '0' : '') + time;
  }

  timer = setInterval(function() {
    var difference = (new Date - start) / 1000;

    var hours = Math.floor(difference / 3600);
    difference = difference % 3600;
    var minutes = Math.floor(difference / 60);
    difference = difference % 60;
    var seconds = Math.floor(difference);

    hours = addZeros(hours);
    minutes = addZeros(minutes);
    seconds = addZeros(seconds);

    element.innerHTML = hours + ':' + minutes + ':' + seconds;
  }, 1000);

  button.className = 'button stop';
  button.innerHTML = 'STOP TIMER  ';
  button.onclick = stopTimer;
}

function stopTimer() {
  clearInterval(timer);
  var button = document.getElementById('timer-button');
  var parent = document.getElementById('time-container');
  
  button.parentNode.removeChild(button);
  parent.className = parent.className + ' up';
  var wrapper = document.createElement('div');
  wrapper.innerHTML = JST['app/templates/time-form.hbs'](); 
  parent.appendChild(wrapper);
}

function selectUsers() {
  var container = document.getElementById('content');
  var parent = document.getElementById('content-container');
  container.className = container.className + ' left';
  var content = document.createElement('div');
  content.className = 'content left'
  content.innerHTML = JST['app/templates/users.hbs']();
  setTimeout(function() {
    parent.appendChild(content)
  }, 600);
}