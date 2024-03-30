const carUsecase = require("../../usecases/car");

exports.getAllCars = async (req, res) => {
    try {
        const data = await carUsecase.getAllCars();

        res.status(200).json({
            message: "Cars retrieved successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await carUsecase.getCarById(id);

        res.status(200).json({
            message: "Car retrieved successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.createCar = async (req, res) => {
    try {
        const data = await carUsecase.createCar(req.body);

        res.status(201).json({
            message: "Car created successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await carUsecase.updateCar(id, req.body);

        res.status(200).json({
            message: "Car updated successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.deleteCar = async (req, res) => {
    try {
        const { id } = req.params;
        await carUsecase.deleteCar(id);

        res.status(200).json({ message: "Car deleted successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
};
