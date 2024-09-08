import type { NextRequest } from 'next/server'
import { fetchUsers } from '@/server/db/operations'
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { env } = getRequestContext();
    const allUsers = await fetchUsers(env.DATABASE)
    return new Response(JSON.stringify(allUsers), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error fetching users:', error)
    return new Response('Error fetching users', { status: 500 })
  }
}
