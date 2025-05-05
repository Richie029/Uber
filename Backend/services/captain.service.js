const captainModel = require('../models/captain.model');

module.exports.registerCaptain = async ({
    firstname,lastname,email,password,color,plate,capacity,type
}) => {
    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !type) {
        throw new Error("All fields are required");
    }
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            type
        }
    })
    return captain;
}