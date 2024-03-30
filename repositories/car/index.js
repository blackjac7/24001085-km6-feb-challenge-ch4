const { Car } = require("../../models");

exports.getAllCars = async () => {
    const opt = {
        include: ["options", "specs"],
    };

    const data = await Car.findAll(opt);

    if (!data || data.length === 0) {
        throw { statusCode: 404, message: "No cars found" };
    }

    return data;
};

exports.getAllCarOptions = async (id) => {
    console.log("id", id);
    const car = await Car.findByPk(id);
    console.log(car);

    if (!car) {
        throw {
            statusCode: 404,
            message: `Car with id ${car_id} not found`,
        };
    }

    const options = await car.getOptions();

    if (!options || options.length === 0) {
        throw { statusCode: 404, message: "No options found" };
    }

    return options;
};

exports.getAllCarSpecs = async (id) => {
    const car = await Car.findByPk(id);

    if (!car) {
        throw {
            statusCode: 404,
            message: `Car with id ${car_id} not found`,
        };
    }

    const specs = await car.getSpecs();

    if (!specs || specs.length === 0) {
        throw { statusCode: 404, message: "No specs found" };
    }

    return specs;
};

exports.getCarById = async (id) => {
    const opt = {
        include: ["options", "specs"],
    };

    const data = await Car.findByPk(id, opt);

    if (!data) {
        throw { statusCode: 404, message: `Car with id ${id} not found` };
    }

    return data;
};

exports.getCarByPlate = async (plate) => {
    const opt = {
        where: { plate },
    };

    const data = await Car.findOne(opt);

    return data;
};

exports.createCar = async (payload) => {
    const data = await Car.create(payload);

    return data;
};

exports.updateCar = async (id, payload) => {
    const opt = {
        where: { id },
        returning: true,
    };

    const data = await Car.update(payload, opt);

    return data[1][0];
};

exports.deleteCar = async (id) => {
    const opt = {
        where: { id },
    };

    const data = await Car.destroy(opt);

    return data;
};
