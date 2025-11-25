const { createUser } = require('../controllers/UserController')
const fileUploader = require('../middlewares/FileUploader')

const route=require('express').Router()

route.post('/register',fileUploader.single('profileImage'),createUser)

module.exports=route;