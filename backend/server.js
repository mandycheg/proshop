import express from "express";
// need to use .js for your own es modules
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

const port = process.env.PORT || 8000;

connectDB();

//initialize express
const app = express();

app.get("/", (request, response) => {
  response.send("API is running...");
});

app.get("/api/products", (request, response) => {
  response.json(products);
});

app.get("/api/products/:id", (request, response) => {
  const product = products.find((p) => p._id === request.params.id);
  response.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
