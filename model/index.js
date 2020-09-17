const Post = require('./Post');
const User = require('./User');

User.hasMany(Post);
// Post.belongsTo(User, {
//   foreignKey: "user_id",
//   as: "user"
//  // allowNull: false
// });

Post.belongsTo(User)

module.exports = { User, Post };