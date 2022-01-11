module.exports = (sequelize, DataTypes) => {
    const Consultant = sequelize.define('consultant', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        locationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Consultant
}