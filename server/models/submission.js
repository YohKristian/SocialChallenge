'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Submission.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "User is required",
        },
        notEmpty: {
          msg: "User is required",
        },
      },
    },
    ChallengeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Challenge is required",
        },
        notEmpty: {
          msg: "Challenge is required",
        },
      },
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Url is required",
        },
        notEmpty: {
          msg: "Url is required",
        },
      },
    },
    getReward: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    statusSubmission: {
      type: DataTypes.STRING,
      defaultValue: "wait",
    },
  }, {
    sequelize,
    modelName: 'Submission',
  });
  return Submission;
};