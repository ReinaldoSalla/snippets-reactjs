import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { clientDir } from "./properties/app-properties";
import configureEndpoints from "./controllers/products-controller";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(clientDir));

configureEndpoints(app);

export default app;