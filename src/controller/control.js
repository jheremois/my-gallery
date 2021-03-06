const bd = require('../database/conection')

const conection = bd()

const fsx = require('fs-extra')


// Render feed view:
exports.home = (req,res)=>{
    conection.query('SELECT * FROM posts',(err,resu)=>{
        res.render('home',{
            publication: resu
        })

    })
    
}


// Add picture:

/*
// 1- Uncomment to save pics in local:

exports.homes = (req,res)=>{
    const {conten} = req.body
    const {filename} = req.file
    const picture = `images/${filename}`

    conection.query('INSERT INTO posts SET?',{
        content: conten,
        picture: picture

    },(err,resul)=> {res.redirect('/')})

}
*/

/*
// 2- Uncomment to save pics in cloudinary:

const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_Name, // <--- place yours
    api_key: process.env.CLOUDINARY_APIKEY, //<--- place yours
    api_secret: process.env.CLOUDINARY_SECRET // <--- place yours
});

exports.homes = async (req,res)=>{
    const {conten} = req.body
    const {path} = req.file
    
    const pics = await cloudinary.v2.uploader.upload(path)
    const picture = pics.url

    conection.query('INSERT INTO posts SET?',{
        content: conten,
        picture: picture

    },(err,resul)=> {res.redirect('/')})

    await fsx.unlink(path)

}
*/


// Delete pics:
exports.delete = (req, res)=>{
    const {id} = req.params
    
    conection.query(`DELETE FROM posts WHERE id = ${id}`,(err,resul)=> {
        res.redirect('/')
    })
}