/*var users = require('./users'),
    posts = require('./posts');

module.exports = {
    users: users,
    posts: posts,
};*/
var modelo = require('./maping');

module.exports = {
    usuario : modelo.Usuario,
    pagina  : modelo.Pagina,
    submenu : modelo.Submenu,
    item    : modelo.Item,
    Sequelize : modelo.sequelize
};
