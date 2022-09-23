'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Challenge.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title is required",
        },
        notEmpty: {
          msg: "Title is required",
        },
      },
    },
    brief: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Brief is required",
        },
        notEmpty: {
          msg: "Brief is required",
        },
      },
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Budget is required",
        },
        notEmpty: {
          msg: "Budget is required",
        },
      },
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    statusChallenge: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
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
  }, {
    sequelize,
    modelName: 'Challenge',
  });
  return Challenge;
};