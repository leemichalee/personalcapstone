const locationController = require('../controllers/locationController.js')

const router = require('express').Router()

//router.post('/', locationController.addLocation)
router.get('/', locationController.getAllLocations)
router.get('/:id', locationController.getOneLocation)
//router.put('/:id', locationController.updateLocation)
//router.delete('/:id', locationController.deleteLocation)

module.exports = router