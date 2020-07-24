const express = require('express')
const control = require('../controller/control')

const router = express.Router()

const multer = require('multer')
const path = require('path')
const {v4} =  require('uuid');

const file = multer.diskStorage({
   destination: './src/public/images',
   filename: (req,file,callback,)=>{
      callback(null, `${v4()}${path.extname(file.originalname)}`)
   },
})

const muler = multer({
   storage: file
}).single('foto')

// Routes:
module.exports = ()=>{
   router.get('/', control.home)
   router.post('/', muler,control.homes)
   router.get('/delete/:id', control.delete)

   return router

}