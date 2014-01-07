this["JST"] = this["JST"] || {};

this["JST"]["app/templates/customer.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<div class=\"invoice\"><span class=\"from\">"
    + escapeExpression(((stack1 = (depth0 && depth0.from)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span class=\"amount\">"
    + escapeExpression(((stack1 = (depth0 && depth0.amount)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><div>\n	";
  return buffer;
  }

  buffer += "<div class=\"image\"></div>\n<div class=\"information\">\n	<span class=\"bold\">Phone number</span><span class=\"phone\">";
  if (stack1 = helpers.phone) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.phone); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span><br/>\n	<span class=\"bold\">Billing address</span><span class=\"address\">";
  if (stack1 = helpers.address) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.address); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span><br/>\n	<span class=\"bold\">E-bank</span><span class=\"email\">";
  if (stack1 = helpers.ebank) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.ebank); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span><br/>\n</div>\n<div class=\"invoices\">\n	<span class=\"title\">Invoices</span>\n	";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.invoices)),stack1 == null || stack1 === false ? stack1 : stack1.paid), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>";
  return buffer;
  });

this["JST"]["app/templates/customers.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"customer-list\">\n	<div class=\"customer\" id='hannis' onclick=\"showCustomer(this, 'hannamari');\"><span>Hanna-Mari Kinnunen</span></div>\n  <div class=\"customer\" id='patrik' onclick=\"showCustomer(this, 'patrik');\"><span>Patrik Vilja</span></div>\n  <div class=\"customer\" id='peter' onclick=\"showCustomer(this, 'peter');\"><span>Peter Vilja</span></div>\n</div>";
  });

this["JST"]["app/templates/invoices.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<div class=\"invoice\"><span class=\"date\">"
    + escapeExpression(((stack1 = (depth0 && depth0.date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span class=\"from\" onclick=\"showWithId('"
    + escapeExpression(((stack1 = (depth0 && depth0.from)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\">"
    + escapeExpression(((stack1 = (depth0 && depth0.from)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span class=\"amount bold\">"
    + escapeExpression(((stack1 = (depth0 && depth0.amount)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n			";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<div class=\"invoice\"><span class=\"date\">"
    + escapeExpression(((stack1 = (depth0 && depth0.date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span class=\"from\" onclick=\"showWithId('"
    + escapeExpression(((stack1 = (depth0 && depth0.from)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\">"
    + escapeExpression(((stack1 = (depth0 && depth0.from)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span class=\"amount colorgreen bold\">"
    + escapeExpression(((stack1 = (depth0 && depth0.amount)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n			";
  return buffer;
  }

  buffer += "<div class=\"inv\">\n	<div class=\"invoiced\">\n		<div class=\"bold title\">OPEN</div>\n		<div class=\"invoicedlist\">\n			";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.invoices)),stack1 == null || stack1 === false ? stack1 : stack1.open), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n	</div>\n	<div class=\"paid\">\n		<div class=\"bold title\">PAID</div>\n		<div class=\"paidlist\">\n			";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.invoices)),stack1 == null || stack1 === false ? stack1 : stack1.paid), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n	</div>\n</div>";
  return buffer;
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
  


  return "<div id=\"user-list\" class=\"users\">\n	<div class=\"user-item\" onclick=\"selectUser(this)\"><span>Hanna-Mari Kinnunen</span></div>\n	<div class=\"user-item\" onclick=\"selectUser(this)\"><span>Patrik Vilja</span></div>\n	<div class=\"user-item\" onclick=\"selectUser(this)\"><span>Peter Vilja</span></div>\n</div>";
  });