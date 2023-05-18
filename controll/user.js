const User = require('../models/user')

exports.postUser = (req,res,next)=>{
   const name = req.body.names;
   const mail = req.body.mail
   const mobile = req.body.mobile

   console.log(req.body)

   User.create({
    Name:name,
    Mobile: mobile,
    Email:mail
   }).then(result=>{
    console.log(result)
    return res.json(result)
   })
   .catch(err=>{
    console.log(err)
   })
}

exports.getUsers= (req,res,next)=>{
      User.findAll().then(user=>{
        res.json(user)
      }).
      catch(err=>{
        console.log(err)
      })
}



/*exports.getUser= (req,res,next)=>{
  console.log(req.params)
  console.log(User.Name)
  
 User.findByPk(req.params.id).then(user=>{
  console.log(user.Name)
    res.json(user)
  }).
  catch(err=>{
    console.log(err)
  })
}*/

exports.deleteUser= (req,res,next)=>{
    console.log(req.params)
    let Id = req.params.id

    User.findByPk(Id).then((user)=>{
     return user.destroy()
    }).then((result)=>{
      return res.json(result)
    })
    .catch(err=>{
      console.log(err)
    })
   
    }
