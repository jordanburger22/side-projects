const express = require('express')
const heroClassRouter = express.Router()
const HeroClass = require('../models/HeroClass')

heroClassRouter.post('/:weaponId', async (req, res, next) => {
    try {
        req.body.startingWeapon = req.params.weaponId
        const newHeroClass = new HeroClass(req.body)
        const savedHeroClass = await newHeroClass.save()
        return res.status(201).send(savedHeroClass)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

heroClassRouter.get('/', async (req, res, next) => {
    try {
        const heroClasses = await HeroClass.find()
        return res.status(200).send(heroClasses)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})



module.exports = heroClassRouter