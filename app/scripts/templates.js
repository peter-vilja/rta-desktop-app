this["JST"] = this["JST"] || {};

this["JST"]["app/templates/customers.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Customers by Handlebars</h1>";
  });

this["JST"]["app/templates/invoices.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Invoices by Handlebars</h1>";
  });

this["JST"]["app/templates/time-form.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"time-form\">\n  <label for=\"comment\">Comment:</label>\n  <textarea name=\"comment\" rows=\"10\" cols=\"40\"></textarea>\n  <span id=\"users-button\" class=\"button neutral users-button\" onclick=\"selectUsers(this)\">ADD USERS</span>\n  <div id=\"selected-users\" class=\"selected-users\">\n    <ul id=\"selected-customers\" class=\"selected-customers\">\n      \n    </ul>\n  </div>\n  <span class=\"button green submit\">SUBMIT</span>\n</div>";
  });

this["JST"]["app/templates/time.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"time-container\" class=\"time-container\">\n	<span id=\"elapsed\" class=\"time\">00:00:00</span>\n  <span id=\"timer-button\" class=\"button start\" onclick=\"startTimer()\">START TIMER</span>\n</div>";
  });

this["JST"]["app/templates/users.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"user-list\" class=\"users\">\n	<div class=\"user\" onclick=\"selectUser(this)\"><span>Hanna-Mari Kinnunen</span></div>\n	<div class=\"user\" onclick=\"selectUser(this)\"><span>Patrik Vilja</span></div>\n	<div class=\"user\" onclick=\"selectUser(this)\"><span>Peter Vilja</span></div>\n</div>";
  });