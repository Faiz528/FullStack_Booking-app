const express = require('express')
const app = express()
const cors = require('cors')
const Parser = require('body-parser')
const sequelize = require('./util/database')
const User = require('./models/user')

app.use(cors())
app.use( Parser.json({extended :false}))

const userRoute = require('./routes/user')

app.use(userRoute)

  sequelize
    .sync()
    .then(result => {
     app.listen(3000)
    })
    
    .catch(err => {
      console.log(err);
    });


// Helper function to generate the user list






/*sequelize.sync().then(result=>{
    console.log(result)
    app.listen(3000)
   return User.create({Name:req.body.names, Mobile: req.body.mobile ,Email:mail})
}).then(user=>{
    console.log("Frst user created :",user)

}).catch(err=>{
    console.log(err)
})*/

