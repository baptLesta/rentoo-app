import * as mongoose from 'mongoose';
import * as util from 'util';

// config should be imported before importing any other file
import config from './config/config';
import app from './config/express';

import debug from 'debug';

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// connect to mongo db
let mongoUri;
if (config.env === 'production') {
  mongoUri = `mongodb://baptLesta:${config.dbPassword}@cluster0-shard-00-00-k3k0d.mongodb.net:27017,cluster0-shard-00-01-k3k0d.mongodb.net:27017,cluster0-shard-00-02-k3k0d.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`;
} else {
  mongoUri = config.mongo.host;
}


mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// print mongoose logs in dev env
if (config.mongooseDebug) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign


// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}

export default app;
