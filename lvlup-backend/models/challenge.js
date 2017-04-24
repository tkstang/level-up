const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./category');
require('./campus');
require('./cohort');
require('./challenge_submission');

const Challenge = LvlModel.extend({
  tableName: 'challenges',
  hasTimestamps: true,

  category() {
    return this.belongsTo('Category');
  },
  campuses() {
    return this.belongsToMany('Campus');
  },
  challenge_submissions() {
    return this.hasMany('ChallengeSubmission');
  },
  cohorts() {
    return this.belongsToMany('Cohort');
  },
});

module.exports = Bookshelf.model('Challenge', Challenge);
