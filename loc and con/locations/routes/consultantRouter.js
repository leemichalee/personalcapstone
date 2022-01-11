const consultantController = require('../controllers/consultantController.js')

const router = require('express').Router()

//router.post('/', consultantController.addConsultant)
router.get('/', consultantController.getAllConsultants)
router.get('/:id', consultantController.getOneConsultant)
//router.put('/:id', consultantController.updateConsultant)
//router.delete('/:id', consultantController.deleteConsultant)

module.exports = router