const Conf = require('conf');

const path = require('path');

const OS = require('os');

const configPath = path.join(OS.homedir(), '.miaconfig')

const config = new Conf({configName: 'config', cwd: configPath});

exports.command = 'get'
exports.desc = 'View all config'
exports.builder = {
    format: {
        default: 'json'
    },
    dryrun: {
        default: false
    }
}
exports.handler = function (argv) {
    console.log('config path', config.path);
    config.set('config.format', argv.format);
    config.set('authn.token', "foobar");
    console.log(config.get('config.format'));
    console.log(config.get('authn.token'));
}
