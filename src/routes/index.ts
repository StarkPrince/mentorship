const mentorRouter = require("./mentorRoutes");
const menteeRouter = require("./menteeRoutes");

const app = require("express");
const router = app.Router();

router.get("/", (req: any, res: any) => {
  res.send("Hello you are in the API route!");
});

router.use("/mentor", mentorRouter);
router.use("/mentee", menteeRouter);

module.exports = router;
