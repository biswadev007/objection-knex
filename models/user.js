const { Model } = require('objection');

class UserModel extends Model {
  static get tableName() {
    return 'user'
  }

  static get relationMappings() {
    const Channel = require('./channel');
    return {
      channel: {
        relation: Model.HasOneRelation,
        modelClass: Channel,
        join: {
          from: "user.channelId",
          to: "channel.id",
        },
      }
    }
  }
}

module.exports = UserModel;