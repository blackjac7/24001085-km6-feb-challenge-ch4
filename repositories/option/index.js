const { Option } = require("../../models");

exports.getAllOptions = async () => {
    const data = await Option.findAll();

    if (!data || data.length === 0) {
        throw { statusCode: 404, message: "No options found" };
    }

    return data;
};

exports.getOptionById = async (id) => {
    const opt = {
        include: ["cars"],
    };

    const data = await Option.findByPk(id, opt);

    if (!data) {
        throw { statusCode: 404, message: `Option with id ${id} not found` };
    }

    return data;
};

exports.getOptionByName = async (name) => {
    const opt = {
        where: { name },
    };

    const data = await Option.findOne(opt);

    return data;
};

exports.createOption = async (payload) => {
    const data = await Option.create(payload);

    return data;
};

exports.updateOption = async (id, payload) => {
    const opt = {
        where: { id },
        returning: true,
    };

    const data = await Option.update(payload, opt);

    return data[1][0];
};

exports.deleteOption = async (id) => {
    const opt = {
        where: { id },
    };

    const data = await Option.destroy(opt);

    return data;
};
