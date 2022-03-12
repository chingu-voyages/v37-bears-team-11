const router = require('express').Router()
const knex = require('../database/connection')
const passport = require('passport')
const utils = require('../lib/utils')
const path = require('path')
const filename = path.basename(__filename)
const Logger = require('../lib/logger')(filename)

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.status(200).json({ success: true, msg: 'You are successfully authenticated to this route!' })
})

// Validate an existing user and issue a JWT
router.post('/login', async function (req, res, next) {
    Logger.info(`/login`)
    const { email, password } = req.body

    try {
        const user = await knex('users').where('email', email).first()

        if (!user) {
            Logger.info(`User unavailable for email - ${email}`)
            return res.status(401).json({ success: false, msg: 'could not find user' })
        }

        const isValid = utils.validPassword(password, user.hash, user.salt)

        if (isValid) {
            Logger.info(`Valid Password`)
            const tokenObject = utils.issueJWT(user)

            res.status(200).json({
                success: true,
                token: tokenObject.token,
                expiresIn: tokenObject.expires,
            })
        } else {
            Logger.info(`Password Invalid`)
            res.status(401).json({ success: false, msg: 'you entered the wrong password' })
        }
    } catch (error) {
        Logger.error(error)
        next(error)
    }
})

// Register a new user
router.post('/register', async function (req, res, next) {
    Logger.info(`/register`)
    const { username, password, email, phone, address, is_operator, first_name, last_name } = req.body
    const saltHash = utils.genPassword(password)

    const salt = saltHash.salt
    const hash = saltHash.hash

    try {
        const user = await knex('users').insert(
            {
                username,
                password,
                email,
                phone,
                //TODO: insert address?
                is_operator,
                first_name,
                last_name,
                salt,
                hash,
            },
            ['id', 'username', 'email', 'phone', 'address', 'is_operator', 'first_name', 'last_name']
        )

        const tokenObject = utils.issueJWT(user)
        Logger.info(`Inserted User`)
        res.json({ success: true, user, token:tokenObject.token })
    } catch (error) {
        Logger.error(error)
        res.json({ success: false, msg: error })
    }
})

/**
 * sample route
 * GET all users from database
 **/
router.get('/', async (req, res) => {
    try {
        //query database using knex function
        const data = await knex('users').select('*')
        return res.json(data)
    } catch (err) {
        return res.send('error')
    }
})

module.exports = router
