require('yargs')
  .command('get-record', 'get 1 record', (yargs) => {
    yargs
      .positional('app', {
        describe: 'The ID of the app',
      })
      .positional('record', {
        describe: 'The ID of the record',
      })
    }, argv => {
      console.log('argv', argv);
    })
    .argv
