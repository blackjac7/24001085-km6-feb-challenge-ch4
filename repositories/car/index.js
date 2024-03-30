const { Car } = require("../../models");

exports.getAllCars = async () => {
    // const opt = {
    //     include: ["options", "specs"],
    // };

    const data = await Car.findAll();

    if (!data || data.length === 0) {
        throw { statusCode: 404, message: "No cars found" };
    }

    return data;
};

exports.getCarById = async (id) => {
    const opt = {
        where: { id },
        include: ["options", "specs"],
    };

    const data = await Car.findOne(opt);

    if (!data) {
        throw { statusCode: 404, message: `Car with id ${id} not found` };
    }

    return data;
};

exports.getCarByPlate = async (plate) => {
    const opt = {
        where: { plate },
        include: ["options", "specs"],
    };

    const data = await Car.findOne(opt);

    return data;
};

exports.createCar = async (car) => {
    const data = await Car.create(car);

    return data;
};

exports.updateCar = async (id, car) => {
    const opt = {
        where: { id },
        returning: true,
    };

    const data = await Car.update(car, opt);

    if (data[0] === 0) {
        throw { statusCode: 404, message: `Car with id ${id} not found` };
    }

    return data[1][0];
};

exports.deleteCar = async (id) => {
    const opt = {
        where: { id },
    };

    const data = await Car.destroy(opt);

    if (data === 0) {
        throw { statusCode: 404, message: `Car with id ${id} not found` };
    }

    return data;
};
