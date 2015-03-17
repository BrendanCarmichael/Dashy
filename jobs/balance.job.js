var Xero = require('../lib/xero.js');
var moment = require('moment');
var accounting = require('accounting');

var poll = {
  interval: moment.duration({'hours': 6}, 'seconds'),
};

var job = function() {
  Xero.getBalance(function (balances) {
    send_event('balance', { text: accounting.formatMoney(balances.Total.ClosingBalance) } );
  });
}

setInterval(job, poll.interval);

job();

