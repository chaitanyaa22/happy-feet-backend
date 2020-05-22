const Sequelize = require('sequelize')
const db = require('../config/database')

let productTable = db.define('product', {
    productName: {
        type: Sequelize.STRING
    },
    productBrand: {
        type: Sequelize.STRING
    },
    productRating: {
        type: Sequelize.STRING        
    },
    productDiscountPrice: {
        type: Sequelize.INTEGER
    },
    productOriginalPrice: {
        type: Sequelize.INTEGER
    },
    productImage: {
        type: Sequelize.STRING
    },
    productColor: {
        type: Sequelize.STRING
    }

}, {timestamps: false})

module.exports = productTable