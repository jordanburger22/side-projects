const express = require("express")
const authRouter = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const emailValidator = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


authRouter.post('/signup', async (req, res, next) => {
    try {

        if (!emailValidator(req.body.email)) {
            res.status(400)
            return next(new Error('Must be a valid email'))
        }

        const user = await User.findOne({ email: req.body.email })
        if (user) {
            res.status(403)
            return next(new Error('Email is taken.'))
        }

        const newUser = new User(req.body)
        const savedUser = await newUser.save()
        const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
        return res.status(201).send({ token, user: savedUser.withoutPassword() })

    } catch (err) {
        res.status(500)
        return next(err)
    }
})

authRouter.post('/login', async (req, res, next) => {
    try {
        if (!emailValidator(req.body.email)) {
            res.status(400)
            return next(new Error('Must be a valid email'))
        }

        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(403)
            return next(new Error('Incorrect email or password'))
        }

        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            if (!isMatch) {
                res.status(403)
                return next(new Error('Incorrect email or password'))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ token, user: user.withoutPassword() })
        })

    } catch (err) {
        res.status(500)
        return next(err)
    }
})


module.exports = authRouter