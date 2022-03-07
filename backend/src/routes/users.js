const router = require('express').Router()
const knex = require('../database/connection')
const passport = require('passport')
const utils = require('../lib/utils')

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.status(200).json({ success: true, msg: 'You are successfully authenticated to this route!' })
})

// Validate an existing user and issue a JWT
router.post('/login', function (req, res, next) {
    const { email, password } = req.body
    console.log('req body: ', email)

    knex('users')
        .where('email', email)
        .limit(1)
        .then((response) => {
            const user = response[0]
            if (!user) {
                return res.status(401).json({ success: false, msg: 'could not find user' })
            }

            const isValid = utils.validPassword(password, user.hash, user.salt)

            if (isValid) {
                const tokenObject = utils.issueJWT(user)

                res.status(200).json({
                    success: true,
                    token: tokenObject.token,
                    expiresIn: tokenObject.expires,
                })
            } else {
                res.status(401).json({ success: false, msg: 'you entered the wrong password' })
            }
        })
        .catch((error) => {
            console.error(error)
            next(error)
        })
})

// Register a new user
router.post('/register', function (req, res, next) {
    console.log('request: ', req.body)
    const { username, password, email, phone, address, is_operator, first_name, last_name } = req.body
    const saltHash = utils.genPassword(password)

    const salt = saltHash.salt
    const hash = saltHash.hash

    knex('users')
        .insert(
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
        .then((user) => {
            console.log('user: ', user)
            res.json({ success: true, user })
        })
        .catch((error) => {
            console.log('register error: ', error)
            res.json({ success: false, msg: error })
        })
})

module.exports = router
