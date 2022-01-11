const db = require('../models/index')
const Location = db.Locations

const addLocation = async (req,res) => {
    let input_data = {
        name: req.body.name
    }
    const location = await Location.create(input_data)
    res.status(200).send(location)
}

const getAllLocations = async(req, res) => {
    let locations = await Location.findAll({include: db.Consultants})
    res.status(200).send(locations)
}

const getOneLocation = async(req, res) => {
    let id = req.params.id
    let locations = await Location.findOne({where: {id: id}, include: db.Consultants})
    res.status(200).send(locations)
}

const updateLocation = async(req, res) => {
    let id = req.params.id
    const location = await Location.update(req.body, {where: {id: id}})
    res.status(200).send(location)
}

const deleteLocation = async(req, res) => {
    let id = req.params.id
    await Location.destroy({where: {id: id}})
    res.status(200).send(`location with id: ${id} is deleted`)
}

module.exports = {
    addLocation,
    getAllLocations,
    getOneLocation,
    updateLocation,
    deleteLocation
}