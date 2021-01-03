require('yargs/yargs')(process.argv.slice(2))
  .commandDir('cmds')
  .demandCommand(1,'')
  .help()
  .alias('version', 'v')
  .argv
  