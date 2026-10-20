import express from "express";

const router = express.Router();

router.put("/users/:id", (req, res) => {
  res.send(`update user ${req.params.id}`);
});

export { router as updateUserRouter };
