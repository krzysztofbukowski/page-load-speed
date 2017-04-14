var system = require('system');

if (system.args.length === 1) {
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit();
}

var address = system.args[1],
    cnt = 0,
    t = Date.now(),
    page = require('webpage').create();

function onLoadFinished(status) {
    if (status !== 'success') {
        console.log('FAIL to load the address', address);
    } else {
        var diff = Date.now() - t;
        console.log(diff);
    }

    phantom.exit();
}

page.open(address, onLoadFinished);
