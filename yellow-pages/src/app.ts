import "express-async-errors";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import loginRoutes from "./routes/login";
import userRoutes from "./routes/user";
import handleErrorMiddleware from "./errors/handleError";
import contactRoutes from "./routes/contact";

const app = express();
app.use(express.json());

app.use(cors());

app.use("/login", loginRoutes);
app.use("/users", userRoutes);
app.use("/contacts", contactRoutes);

app.use(handleErrorMiddleware);

export default app;
