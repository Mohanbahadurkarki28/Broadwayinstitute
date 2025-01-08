const {Router}=require('express')
const staffsRoutes=require('./staffs.routes')
const customersRoutes=require('./customers.routes')
const brandsRoutes=require('./brands.routes')
const categoriesRoutes=require('./categories.routes')
const productsRoutes=require('./products.routes')



const {adminonly} = require("@/lib/middlewares");

const router = Router()

router.use('/staffs',adminonly,staffsRoutes)
router.use('/customers',customersRoutes)
router.use('/brands',brandsRoutes)
router.use('/categories',categoriesRoutes)
router.use('/products',productsRoutes)

module.exports= router