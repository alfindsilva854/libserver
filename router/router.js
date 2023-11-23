const express=require('express')
const { adminlogin,addMovie, getMovies, editMovie, deleteMovie, getSingleMovie, userSignup, userlogin, getUsers, deleteUser} = require('../controllers/logic')


const router=new express.Router()

router.post('/admin/login',adminlogin)
router.post('/admin/add-movie',addMovie)
router.get('/Movies-access',getMovies)
router.put('/movie-update/:id',editMovie)
router.delete('/movie-delete/:id',deleteMovie)
router.get('/one-movie/:id',getSingleMovie)
router.post('/user-signUp',userSignup)
router.post('/user-login',userlogin)
router.get('/user-access',getUsers)
router.delete('/user-delete/:id',deleteUser)


//export router
module.exports=router