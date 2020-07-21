const bd = require('../database/conection')

const conecion = bd()


// Render feed view:
exports.home = (req,res)=>{
    conecion.query('SELECT * FROM posts',(err,resu)=>{
        res.render('home',{
            publication: resu
        })

    })
    
}


// Add picture:
exports.homes = (req,res)=>{
    const {conten} = req.body
    const {filename} = req.file

    conecion.query('INSERT INTO posts SET?',{
        content: conten,
        picture: filename

    },(err,resul)=> {res.redirect('/')})

}


/*

    Delete picture:

    const {id} = req.params
    console.log(id)
    conecion.query(`DELETE FROM nts WHERE id = ${id}`,(err,resul)=> {res.redirect('/')})

*/