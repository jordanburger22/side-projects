const express = require('express')
const weaponRouter = express.Router()
const Weapon = require('../models/Weapon')

weaponRouter.post('/', async (req, res, next) => {
    try {
        const newWeapon = new Weapon(req.body)
        const savedWeapon = await newWeapon.save()
        return res.status(201).send(savedWeapon)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

weaponRouter.get('/', async (req, res, next) => {
    try {
        const weapons = await Weapon.find()
        return res.status(200).send(weapons)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})




module.exports = weaponRouter