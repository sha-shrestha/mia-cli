exports.command = 'prune <name> [names..]'
exports.desc = 'Delete tracked branches gone stale for remotes'
exports.builder = {
  banana: {default: 'cool'},
  batman: {default: 'sad'},
  dryrun: {default: false},
  property: {default: 'type=foo'},
  count: {default: 0}
}
exports.handler = function (argv) {
  console.log(argv);
  console.log('pruning remotes %s', [].concat(argv.name).concat(argv.names).join(', '))
}
exports.deprecated = 'blala'