import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]"; // Adjust the path if needed
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

export default async function Home() {
  // Fetch the session on the server
  const session = await getServerSession(authOptions);

  // Redirect to login if the user is not authenticated
  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
        Welcome, {user?.name || "User"}!
      </h1>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 text-white bg-blue-500 rounded-md"
      >
        Sign Out
      </button>
    </div>
  );
}
