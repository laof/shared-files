const fs = require('fs');
const path = require('path');
const sharedPath = path.join(process.cwd());
const MaxPort = 65535;
const MinPort = 20;
let port = 4549;

const argv = process.argv.reverse();

if (argv.length <= 3) {
    for (let i = 0; i < argv.length; i++) {
        const n = Number(argv[i]);
        if (n && n > MinPort && n < MaxPort) {
            port = n;
            break;
        }
    }
}


module.exports = {
    port,
    sharedPath
}