import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// JSON for parsing request body
app.use(express.json());

// CORS to handle Cross-Origin Resource Sharing
// Allows all origins - just call cors()
app.use(cors())
// Allow specific origins - mention as parameters for the cors function
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ['Get', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("IT IS WORKING!");
});

app.use('/books', booksRoute);

mongoose
.connect(mongoDBURL)
.then( () => {
    console.log("App connected to database")
    app.listen(PORT, () => {
        console.log(`Listening on: ${PORT}`);
    });    
})
.catch((error) => {
    console.log(error);
});



