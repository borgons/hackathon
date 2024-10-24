const asyncHandler = require('express-async-handler')

const Info = require('../models/Info')

const getInfos = asyncHandler(async(req, res) => {
  Info.find()
    .then(infos => res.json(infos))
    .catch(err => console.log(err))

})

const createInfo = asyncHandler(async(req, res) => {

  const {
    website, 
    message
  } = req.body

  const newInfo = new Info({
    website,
    message
  })


  newInfo.save().then(res.status(201).json({
    msg: "Infos has been saved"
  }))

})




module.exports = {
  getInfos,
  createInfo
}