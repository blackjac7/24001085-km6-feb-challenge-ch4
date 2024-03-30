const carRepo = require("../../repositories/car");

exports.getAllCars = async () => {
    const data = await carRepo.getAllCars();

    return data;
};

exports.getCarById = async (id) => {
    const data = await carRepo.getCarById(id);

    return data;
};

exports.createCar = async (car) => {
    const existingCar = await carRepo.getCarByPlate(car.plate);
    if (existingCar) {
        throw {
            statusCode: 400,
            message: "A car with this plate already exists",
        };
    }

    const data = await carRepo.createCar(car);

    return data;
};

exports.updateCar = async (id, car) => {
    await carRepo.getCarById(id);

    const existingCar = await carRepo.getCarByPlate(car.plate);
    if (existingCar && existingCar.id !== id) {
        throw {
            statusCode: 400,
            message: "A car with this plate already exists",
        };
    }

    const data = await carRepo.updateCar(id, car);

    return data;
};

exports.deleteCar = async (id) => {
    await carRepo.getCarById(id);

    const data = await carRepo.deleteCar(id);

    return data;
};
