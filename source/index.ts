import express from "express";
import { createUserRouter } from "./routes/users/create.ts";
import { deleteUserRouter } from "./routes/users/delete.ts";
import { getAllUsersRouter } from "./routes/users/get-all.ts";
import { getUserByIdRouter } from "./routes/users/get-by-id.ts";
import { updateUserRouter } from "./routes/users/update.ts";

const app = express();

app.use(getAllUsersRouter);
app.use(getUserByIdRouter);
app.use(createUserRouter);
app.use(updateUserRouter);
app.use(deleteUserRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
