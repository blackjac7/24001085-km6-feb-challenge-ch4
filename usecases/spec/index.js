const specRepo = require("../../repositories/spec");

exports.getAllSpecs = async () => {
    const data = await specRepo.getAllSpecs();

    return data;
};

exports.getSpecById = async (id) => {
    const data = await specRepo.getSpecById(id);

    return data;
};

exports.createSpec = async (spec) => {
    const existingSpec = await specRepo.getSpecByName(spec.name);

    if (existingSpec) {
        throw {
            statusCode: 409,
            message: `Spec with name ${spec.name} already exists`,
        };
    }

    const data = await specRepo.createSpec(spec);

    return data;
};

exports.updateSpec = async (id, spec) => {
    await specRepo.getSpecById(id);

    const existingSpec = await specRepo.getSpecByName(spec.name);

    if (existingSpec && existingSpec.id !== id) {
        throw {
            statusCode: 409,
            message: `Spec with name ${spec.name} already exists`,
        };
    }

    const data = await specRepo.updateSpec(id, spec);

    return data;
};

exports.deleteSpec = async (id) => {
    await specRepo.getSpecById(id);

    const data = await specRepo.deleteSpec(id);

    return data;
};
