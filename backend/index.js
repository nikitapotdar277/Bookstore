import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

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



