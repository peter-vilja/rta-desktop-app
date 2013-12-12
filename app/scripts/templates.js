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

this["JST"]["app/templates/time.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"timer\">\n	<span id=\"elapsed\" class=\"time\">00:00:00</span>\n  <span id=\"start\" class=\"start\" onclick=\"startTimer()\">START TIMER</span>\n</div>";
  });