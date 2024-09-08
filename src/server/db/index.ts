import { drizzle } from "drizzle-orm/d1";
import { D1Database } from "@cloudflare/workers-types";
import * as schema from "./schema";

let db: ReturnType<typeof drizzle> | null = null;

export function getDb(database?: D1Database) {
    if (!db) {
        if (!database) {
            throw new Error("Database connection not available");
        }
        db = drizzle(database, { schema });
    }
    return db;
}
