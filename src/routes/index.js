import express from "express";

import publicRoutes from "./public";
import userRoutes from "./users";
import apiMiddleware from "../middleware/apiAuth";

const app = express();

app.use("/user", apiMiddleware, userRoutes);

/* public routes */
app.use("/", publicRoutes);

module.exports = app;
