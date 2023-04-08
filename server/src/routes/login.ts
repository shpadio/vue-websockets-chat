import express from "express";

const router = express.Router();

router.route("/").post((req, res) => {
  const { username } = req.body;
  res.json({ id: Math.random(), username }).status(200);
});

export default router;
