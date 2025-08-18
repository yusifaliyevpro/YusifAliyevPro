import type { Session } from "next-auth";

export function checkIsAdmin(session: Session | null): boolean {
  return !!session && session.user?.email === process.env.ADMIN_EMAIL;
}
