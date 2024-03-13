const express = require("express");
const app = express();
import EnvVars from "./constants/EnvVars";
const bodyParser = require("body-parser");
const routes = require("./routes");
// const checkIfAuthenticated = require("./middleware/auth");

app.use(bodyParser.json());

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.use("/api", routes);

app.listen(EnvVars.Port, () => {
  console.log(`Server is running on port ${EnvVars.Port}`);
});
