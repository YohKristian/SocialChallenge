'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reward.init({
    tier: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Tier is required",
        },
        notEmpty: {
          msg: "Tier is required",
        },
      },
    },
    view: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "View is required",
        },
        notEmpty: {
          msg: "View is required",
        },
      },
    },
    reward: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Reward is required",
        },
        notEmpty: {
          msg: "Reward is required",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Reward',
  });
  return Reward;
};