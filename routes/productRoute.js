const express = require('express')
const router = express.Router()
const productTable = require('../models/productTable')


router.get('/', async(req, res) =>{
    try {
        let products = await productTable.findAll()
        res.send(products)
    }
    catch(e){
        console.log(e)
    }
})

router.post('/', async(req,res) => {
    try {
        let product = await productTable.create({
            productName: req.body.productName,
            productBrand: req.body.productBrand,
            productRating: req.body.productRating,
            productDiscountPrice: req.body.productDiscountPrice,
            productOriginalPrice: req.body.productOriginalPrice,
            productImage: req.body.productImage,
            productColor: req.body.productColor
        })
        res.send(product)
    }
    catch(e){
        console.log(e)
    }
})

module.exports = router