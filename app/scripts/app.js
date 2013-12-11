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