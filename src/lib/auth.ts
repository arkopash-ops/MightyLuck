import { seedUsers } from "@/data/user";
import { User } from "@/types/user";

const USERS_KEY = "ml_users";

function getUsers(): User[] {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(USERS_KEY);
    if (!stored) {
        localStorage.setItem(USERS_KEY, JSON.stringify(seedUsers));
        return seedUsers as User[];
    }
    return JSON.parse(stored);
}

export function login(email: string, password: string): User | null {
    return getUsers().find((u) => u.email === email && u.password === password) ?? null;
}

export function signup(data: User): User | null {
    const users = getUsers();
    if (users.find((u) => u.email === data.email)) return null;
    users.push(data);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return data;
}
