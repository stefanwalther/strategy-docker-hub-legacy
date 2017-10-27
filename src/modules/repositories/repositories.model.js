const mongoose = require('mongoose');
const timeStamps = require('mongoose-timestamp');

const MongooseConfig = require('./../../config/mongoose-config');
const Lib = require('./../../lib');
const Schema = mongoose.Schema;

const schema = new Schema({
  docker_hub_username: {
    type: Schema.Types.String,
    required: true
  },
  namespace: {
    type: Schema.Types.String,
    required: true
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  profile: {
    type: Schema.Types.Object
  },
  last_sync_utc_ts: {
    type: Schema.Types.Date,
    required: true,
    default: Lib.nowUtc()
  }
}, {
  collection: MongooseConfig.COLLECTION_PREFIX + MongooseConfig.COLLECTION_REPOSITORIES,
  strict: true
});

schema.index({twitter_id: 1, screen_name: 1});
schema.plugin(timeStamps, {createdAt: MongooseConfig.FIELD_CREATED, updatedAt: MongooseConfig.FIELD_UPDATED});

const model = mongoose.model(MongooseConfig.COLLECTION_REPOSITORIES, schema);

module.exports = {
  Schema: schema,
  Model: model
};
