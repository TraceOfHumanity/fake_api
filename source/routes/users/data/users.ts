import type { User } from "../types/user.ts";
import { usersSeed } from "./seed.ts";

export const users: Map<string, User> = new Map(
  usersSeed.map((user) => [user.id, user]),
);
