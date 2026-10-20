import type { Gender, User } from "../types/user.ts";

const USERS_COUNT = 100;
const START_DATE = 0;
const END_DATE = Date.now();


const MALE_NAMES = [
    "James", "Oliver", "Liam", "Noah", "Ethan", "Lucas", "Mason", "Henry",
    "Daniel", "Oleksandr", "Andriy", "Taras", "Ivan", "Max", "Dmytro", "Nikita",
];
const FEMALE_NAMES = [
    "Emma", "Olivia", "Sophia", "Mia", "Ava", "Emily", "Grace", "Chloe",
    "Anna", "Olena", "Maria", "Iryna", "Sofia", "Nina", "Kateryna", "Lily",
];
const LAST_NAMES = [
    "Smith", "Johnson", "Brown", "Taylor", "Miller", "Davis", "Wilson", "Moore",
    "Shevchenko", "Kovalenko", "Bondarenko", "Tkachenko", "Kravchenko", "Melnyk",
    "Clark", "Walker",
];

const createRandom = (seed: number) => () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const random = createRandom(42);
const randomInt = (min: number, max: number) =>
    min + Math.floor(random() * (max - min + 1));
const pick = <T>(items: readonly T[]): T => items[randomInt(0, items.length - 1)]!;

const randomPassword = (length = 12) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length }, () => pick([...chars])).join("");
};

const generateUser = (index: number): User => {
    const gender: Gender = random() < 0.5 ? "male" : "female";
    const firstName = pick(gender === "male" ? MALE_NAMES : FEMALE_NAMES);
    const lastName = pick(LAST_NAMES);
    const createdAt = randomInt(START_DATE, END_DATE);
    const updatedAt = randomInt(createdAt, END_DATE);

    return {
        id: String(index),
        name: `${firstName} ${lastName}`,
        age: randomInt(18, 80),
        gender,
        email: `${firstName}.${lastName}${index}@example.com`.toLowerCase(),
        password: randomPassword(),
        createdAt: new Date(createdAt).toISOString(),
        updatedAt: new Date(updatedAt).toISOString(),
    };
};

const john: User = {
    id: "1",
    name: "John Doe",
    age: 36,
    gender: "male",
    email: "john.doe@example.com",
    password: "password",
    createdAt: "2026-10-20T13:26:08.111Z",
    updatedAt: "2026-10-20T13:26:08.111Z",
};

export const usersSeed: User[] = [
    john,
    ...Array.from({ length: USERS_COUNT - 1 }, (_, i) => generateUser(i + 2)),
];
