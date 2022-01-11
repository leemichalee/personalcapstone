const db = require('../models/index')
const Consultant = db.Consultants

const addConsultant = async (req,res) => {
    let input_data = {
        name: req.body.name,
        email: req.body.email,
        locationId: req.body.locationId,
        picture: req.body.picture
    }
    const consultant = await Consultant.create(input_data)
    res.status(200).send(consultant)
}

const getAllConsultants = async(req, res) => {
    let consultants = await Consultant.findAll({})
    res.status(200).send(consultants)
}

const getOneConsultant = async(req, res) => {
    let id = req.params.id
    let consultants = await Consultant.findOne({where: {id: id}})
    res.status(200).send(consultants)
}

const updateConsultant = async(req, res) => {
    let id = req.params.id
    const consultant = await Consultant.update(req.body, {where: {id: id}})
    res.status(200).send(consultant)
}

const deleteConsultant = async(req, res) => {
    let id = req.params.id
    await Consultant.destroy({where: {id: id}})
    res.status(200).send(`consultant with id: ${id} is deleted`)
}

module.exports = {
    addConsultant,
    getAllConsultants,
    getOneConsultant,
    updateConsultant,
    deleteConsultant
}