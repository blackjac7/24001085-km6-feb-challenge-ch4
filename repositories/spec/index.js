const { Spec } = require("../../models");

exports.getAllSpecs = async () => {
    const data = await Spec.findAll();

    if (!data || data.length === 0) {
        throw { statusCode: 404, message: "No specs found" };
    }

    return data;
};

exports.getSpecById = async (id) => {
    const opt = {
        include: ["cars"],
    };

    const data = await Spec.findByPk(id, opt);

    if (!data) {
        throw { statusCode: 404, message: `Spec with id ${id} not found` };
    }

    return data;
};

exports.getSpecByName = async (name) => {
    const opt = {
        where: { name },
    };

    const data = await Spec.findOne(opt);

    return data;
};

exports.createSpec = async (payload) => {
    const data = await Spec.create(payload);

    return data;
};

exports.updateSpec = async (id, payload) => {
    const opt = {
        where: { id },
        returning: true,
    };

    const data = await Spec.update(payload, opt);

    return data[1][0];
};

exports.deleteSpec = async (id) => {
    const opt = {
        where: { id },
    };

    const data = await Spec.destroy(opt);

    return data;
};
