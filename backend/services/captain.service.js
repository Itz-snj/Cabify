import captainModel from "../models/captain.model.js";

const CreateNewCaptain = async (captain) => {
    try {
        console.log("Data from the service section" , captain); 
        if (!captain.name?.firstname || !captain.name?.lastname || !captain.email || !captain.password ||
            !captain.vehicle?.type || !captain.vehicle?.model || !captain.vehicle?.capacity || !captain.vehicle?.vehicleNumber) {
            throw new Error("Please provide all the required fields: firstname, lastname, email, password, and vehicle details.");
        }
        const newCaptain = await captainModel.create({
            name : {
                firstname: captain.name.firstname,
                middlename: captain.name.middlename,  
                lastname: captain.name.lastname
            },
            email: captain.email,
            password: captain.password,
            vehicle: {
                type: captain.vehicle.type,
                model: captain.vehicle.model,
                capacity: captain.vehicle.capacity,
                vehicleNumber: captain.vehicle.vehicleNumber
            }
        });
        
        return newCaptain;
    } catch (error) {
        console.log("Error from the service section", error.message);
        throw new Error(error);
    }
}

export default {CreateNewCaptain};