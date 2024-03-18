const { Model } = require('objection');

class ChannelModel extends Model {
  static get tableName() {
    return 'channel'
  }
}

module.exports = ChannelModel;