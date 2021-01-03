exports.command = 'print <command>'
exports.desc = 'Print resources'
exports.builder = function (yargs) {
  return yargs.commandDir('print_cmds')
}
exports.handler = function (argv) {}