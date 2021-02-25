import express from "express";
import { authRoutes } from "./routes/auth.routes";
import config from "./config/config";
import { protectedRoutes } from "./routes/protected.routes";
import { tokenErrorHandling } from "./middlewares/tokenValidation";

// config express
const app = express();
const PORT = config.server.port;
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(authRoutes);
app.use(protectedRoutes);

//middlewares
app.use(tokenErrorHandling);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
