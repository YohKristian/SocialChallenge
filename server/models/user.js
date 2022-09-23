'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Username is required",
        },
        notEmpty: {
          msg: "Username is required",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password is required",
        },
        notEmpty: {
          msg: "Password is required",
        },
        len: {
          args: 5,
          msg: "Password cannot be less than 5 characters",
        },
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Role is required",
        },
        notEmpty: {
          msg: "Role is required",
        }
      },
    },
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password);
      },
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};