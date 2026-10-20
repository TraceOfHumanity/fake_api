import express from "express";

const router = express.Router();

router.post("/users", (req, res) => {
  res.send("create a new user");
});

export {router as createUserRouter};