export {};

const router = require("express").Router();

router.get("/", (req: any, res: any) => {
  res.send("Mentee Route");
});

router.post("/signup", (req: any, res: any) => {
  const { name, email, password } = req.body;
  res.send(`Mentee Signup: ${name}, ${email}, ${password}`);
});

router.post("/signin", (req: any, res: any) => {
  const { email, password } = req.body;
  res.send(`Mentee Login: ${email}, ${password}`);
});

module.exports = router;
