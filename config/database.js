const Sequelize = require('sequelize')

const db = new Sequelize(
    // 'postgres://xfbzybyt:KLd2zUCIC_S8TZh_0Zq0OwC--6HKT7Oi@rajje.db.elephantsql.com:5432/xfbzybyt', 
    'happyfeet','postgres','Cck@1832',
    {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})

db.sync({
// force: true
})

module.exports = db

