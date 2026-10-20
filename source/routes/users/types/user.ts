export type Gender = "male" | "female";

export interface User {
    id: string;
    name: string;
    age: number;
    gender: Gender;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

export type PublicUser = Omit<User, "password">;

export type CreateUserInput = Omit<User, "id" | "createdAt" | "updatedAt">;

export type UpdateUserInput = Partial<CreateUserInput>;
