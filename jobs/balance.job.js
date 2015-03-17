var Xero = require('../lib/xero.js');
var moment = require('moment');
var accounting = require('accounting');
var numeral = require('numeral');

var poll = {
  interval: moment.duration({'hours': 6}, 'seconds'),
};

var job = function() {
  Xero.getBalance(function (balances) {
    send_event('balance', { text: numeral(balances.Total.ClosingBalance).format('$0,0.00') } );
  });
}

setInterval(job, poll.interval);

job();
