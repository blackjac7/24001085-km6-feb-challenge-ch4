const specUsecase = require("../../usecases/spec");

exports.getAllSpecs = async (req, res) => {
    try {
        const data = await specUsecase.getAllSpecs();

        res.status(200).json({
            message: "Specs retrieved successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getSpecById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await specUsecase.getSpecById(id);

        res.status(200).json({
            message: "Spec retrieved successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.createSpec = async (req, res) => {
    try {
        const data = await specUsecase.createSpec(req.body);

        res.status(201).json({
            message: "Spec created successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateSpec = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await specUsecase.updateSpec(id, req.body);

        res.status(200).json({
            message: "Spec updated successfully",
            data,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.deleteSpec = async (req, res) => {
    try {
        const { id } = req.params;
        await specUsecase.deleteSpec(id);

        res.status(200).json({
            message: "Spec deleted successfully",
        });
    } catch (error) {
        res.status(500).json(error);
    }
};
