const { Car_specs } = require("../../models");

exports.getAllCarSpecs = async () => {
    const data = await Car_specs.findAll();

    if (!data || data.length === 0) {
        throw { statusCode: 404, message: "No car_specs found" };
    }

    return data;
};

exports.getCarSpecById = async (id) => {
    console.log(id);
    const data = await Car_specs.findByPk(id);
    console.log(data);

    if (!data) {
        throw {
            statusCode: 404,
            message: `Car_spec with id ${id} not found`,
        };
    }

    return data;
};

exports.getCarSpecBySpecId = async (car_id, spec_id) => {
    const opt = {
        where: { car_id, spec_id },
    };

    const data = await Car_specs.findOne(opt);

    return data;
};

exports.createCarSpec = async (carSpec) => {
    const data = await Car_specs.create(carSpec);

    return data;
};

exports.updateCarSpec = async (id, carSpec) => {
    const opt = {
        where: { id },
        returning: true,
    };

    const data = await Car_specs.update(carSpec, opt);

    return data[1][0];
};

exports.deleteCarSpec = async (id) => {
    const opt = {
        where: { id },
    };

    const data = await Car_specs.destroy(opt);

    return data;
};
