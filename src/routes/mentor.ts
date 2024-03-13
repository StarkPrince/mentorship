export {};

const express = require("express");
const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.send("Mentor Route");
});

router.post("/signup", (req: any, res: any) => {
  const { name, email, password } = req.body;
  res.send(`Mentor Signup: ${name}, ${email}, ${password}`);
});

router.post("/signin", (req: any, res: any) => {
  const { email, password } = req.body;
  res.send(`Mentor Login: ${email}, ${password}`);
});

module.exports = router;
