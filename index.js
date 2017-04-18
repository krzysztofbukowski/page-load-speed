if (process.argv.length === 2) {
    console.log('Usage: index.js <ADDRESS> <NUM>');
    return;
}

let child_process = require('child_process'),
    _ = require('lodash'),
    CMD='./node_modules/.bin/phantomjs',
    ARGS = [],
    counter = 0,
    maxCount = process.argv[3],
    averageTime = 0,
    maxTime = 0
    minTime = 0,
    loadTimes = [];

ARGS = [
    '--ignore-ssl-errors=true',
    'loadspeed.js',
    process.argv[2]
]

for (let i = 0; i < maxCount; i++) {
    var child = child_process.spawnSync(
        CMD,
        ARGS
    );
    let time = parseInt(`${child.stdout}`);
    console.log('Load time', time + 'ms');

    loadTimes.push(time)
}

onLoadFinished();

function onLoadFinished() {
    maxTime = _.max(loadTimes);
    minTime = _.min(loadTimes);

    averageTime = (maxTime + minTime)/2;
    console.log('Test run', maxCount, 'times');

    console.log('Max load time', maxTime + 'ms');
    console.log('Min load time', minTime + 'ms');
    console.log('Average load time', averageTime + 'ms');
}
