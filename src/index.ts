import express from "express";
import cors from "cors";
import env from "dotenv"
import errorHandler from "./middlewares/error.middleware";
import router from "./routes/index.router";

env.config();

const app = express()

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(`server is up and running ${process.env.PORT}`));

