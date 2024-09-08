import { getDb } from "./index";
import { users } from "./schema";
import { D1Database } from "@cloudflare/workers-types";

export async function fetchUsers(database?: D1Database) {
    try {
        const db = getDb(database);
        const allUsers = await db.select().from(users);
        return allUsers;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}