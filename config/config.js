var config = {
  appConfig: {
    port: 3000,
  },
  nunjucksConfig: {
    watch: true
  },
  logConfig: {
    appenders: [
      { type: 'console' },
      {
        type: "dateFile",
        filename: './logs/access-log.log',
        absolute: true,
        pattern: "-yyyy-MM-dd",
        alwaysIncludePattern: false,
        category: "access-log"
      },
      {
        type: "dateFile",
        filename: './logs/sys-log.log',
        absolute: true,
        pattern: "-yyyy-MM-dd",
        alwaysIncludePattern: false,
        category: "sys-log"
      }
    ]
  },
  DBConfig: {
    mainDB: {
      uri: 'mongodb://localhost:27017/test',
      options: {
        server: {
          socketOptions: { keepAlive: 1 }}
      }
    },
    testDB: {
      uri: 'mongodb://localhost:27017/test',
      options: {
        server: {
          socketOptions: { keepAlive: 1 }}
      }
    }
  }
};

module.exports = config;
