import express from "express";
import ip from "ip";
import dotenv from "dotenv";
import cors from "cors";
import Response from "./domain/response.js";
//import logger from './util/logger.js';
import HttpStatus from "./controller/patient.controller.js";

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    new Response(
      HttpStatus.OK.code,
      HttpStatus.OK.status,
      "Patient API, V1.0.0 - All Systems GO"
    )
  );
});
app.listen(PORT, () =>
  console.log(`Server running on: ${ip.address()}:${PORT}`)
);
