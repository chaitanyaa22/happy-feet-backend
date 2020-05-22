const Sequelize = require('sequelize')

const db = new Sequelize('postgres://cmmboxsb:WtM86xwEeyhoYL0jqiuIfFXtyWJKF5Zs@rajje.db.elephantsql.com:5432/cmmboxsb', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})

db.sync({
// force: true
})

module.exports = db

