const { KintoneRestAPIClient } = require('@kintone/rest-api-client');

require('yargs')
  .command('get-record', 'get 1 record', () => {}, async (argv) => {
      console.log('argv', argv);
      const client = new KintoneRestAPIClient({
        auth: {
          username: argv.KINTONE_USERNAME,
          password: argv.KINTONE_PASSWORD,
        },
        baseUrl: argv.KINTONE_BASE_URL
      });
      try {
      const result = await client.record.getRecord({
        app: argv.app,
        id: argv.id
      });
      console.log(result.record);
    } catch (e) {
      console.error(e);
    }
    })
    .option('KINTONE_BASE_URL', {
      describe: 'Kintone url',
    })
    .option('KINTONE_USERNAME', {
      describe: 'Kintone Username',
    })
    .option('KINTONE_PASSWORD', {
      describe: 'Kintone Password',
    })
    .option('app', {
      describe: 'The ID of the app',
    })
    .option('id', {
      describe: 'The ID of the record',
    })
    .argv
