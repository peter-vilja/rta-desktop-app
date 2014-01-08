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
    content.innerHTML = JST['app/templates/invoices.hbs'](users);
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
  var reset = document.createElement('span');
  reset.className = 'button reset';
  reset.innerHTML = 'RESET TIMER';
  reset.onclick = resetTimer(reset);
  reset.id = 'reset-button';
  document.getElementById('time-container').appendChild(reset);
}

function resetTimer (reset) {
  return function () {
    clearInterval(timer);
    var button = document.getElementById('timer-button');
    button.className = 'button start';
    button.innerHTML = 'START TIMER';
    button.onclick = startTimer;
    reset.parentNode.removeChild(reset);
    document.getElementById('elapsed').innerHTML = '00:00:00';
  }
}

function stopTimer() {
  clearInterval(timer);
  var button = document.getElementById('timer-button');
  var reset = document.getElementById('reset-button');
  var parent = document.getElementById('time-container');
  var con = document.getElementById('continue');

  con.className = 'continue';
  button.parentNode.removeChild(button);
  reset.parentNode.removeChild(reset);
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


function showCustomer (element, id) {
  element.className = element.className + ' open';
  var customer = document.createElement('div');
  customer.className = 'customer-content';
  element.appendChild(customer);
  setTimeout(function() {
    customer.className = customer.className + ' visible';
    customer.innerHTML = JST['app/templates/customer.hbs'](users[id]);
  }, 10);
  element.onclick = closeCustomer(element, customer, id);
}

function closeCustomer (element, customer, id) {
  return function() {
    element.className = 'customer';
    customer.className = 'customer-content';
    setTimeout(function() {
      customer.parentNode.removeChild(customer);
    }, 200);
    element.onclick = function() {
      return showCustomer(element, id);
    }
  }
}

function showWithId (name) {
  var names = [];
  names['Peter Vilja'] = 'peter';
  names['Patrik Vilja'] = 'patrik';
  names['Hanna-Mari Kinnunen'] = 'hannis';

  var id = names[name];
  document.getElementById('customers').click();
  document.getElementById(id).click();
}
