const bd = require('../database/conection')

const conecion = bd()

const cloudinary = require('cloudinary')

cloudinary.config({ 
cloud_name: process.env.CLOUDINARY_Name, 
api_key: process.env.CLOUDINARY_APIKEY, 
api_secret: process.env.CLOUDINARY_SECRET 
});

const fsx = require('fs-extra')


// Render feed view:
exports.home = (req,res)=>{
    conecion.query('SELECT * FROM posts',(err,resu)=>{
        res.render('home',{
            publication: resu
        })

    })
    
}


// Add picture:

/*
//1- Uncomment to save picture in local:

exports.homes = (req,res)=>{
    const {conten} = req.body
    const {filename} = req.file
    const picture = `images/${filename}`

    conecion.query('INSERT INTO posts SET?',{
        content: conten,
        picture: picture

    },(err,resul)=> {res.redirect('/')})

}
*/


/*
// 2- Uncomment to save pics in cloudinary:

exports.homes = async (req,res)=>{
    const {conten} = req.body
    const {path} = req.file
    
    const pics = await cloudinary.v2.uploader.upload(path)
    const picture = pics.url

    conecion.query('INSERT INTO posts SET?',{
        content: conten,
        picture: picture

    },(err,resul)=> {res.redirect('/')})

    await fsx.unlink(path)

}
*/