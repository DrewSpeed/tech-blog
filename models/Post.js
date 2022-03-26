const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            body: DataTypes.STRING
        }
    },
    {
        sequelize
    }
);

module.exports = Post;