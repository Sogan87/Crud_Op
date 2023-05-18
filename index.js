import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRouts from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRouts);

app.get("/", (req, res) => res.send("Olá de express"));
app.all("*", (req, res) => res.send("That route doesn't exist"));

app.listen(port, () => console.log(`Server esta escutando: http://localhost:${port}`

 ));