const dbConfig = require('../config/dbConfig')
//gets the db configuration from the dbConfig file

const { Sequelize, DataTypes } = require('sequelize')
//gets the sequelize constructor and datatypes from sequelize module

const sequelize = new Sequelize(
    {   database: dbConfig.DB,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,
})

sequelize.authenticate()
    .then(() => {
        console.log("connected to Postgres DB")
    })
    .catch(e => {
        console.log('unable to connect to Postgres DB' + e)
    })

const db = {}
db.sequelize = sequelize
db.Locations = require('./locationModel')(sequelize, DataTypes)
db.Consultants = require('./consultantModel')(sequelize,DataTypes)
db.sequelize.sync({ force: false}).then(() => {
    console.log('DB synced with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
})

db.Consultants.belongsTo(db.Locations);
db.Locations.hasMany(db.Consultants);

module.exports = db