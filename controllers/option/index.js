const optionUsecase = require("../../usecases/option");

exports.getAllOptions = async (req, res) => {
    try {
        const data = await optionUsecase.getAllOptions();

        res.status(200).json({
            message: "Options retrieved successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getOptionById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await optionUsecase.getOptionById(id);

        res.status(200).json({
            message: "Option retrieved successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.createOption = async (req, res) => {
    try {
        const data = await optionUsecase.createOption(req.body);

        res.status(201).json({
            message: "Option created successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateOption = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await optionUsecase.updateOption(id, req.body);

        res.status(200).json({
            message: "Option updated successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.deleteOption = async (req, res) => {
    try {
        const { id } = req.params;
        await optionUsecase.deleteOption(id);

        res.status(200).json({
            message: "Option deleted successfully",
        });
    } catch (error) {
        res.status(500).json(error);
    }
};
