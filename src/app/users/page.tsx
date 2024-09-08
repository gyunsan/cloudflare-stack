import { fetchUsers } from "@/server/db/operations";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge'

export default async function Users() {
    const { env } = getRequestContext();
    const allUsers = await fetchUsers(env.DATABASE).catch(() => []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            {allUsers.length > 0 ? (
                <ul className="space-y-2">
                    {allUsers.map((user) => (
                        <li key={user.id} className="bg-gray-100 p-2 rounded">
                            {user.name || user.email}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">No users found or there was an error fetching users.</p>
            )}
        </div>
    );
}