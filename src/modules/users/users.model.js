const mongoose = require('mongoose');
const timeStamps = require('mongoose-timestamp');

const MongooseConfig = require('./../../config/mongoose-config');
const Lib = require('./../../lib');
const Schema = mongoose.Schema;

const schema = new Schema({
  dh_id: {
    type: Schema.Types.String,
    required: true
  },
  username: {
    type: Schema.Types.String,
    required: true
  },
  profile: {
    type: Schema.Types.Object,
    required: true
  },
  last_sync_utc_ts: {
    type: Schema.Types.Date,
    required: true,
    default: Lib.nowUtc()
  }
}, {
  collection: MongooseConfig.COLLECTION_PREFIX + MongooseConfig.COLLECTION_USERS,
  strict: true
});

schema.index({dh_id: 1, username: 1});
schema.plugin(timeStamps, {createdAt: MongooseConfig.FIELD_CREATED, updatedAt: MongooseConfig.FIELD_UPDATED});

const model = mongoose.model(MongooseConfig.COLLECTION_USERS, schema);

module.exports = {
  Schema: schema,
  Model: model
};
