exports.command = 'foo <name>'
exports.desc = 'print foo'
exports.builder = {
    format: {default: 'json'},
    dryrun: {default: false},
  }
exports.handler = function (argv) {
  console.log(argv);
  console.log('print foo called with', argv.name)
}