const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drinks extends Model {}

Drinks.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
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
        modelName: 'drinks'
    }
);

module.exports = Drinks;