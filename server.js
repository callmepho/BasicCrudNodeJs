import express from "express";
import mongoose from "mongoose";
import schema from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";
import { createHandler } from "graphql-http/lib/use/express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection error:", err));

app.use(
  "/graphql",
  createHandler({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

// Start the server at port 4000
app.listen(process.env.PORT, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
