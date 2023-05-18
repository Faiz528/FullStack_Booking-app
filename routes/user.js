const express = require('express')

const router = express.Router()
const userControl = require('../controll/user')

router.post('/add', userControl.postUser)

router.get('/user',userControl.getUsers)

//router.get('/user/:id', userControl.getUser)

router.delete('/delete/:id',userControl.deleteUser)

router.put('/delete/:id',userControl.deleteUser)

module.exports = router