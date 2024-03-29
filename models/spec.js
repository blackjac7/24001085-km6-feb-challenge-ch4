"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Spec extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Spec.belongsTo(models.Car, {
                foreignKey: "car_id",
            });
        }
    }
    Spec.init(
        {
            name: DataTypes.STRING,
            car_id: DataTypes.INTEGER,
            deletedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Spec",
            paranoid: true, // enable soft delete
        }
    );
    return Spec;
};
