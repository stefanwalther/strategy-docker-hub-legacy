const mongoose = require('mongoose');
const timeStamps = require('mongoose-timestamp');

const MongooseConfig = require('./../../config/mongoose-config');
const Lib = require('./../../lib');
const Schema = mongoose.Schema;

const schema = new Schema({
  docker_hub_username: {
    type: string,
    required: true
  },
  namespace: {
    type: string,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  profile: {
    type: Object
  },
  last_sync_utc_ts: {
    type: Schema.Types.Date,
    required: true,
    default: Lib.nowUtc()
  }
}, {
  collection: MongooseConfig.COLLECTION_PREFIX + MongooseConfig.COLLECTION_USER_HISTORY,
  strict: true
});

schema.index({twitter_id: 1, screen_name: 1});
schema.plugin(timeStamps, {createdAt: MongooseConfig.FIELD_CREATED, updatedAt: MongooseConfig.FIELD_UPDATED});

const model = mongoose.model(MongooseConfig.COLLECTION_USER_HISTORY , schema);

module.exports = {
  Schema: schema,
  Model: model
};
