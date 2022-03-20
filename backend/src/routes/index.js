const router = require('express').Router()

router.use('/api/users', require('./users'))
router.use('/api/search', require('./search'))

module.exports = router
