import captainModel from "../models/captain.model.js";

const CreateNewCaptain = async (captain) => {
    try {
        console.log("Data from the service section" , captain); 
        if (!captain.firstname || !captain.email || !captain.password || !captain.type || !captain.model || !captain.capacity || !captain.vehicleNumber) {
            throw new Error("Please provide all the required fields: firstname, lastname, email, and password.");
        }
        const newCaptain = await captainModel.create({
            name : {
                firstname: captain.firstname,
                middlename: captain.middlename,
                lastname: captain.lastname
            },
            email: captain.email,
            password: captain.password,
            vehicle: {
                type: captain.type,
                model: captain.model,
                capacity: captain.capacity,
                vehicleNumber: captain.vehicleNumber
            }
        });
        return newCaptain;
    } catch (error) {
        console.log("Error from the service section", error.message);
        throw new Error(error);
    }
}

export default {CreateNewCaptain};