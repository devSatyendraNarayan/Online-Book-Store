import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();

const port = process.env.PORT || process.env.BACKUP_PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my Express.js app!');
});

// Connect to MongoDB
mongoose.connect(URI).then(() => {
  console.log("Connected to MongoDB");
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error("Error connecting to MongoDB:", err.message);
});

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

