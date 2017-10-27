const express = require('express');
const bodyParser = require('body-parser');
const logger = require('winster').instance();
const MongooseConnection = require('mongoose-connection-promise');
const _ = require('lodash');
const config = require('./config/config.js');

class AppServer {

  constructor() {
    this.app = null;
    this.server = null;
    this.logger = null;
    this.config = config;

    this._initApp();

  }

  _initApp() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.logger = logger;
  }

  async start() {
    this.server = await this.app.listen(this.config.PORT);
    this.logger.verbose(`Started server at port ${this.config.PORT}`);
  }

  async stop() {
    if (this.server) {
      await this.server.close();
    }
  }


}

module.exports = AppServer;
