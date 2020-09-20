const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      review: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      drink_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      drink_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      alcohol_content: {
          type: DataTypes.STRING,
          allowNull: false
      },
      drink_instructions: {
          type: DataTypes.STRING(5000),
          allowNull: false
      },
      drink_image: {
          type: DataTypes.STRING,
          allowNull: false
      },
      drink_category: {
          type: DataTypes.STRING,
          allowNull: false
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );


  module.exports = Post;