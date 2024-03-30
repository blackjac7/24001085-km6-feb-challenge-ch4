const carOptionUsecase = require("../../usecases/car_option");

exports.getAllCarOptions = async (req, res, next) => {
    try {
        const data = await carOptionUsecase.getAllCarOptions();

        res.status(200).json({
            message: "Car options retrieved successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.getCarOptionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await carOptionUsecase.getCarOptionById(id);

        res.status(200).json({
            message: "Car option retrieved successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.createCarOption = async (req, res, next) => {
    try {
        const data = await carOptionUsecase.createCarOption(req.body);

        res.status(201).json({
            message: "Car option created successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.updateCarOption = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await carOptionUsecase.updateCarOption(id, req.body);

        res.status(200).json({
            message: "Car option updated successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteCarOption = async (req, res, next) => {
    try {
        const { id } = req.params;
        await carOptionUsecase.deleteCarOption(id);

        res.status(200).json({
            message: "Car option deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};
