const carSpecUsecase = require("../../usecases/car_spec");

exports.getAllCarSpecs = async (req, res, next) => {
    try {
        const data = await carSpecUsecase.getAllCarSpecs();

        res.status(200).json({
            message: "Car specs retrieved successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.getCarSpecById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await carSpecUsecase.getCarSpecById(id);

        res.status(200).json({
            message: "Car spec retrieved successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.createCarSpec = async (req, res, next) => {
    try {
        const payload = req.body;
        const data = await carSpecUsecase.createCarSpec(payload);

        res.status(201).json({
            message: "Car spec created successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.updateCarSpec = async (req, res, next) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await carSpecUsecase.updateCarSpec(id, payload);

        res.status(200).json({
            message: "Car spec updated successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteCarSpec = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await carSpecUsecase.deleteCarSpec(id);

        res.status(200).json({
            message: "Car spec deleted successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};
