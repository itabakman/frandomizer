const {Router} = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const {check,validationResult}= require('express-validator');
const bcrypt = require('bcryptjs')
const User = require('../models/user');
const config = require('config')

// api/auth/register
router.post('/register',
    [check('email', 'Wrong email').isEmail(),
    check('password','Pass wrong').isLength({min:6})
    ],
    
    async (req,res)=>{

    try {
      const errors = validationResult(req)
      
      if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array(),
        message: 'Некорретные данные при регистрации'})
      }
     
    
    const {email, password}= req.body
    
    
    const candidate = await User.findOne({email})
    
    if (candidate){
        return  res.status(400).json({message:'Такой пользователь уже есть'})
    }
    
    const hashedPassword = await bcrypt.hash(password,12)

    const user = new User ({email, password:hashedPassword})
    
    await user.save()

    res.status(201).json({message:"Пользователь создан"})



    } 
    catch (e) {
      
        res.status(500).json({message:'Что-то пошло не так, попробуйте снова Регистрация'})

    }


})

// api/auth/login
router.post('/login',
[
    check ('email','Введите корректный email').normalizeEmail().isEmail(),
    check ('password','Введите пароль').exists()
    
    ],
async (req,res)=>{

    try {
        
        
        const errors = validationResult(req)
        
        if (!errors.isEmpty())
        {
          return res.status(400).json({errors: errors.array(),
          message: 'Некорретные данные при входе '})

        }
        
        const {email,password} = req.body
        
        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message:"Пользователь не найден"})

        }

        const isMatch = bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({message:"Неверный пароль, попробуйте снова Авторизация"})
        }


        const token =jwt.sign(
            {userId : user.id },
            config.get('jwtSecret'),
            {expiresIn: '24h'}
            )
            res.json({token,userId:user.id})





      
      } catch (e) {
        
          res.status(500).json({message:'Что-то пошло не так, попробуйте снова))0)'})
  
      }

})



module.exports = router

