const { Model } = require('objection');

class VideoModel extends Model {
  static get tableName() {
    return 'video'
  }
}

module.exports = VideoModel;