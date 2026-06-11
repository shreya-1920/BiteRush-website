// controllers/authController.js

// Register User
const register = (req, res) => {

    const { username, email, password } = req.body;

    res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        user: {
            username,
            email
        }
    });
};

// Login User
const login = (req, res) => {

    const { email, password } = req.body;

    res.status(200).json({
        success: true,
        message: "Login Successful",
        email,
        password
    });
};

// Get Profile
const getProfile = (req, res) => {

    res.status(200).json({
        success: true,
        user: {
            id: 1,
            username: "shivam",
            email: "shivam@gmail.com"
        }
    });
};

// Logout User
const logout = (req, res) => {

    res.status(200).json({
        success: true,
        message: "Logout Successful"
    });
};
//forgot password
const forgotPassword = (req, res) => {

    const { email } = req.body;

    res.status(200).json({
        success: true,
        message: `Password reset link sent to ${email}`
    });
};

//reset password
const resetPassword = (req, res) => {

    const { newPassword } = req.body;

    res.status(200).json({
        success: true,
        message: "Password reset successful",
        receivedPassword: newPassword
    });
};
module.exports = {
    register,
    login,
    getProfile,
    logout,
    forgotPassword,
    resetPassword
};