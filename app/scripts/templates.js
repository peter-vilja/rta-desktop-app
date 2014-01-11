this["JST"] = this["JST"] || {};

this["JST"]["app/templates/amount.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"amount\">\n  <span>Invoice amount</span>\n  <input id=\"amount-input\" class=\"amount-input\" type=\"text\"/><span>&euro;</span>\n</div>";
  });

this["JST"]["app/templates/billable.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<label class=\"billable-label\" for=\"billable\">Billable</label>\n<div class=\"billable\" name=\"billable\">\n	<span class=\"on-text\">ON</span>\n	<span id=\"billable-button\" onclick=\"moveRight(this);\" class=\"off\"></span>\n	<span class=\"off-text\">OFF</span>\n</div>";
  });

this["JST"]["app/templates/customer.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<div class=\"invoice\" onclick=\"showInvoice("
    + escapeExpression(((stack1 = (depth0 && depth0.invoiceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", '"
    + escapeExpression(((stack1 = (depth0 && depth0.from)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "', '"
    + escapeExpression(((stack1 = (depth0 && depth0.amount)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "', this.parentNode.parentNode.parentNode.parentNode);\"><span class=\"date\">"
    + escapeExpression(((stack1 = (depth0 && depth0.date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span class=\"from\">"
    + escapeExpression(((stack1 = (depth0 && depth0.invoiceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span class=\"amount\">"
    + escapeExpression(((stack1 = (depth0 && depth0.amount)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n		";
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
    + "</span><br/>\n</div>\n<div class=\"invoices\">\n	<div class=\"open\">\n		<span class=\"title\">Open invoices</span>\n		";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.invoices)),stack1 == null || stack1 === false ? stack1 : stack1.open), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n	<div class=\"paidInvoices\">\n		<span class=\"title\">Paid invoices</span>\n		";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.invoices)),stack1 == null || stack1 === false ? stack1 : stack1.paid), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n</div>";
  return buffer;
  });

this["JST"]["app/templates/customers.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"backtocustomers\" class=\"back-button hidden\" onclick=\"toCustomers();\"><span class=\"arrow\"><</span><span class=\"back\">  BACK</span></div>\n<div id=\"invoice-receipt\" class=\"invoice-receipt\"></div>\n<div id=\"customer-list\" class=\"customer-list\">\n  <div class=\"search-container\">\n    <input class=\"search\" type=\"text\" placeholder=\"Search\"/><span class=\"icon-search button search-button\"></span>\n  </div>\n  <div class=\"customer\" id='hannis' onclick=\"showCustomer(this, 'hannamari');\"><span>Hanna-Mari Kinnunen</span></div>\n  <div class=\"customer\" id='patrik' onclick=\"showCustomer(this, 'patrik');\"><span>Patrik Vilja</span></div>\n  <div class=\"customer\" id='peter' onclick=\"showCustomer(this, 'peter');\"><span>Peter Vilja</span></div>\n</div>";
  });

this["JST"]["app/templates/inv-receipt.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"invoices-receipt\">\n	<div id=\"receipt-details\" class=\"recipient-details\">\n		<span class=\"title\">RECIPIENT DETAILS</span>\n		<div class=\"detail\"><span>Name</span><span class=\"right\">Hanna-Mari Kinnunen</span></div>\n		<div class=\"detail\"><span>Company</span><span class=\"right\">My Company</span></div>\n		<div class=\"detail\"><span>Bank account number</span><span class=\"right\">FI 12345 56789 1001</span></div>\n	</div>\n	<div class=\"invoice-details\">\n		<span class=\"title\">PAYER AND INVOICE DETAILS</span>\n		<div class=\"detail\"><span>Name</span><span class=\"right\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n		<div class=\"detail\"><span>Reference number</span><span class=\"right\">";
  if (stack1 = helpers.invoiceId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.invoiceId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n		<div class=\"detail\"><span>Subject</span><span class=\"right\">Gym hour</span></div>\n		<div class=\"detail\"><span>Due day</span><span class=\"right\">29/12/13</span></div>\n		<div class=\"detail\"><span>Amount</span><span class=\"right\">";
  if (stack1 = helpers.amount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.amount); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " &euro;</span></div>\n	</div>\n	<span class=\"send\">Send</span>\n</div>";
  return buffer;
  });

this["JST"]["app/templates/invoice-receipt.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"customer-receipt\">\n	<div id=\"receipt-details\" class=\"recipient-details\">\n		<span class=\"title\">RECIPIENT DETAILS</span>\n		<div class=\"detail\"><span>Name</span><span class=\"right\">Hanna-Mari Kinnunen</span></div>\n		<div class=\"detail\"><span>Company</span><span class=\"right\">My Company</span></div>\n		<div class=\"detail\"><span>Bank account number</span><span class=\"right\">FI 12345 56789 1001</span></div>\n	</div>\n	<div class=\"invoice-details\">\n		<span class=\"title\">PAYER AND INVOICE DETAILS</span>\n		<div class=\"detail\"><span>Name</span><span class=\"right\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n		<div class=\"detail\"><span>Reference number</span><span class=\"right\">";
  if (stack1 = helpers.invoiceId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.invoiceId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n		<div class=\"detail\"><span>Subject</span><span class=\"right\">Gym hour</span></div>\n		<div class=\"detail\"><span>Due day</span><span class=\"right\">29/12/13</span></div>\n		<div class=\"detail\"><span>Amount</span><span class=\"right\">";
  if (stack1 = helpers.amount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.amount); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " &euro;</span></div>\n	</div>\n	<span class=\"send\">Send</span>\n</div>";
  return buffer;
  });

this["JST"]["app/templates/invoices.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<div class=\"inv-invoice\" onclick=\"showWithId("
    + escapeExpression(((stack1 = (depth0 && depth0.invoiceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ",'"
    + escapeExpression(((stack1 = (depth0 && depth0.from)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "', '"
    + escapeExpression(((stack1 = (depth0 && depth0.amount)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\"><span class=\"date\">"
    + escapeExpression(((stack1 = (depth0 && depth0.date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span class=\"from\">"
    + escapeExpression(((stack1 = (depth0 && depth0.from)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span class=\"amount bold\">"
    + escapeExpression(((stack1 = (depth0 && depth0.amount)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n			";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<div class=\"inv-invoice\" onclick=\"showWithId("
    + escapeExpression(((stack1 = (depth0 && depth0.invoiceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", '"
    + escapeExpression(((stack1 = (depth0 && depth0.from)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "', '"
    + escapeExpression(((stack1 = (depth0 && depth0.amount)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\"><span class=\"date\">"
    + escapeExpression(((stack1 = (depth0 && depth0.date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span class=\"from\">"
    + escapeExpression(((stack1 = (depth0 && depth0.from)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span class=\"amount colorgreen bold\">"
    + escapeExpression(((stack1 = (depth0 && depth0.amount)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n			";
  return buffer;
  }

  buffer += "<div id=\"backtoinvoices\" class=\"back-button hidden\" onclick=\"toInvoices();\"><span class=\"arrow\"><</span><span class=\"back\">  BACK</span></div>\n<div id=\"inv-receipt\" class=\"inv-receipt\"></div>\n<div class=\"search-container\">\n    <input class=\"search\" type=\"text\" placeholder=\"Search\"/><span class=\"icon-search button search-button\"></span>\n</div>\n<div id=\"inv\" class=\"inv\">\n	<div class=\"invoiced\">\n		<div class=\"bold title\">OPEN</div>\n		<div class=\"invoicedlist\">\n			";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.invoices)),stack1 == null || stack1 === false ? stack1 : stack1.open), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n	</div>\n	<div class=\"paid\">\n		<div class=\"bold title\">PAID</div>\n		<div class=\"paidlist\">\n			";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.invoices)),stack1 == null || stack1 === false ? stack1 : stack1.paid), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["JST"]["app/templates/receipt.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"receipt-details\" class=\"recipient-details\">\n	<span class=\"title\">RECIPIENT DETAILS</span>\n	<div class=\"detail\"><span>Name</span><span class=\"right\">Hanna-Mari Kinnunen</span></div>\n	<div class=\"detail\"><span>Company</span><span class=\"right\">My Company</span></div>\n	<div class=\"detail\"><span>Bank account number</span><span class=\"right\">FI 12345 56789 1001</span></div>\n</div>\n<div class=\"invoice-details\">\n	<span class=\"title\">PAYER AND INVOICE DETAILS</span>\n	<div class=\"detail\"><span>Name</span><span class=\"right\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n	<div class=\"detail\"><span>Reference number</span><span class=\"right\">";
  if (stack1 = helpers.invoiceId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.invoiceId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n	<div class=\"detail\"><span>Subject</span><span class=\"right\">Gym hour</span></div>\n	<div class=\"detail\"><span>Due day</span><span class=\"right\">29/12/13</span></div>\n	<div class=\"detail\"><span>Amount</span><span class=\"right\">";
  if (stack1 = helpers.amount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.amount); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " &euro;</span></div>\n</div>\n<span class=\"button green\" onclick=\"toStart();\">SEND INVOICE</span>\n<span class=\"button red\" onclick=\"toStart();\">CANCEL</span>\n<span class=\"skip\" onclick=\"toStart();\">Skip</span>";
  return buffer;
  });

this["JST"]["app/templates/time-form.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"time-form\">\n  <label for=\"comment\">Add comment:</label>\n  <textarea name=\"comment\" rows=\"10\" cols=\"40\"></textarea>\n  <span id=\"users-button\" class=\"button neutral users-button\" onclick=\"selectUsers(this)\">ADD CUSTOMERS</span>\n  <div id=\"selected-users\" class=\"selected-users\">\n    <ul id=\"selected-customers\" class=\"selected-customers\">\n      \n    </ul>\n  </div>\n  <div id=\"billable\">\n  \n  </div>\n  <div id=\"amount-container\">\n  	\n  </div>\n  <span class=\"button green submit\" onclick=\"submitTimer();\">SUBMIT</span>\n</div>";
  });

this["JST"]["app/templates/time.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"continue\" class=\"continue hidden\" onclick=\"toStart();\"><span class=\"arrow\"><</span><span id=\"back\" class=\"back\">  BACK</span></div>\n<div id=\"new\" class=\"add button\" onclick=\"stopTimer();\"><span>ADD WORK HOURS</span></div>\n<div id=\"time-container\" class=\"time-container\">\n	<span id=\"elapsed\" class=\"time\">00:00:00</span>\n	<span id=\"timer-button\" class=\"button start\" onclick=\"startTimer()\">START TIMER</span>\n</div>";
  });

this["JST"]["app/templates/users.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"user-list\" class=\"users\">\n	<div>Select customer(s):</div>\n	<div class=\"user-item\" onclick=\"selectUser(this.firstChild)\"><span>Hanna-Mari Kinnunen</span></div>\n	<div class=\"user-item\" onclick=\"selectUser(this.firstChild)\"><span>Patrik Vilja</span></div>\n	<div class=\"user-item\" onclick=\"selectUser(this.firstChild)\"><span>Peter Vilja</span></div>\n</div>";
  });