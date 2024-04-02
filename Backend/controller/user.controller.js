import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;

    const user = await User.findOne({ Email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(Password, 10);

    const createdUser = new User({
      Name,
      Email,
      Password: hashPassword,
    });

    await createdUser.save();

    res.status(201).json({ message: "User created successfully" ,user:{
      _id:createdUser._id,
      Name:createdUser.Name,
      Email:createdUser.Email,
    }});
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
    try {
      const { Email, Password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ Email });
  
      // If user does not exist or password does not match, return an error response
      if (!user) {
        return res.status(400).json({ message: "Invalid Email or password" });
      }
  
      // Compare the provided password with the hashed password stored in the database
      const isMatch = await bcrypt.compare(Password, user.Password);
  
      // If passwords don't match, return an error response
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Email or password" });
      }
  
      // If user exists and password matches, return a success response with user details
      res.status(200).json({
        message: "Login Successful",
        user: {
          _id: user._id,
          Name: user.Name,
          Email: user.Email,
        },
      });
    } catch (error) {
      // If an error occurs during the process, log the error and return a generic error response
      console.error("Error:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };