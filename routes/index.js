const Express = require('express')
const Path = require('path')
const accountings = require('./accountings')
const companies = require('./companies')
const contacts = require('./contacts')
const install = require('./install')
const inventories = require('./inventories')
const lineMessages = require('./line-messages')
const lineUsers = require('./line-users')
const lineWebhook = require('./line-webhook')
const upload = require('./upload')

const router = Express.Router()

const apiPath = '/api/v1'

router.use(apiPath + '/accountings', accountings)
router.use(apiPath + '/companies', companies)
router.use(apiPath + '/contacts', contacts)
router.use(apiPath + '/install', install)
router.use(apiPath + '/inventories', inventories)
router.use(apiPath + '/line-messages', lineMessages)
router.use(apiPath + '/line-users', lineUsers)
router.use(apiPath + '/line-webhook', lineWebhook)
router.use(apiPath + '/upload', upload)
router
  .get('/api/version', (req, res) => {
    res.status(200).send('1.0')
  })
  .get('*', (req, res) => {
    res.status(404).send()
  })

module.exports = router
