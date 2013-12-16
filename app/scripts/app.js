'use strict';

(function() {

  var content = document.getElementById('content-container');
  var tracker = document.getElementById('tracker-container');
  var trackerContent = document.getElementById('tracker-content');
  
  document.getElementById('time').addEventListener('click', function(element) {
    tracker.style.display = '';
    content.innerHTML = '';
    var time = document.getElementById('time-container');
    if (!time)
      trackerContent.innerHTML = JST['app/templates/time.hbs']();
    resetNavigation();
    element.currentTarget.className = 'selected';
  });

  document.getElementById('customers').addEventListener('click', function(element) {
    tracker.style.display = 'none';
    content.innerHTML = JST['app/templates/customers.hbs']();
    resetNavigation();
    element.currentTarget.className = 'selected';
  });

  document.getElementById('invoices').addEventListener('click', function(element) {
    tracker.style.display = 'none';
    content.innerHTML = JST['app/templates/invoices.hbs']();
    resetNavigation();
    element.currentTarget.className = 'selected';
  });

  function resetNavigation() {
    var navigation = [];
    navigation.push(document.getElementById('time'), document.getElementById('customers'), document.getElementById('invoices'));
    navigation.forEach(function(element) {
      element.className = '';
    });
  }

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

function selectUsers(element) {
  var userlist = document.getElementById('user-list');
  if (!userlist) {
    var container = document.getElementById('tracker-content');
    var parent = document.getElementById('tracker-container');
    container.className = container.className + ' left';
    var content = document.createElement('div');
    content.className = 'content left'
    content.innerHTML = JST['app/templates/users.hbs']();
    setTimeout(function() {
      parent.appendChild(content)
      element.parentNode.removeChild(element)
    }, 600);
  }
}

function selectUser(element) {
  var customers = document.getElementById('selected-customers');
  element.className = element.className + ' selected';
  var user = document.createElement('li');
  user.className = '';
  user.innerHTML = element.innerHTML;
  customers.appendChild(user);
  element.onclick = removeUser(element, user, customers);
}

function removeUser(element, user, customers) {
  return function() {
    element.className = 'user-item';
    customers.removeChild(user);
    element.onclick = function() {
      return selectUser(element)
    }
  }
}
