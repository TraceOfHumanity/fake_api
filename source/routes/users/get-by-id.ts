import express from "express";

const router = express.Router();

router.get("/users/:id", (req, res) => {
  res.send(`get user ${req.params.id}`);
});

export { router as getUserByIdRouter };
