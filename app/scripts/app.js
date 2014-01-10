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

  document.getElementById('time').click();

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

  if (!document.getElementById('reset-button')) {
    var reset = document.createElement('span');
    reset.className = 'button reset';
    reset.innerHTML = 'RESET TIMER';
    reset.onclick = resetTimer(reset);
    reset.id = 'reset-button';
    document.getElementById('time-container').appendChild(reset);
  }
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
  var elapsed = document.getElementById('elapsed');
  var add = document.getElementById('new');
  var timewrapper = document.getElementById('time-wrapper');
  var left = document.getElementById('left-content');
  var tracker = document.getElementById('tracker-content');

  add.className = add.className + ' hidden';
  con.className = 'continue';
  parent.className = parent.className + ' hidden';

  if (timewrapper) {
    timewrapper.className = 'time-wrapper';
    document.getElementById('time-input').innerHTML = elapsed.innerHTML;
    if (left) {
      left.className = 'content left';
      tracker.className = 'content left'
    }
  } else {
    var form = document.createElement('div');
    form.className = 'time-wrapper';
    form.id = 'time-wrapper';
    var time = document.createElement('input');
    time.value = elapsed.innerHTML;
    time.type = 'text';
    time.className = 'time';
    time.id = 'time-input';
    form.appendChild(time);
    var wrapper = document.createElement('div');
    wrapper.innerHTML = JST['app/templates/time-form.hbs'](); 
    form.appendChild(wrapper);
    document.getElementById('tracker-content').appendChild(form);
  }
}

function submitTimer () {
  var left = document.getElementById('left-content');
  var time = document.getElementById('tracker-content');
  var amount = document.getElementById('amount-input');
  var receipt = document.getElementById('receipt-container');
  var receiptDetails = document.getElementById('receipt-details');

  if (receiptDetails) {
    receipt.className = 'receipt-container';
  }
  if (left && amount) {
    amount = amount.value;
    var name = document.getElementById('name').innerHTML;
    var data = {
      'name': name,
      'amount': amount
    };
    left.className = left.className + ' hidden';
    time.className = left.className + ' hidden';
    receipt.innerHTML = JST['app/templates/receipt.hbs'](data);
  }
}

function selectUsers(element) {
  var userlist = document.getElementById('user-list');
  var billable = document.getElementById('billable');
  if (!userlist) {
    var container = document.getElementById('tracker-content');
    var parent = document.getElementById('tracker-container');
    container.className = container.className + ' left';
    var content = document.createElement('div');
    content.className = 'content left';
    content.id = 'left-content';
    content.innerHTML = JST['app/templates/users.hbs']();
    setTimeout(function() {
      parent.appendChild(content)
      element.parentNode.removeChild(element)
      billable.innerHTML = JST['app/templates/billable.hbs']();
    }, 600);
  }
}

function selectUser(element) {
  var customers = document.getElementById('selected-customers');
  element.parentNode.className = element.parentNode.className + ' selected';
  var user = document.createElement('li');
  user.className = '';
  user.id = 'name';
  user.innerHTML = element.innerHTML;
  customers.appendChild(user);
  element.parentNode.onclick = removeUser(element.parentNode, user, customers);
}

function removeUser(element, user, customers) {
  return function() {
    element.className = 'user-item';
    customers.removeChild(user);
    element.onclick = function() {
      return selectUser(element.firstChild)
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

function moveRight (button) {
  button.className = 'on';
  button.onclick = function () {
    return moveLeft(button);
  }
  var container = document.getElementById('amount-container');
  if (document.getElementById('amount-input')) {
    container.className = 'amount-container';
  } else {
    container.innerHTML = JST['app/templates/amount.hbs']();
  }
}

function moveLeft (button) {
  button.className = 'off';
  button.onclick = function () {
    return moveRight(button);
  }
  document.getElementById('amount-container').className = 'amount-container hidden';
}

function toStart () {
  var receipt = document.getElementById('receipt-container');
  var time = document.getElementById('time-container');
  var timeForm = document.getElementById('time-wrapper');
  var left = document.getElementById('left-content');
  var tracker = document.getElementById('tracker-content');
  var con = document.getElementById('continue');
  var button = document.getElementById('timer-button');

  if (receipt)
    receipt.className = receipt.className + ' hidden';
  if (timeForm)
    timeForm.className = timeForm.className + ' hidden';
  if (left) {
    tracker.className = 'content';
    left.className = 'content left hidden';
  }
  con.className = 'continue hidden';
  time.className = 'time-container';
  button.className = 'button start';
  button.innerHTML = 'START TIMER';
  button.onclick = startTimer;
}
