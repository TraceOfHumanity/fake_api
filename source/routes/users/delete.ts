import express from "express";

const router = express.Router();

router.delete("/users/:id", (req, res) => {
  res.send(`delete user ${req.params.id}`);
});

export { router as deleteUserRouter };
