const optionUsecase = require("../../usecases/option");

exports.getAllOptions = async (req, res, next) => {
    try {
        const data = await optionUsecase.getAllOptions();

        res.status(200).json({
            message: "Options retrieved successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.getOptionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await optionUsecase.getOptionById(id);

        res.status(200).json({
            message: "Option retrieved successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.createOption = async (req, res, next) => {
    try {
        const data = await optionUsecase.createOption(req.body);

        res.status(201).json({
            message: "Option created successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.updateOption = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await optionUsecase.updateOption(id, req.body);

        res.status(200).json({
            message: "Option updated successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteOption = async (req, res, next) => {
    try {
        const { id } = req.params;
        await optionUsecase.deleteOption(id);

        res.status(200).json({
            message: "Option deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};
