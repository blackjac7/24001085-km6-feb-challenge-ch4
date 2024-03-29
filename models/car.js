"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Car extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Car.hasMany(models.Option, {
                foreignKey: "car_id",
            });
            Car.hasMany(models.Spec, {
                foreignKey: "car_id",
            });
        }
    }
    Car.init(
        {
            plate: DataTypes.STRING,
            manufacture: DataTypes.STRING,
            model: DataTypes.STRING,
            image: DataTypes.TEXT,
            rent_per_day: DataTypes.INTEGER,
            capacity: DataTypes.INTEGER,
            description: DataTypes.STRING,
            transmission: DataTypes.STRING,
            available: DataTypes.BOOLEAN,
            type: DataTypes.STRING,
            year: DataTypes.INTEGER,
            availableAt: DataTypes.DATE,
            deletedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Car",
            paranoid: true, // enable soft delete
        }
    );
    return Car;
};
