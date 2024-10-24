const express = require('express')
const router = express.Router()

const { getInfos, createInfo } = require('../../controller/infoController')

router.get('/getInfos', getInfos)
router.post('/createInfo', createInfo)

module.exports = router