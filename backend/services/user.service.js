import userModel from "../models/user.model.js";
const CreateNewUser = async (
    user
) => {
    try {
        console.log("Data from the service section" , user);
        if (!user.firstname || !user.lastname || !user.email || !user.password) {
            throw new Error("Please provide all the required fields: firstname, lastname, email, and password.");
        }
        const newuser = await userModel.create({
            name: {
                firstname : user.firstname,
                middlename : user.middlename,
                lastname : user.lastname,
            },
            email : user.email,
            password: user.password,
        });
        return newuser;
    } catch (error) {
        throw new Error(`User creation failed: ${error.message}`);
    }
};

export default CreateNewUser;