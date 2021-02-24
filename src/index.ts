import express from "express";
import { authRoutes } from "./routes/auth.routes";
import config from "./config/config";

// config express
const app = express();
const PORT = config.server.port;

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
