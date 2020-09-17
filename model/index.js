const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {as: "post"});
Post.belongsTo(User, {
  foreignKey: "user_id",
  as: "user"
 // allowNull: false
});

module.exports = { User, Post };