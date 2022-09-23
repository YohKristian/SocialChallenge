'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubmissionStat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubmissionStat.init({
    view: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    comment: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    SubmissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Submission is required",
        },
        notEmpty: {
          msg: "Submission is required",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'SubmissionStat',
  });
  return SubmissionStat;
};