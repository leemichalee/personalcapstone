module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('location', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Location
}