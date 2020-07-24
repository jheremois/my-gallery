MY Gallery
===
My Gallery is a place to upload and save pictures, optimized for both mobile and desktop web browsers.
## Technologies
* Node.js
  * express
  * body-parser
  * timeago.js
  * multer
  * uuid
  * pug
  * mysql
  * mongan
  * fs-extra
  * cloudinary
  * node-env-file
 * mySql
 * css

## features
- [x] Responsive desing
- [x] Add pictures with title
- [x] Open pictures
- [x] Delete pictures

## Screenshot
<img src="https://user-images.githubusercontent.com/61896147/88010695-7fe01400-cae3-11ea-9b84-8d6e2f7e47d7.png" alt="Gallery Icon"/>

## Setup:

**Install Dependecies:**

```
npm i express mysql pug timeago.js body-parser multer uuid morgan fs-extra cloudinary node-env-file
```
**Install dev-Dependencies:**

```
npm i nodemon -D
```

**Create the database:**

```sql
CREATE DATABASE social;

USE social;
```
**Create the table:**

```sql
CREATE TABLE posts(
id INT(11) NOT NULL AUTO_INCREMENT,
content TEXT NOT NULL,
picture TEXT,
upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
```
**you can choose to save the images in the storage or in cloudinary, uncomment which you want to use at "src/database/conection.js":**

```js
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
```

```js
/*
// 2- Uncomment to save pics in cloudinary:

const cloudinary = require('cloudinary')

cloudinary.config({ 
cloud_name: process.env.CLOUDINARY_Name,
api_key: process.env.CLOUDINARY_APIKEY, 
api_secret: process.env.CLOUDINARY_SECRET 
});

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
```
## Environment Variables:

**mySQL:**
`MYSQL_USER` (your mysql user)

`MYSQL_PASSWORD` (your mysql password)


```js
module.exports = () => {
    return mysql.createConnection({
        host:  'localhost', 
        user:  process.env.MYSQL_USER, //<---- 
        password:  process.env.MYSQL_PASSWORD, // <---- 
        database:  'social'
    });
}
```
**Cloudinary:**

`CLOUDINARY_Name` (Your cloudinary cloud name)

`CLOUDINARY_APIKEY` (Your API key)

`CLOUDINARY_SECRET` (Your API Secret)

```js
cloudinary.config({ 
cloud_name: process.env.CLOUDINARY_Name, // <--- 
api_key: process.env.CLOUDINARY_APIKEY, //<--- 
api_secret: process.env.CLOUDINARY_SECRET // <---
});
```


**Start it up the app:**
```
npm run start
```
