const carRepo = require("../../repositories/car");

exports.getAllCars = async () => {
    const data = await carRepo.getAllCars();

    return data;
};

exports.getCarById = async (id) => {
    const data = await carRepo.getCarById(id);

    return data;
};

exports.getCarByPlate = async (plate) => {
    const data = await carRepo.getCarByPlate(plate);

    return data;
};

exports.createCar = async (car) => {
    const data = await carRepo.createCar(car);

    return data;
};

exports.updateCar = async (id, car) => {
    const data = await carRepo.updateCar(id, car);

    return data;
};

exports.deleteCar = async (id) => {
    const data = await carRepo.deleteCar(id);

    return data;
};
