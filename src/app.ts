import express, { Application } from "express";
import morgan from "morgan";

const app: Application = express();

import authRoutes from "./routes/auth";

// Settings
app.set('port', 4000);

// Routes
app.use(authRoutes);

// Middlewares
app.use(morgan('dev'));

export default app;