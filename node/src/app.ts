import express, { Application } from "express";
import morgan from "morgan";

const app: Application = express();

import authRoutes from "./routes/authRouter";

// Settings
app.set('port', 4000);

// Routes
app.use(express.json());
app.use('/api/auth/', authRoutes);

// Middlewares
app.use(morgan('dev'));

export default app;