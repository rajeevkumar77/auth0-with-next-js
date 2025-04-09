// "use client";
import { auth0 } from "@/lib/auth0";
import './globals.css';
import SendMailOnce from "./components/SendMailOnce";
export default async function Home() {
  const session = await auth0.getSession();
  const accessToken = session ? await auth0.getAccessToken(): ""

  if (!session) {
    return (
      <main className="flex flex-col gap-3 justify-center items-center min-h-screen">
        <h4 className="text-4xl">Demo App</h4>
        <a href="/auth/login?screen_hint=signup" style={{ cursor: "pointer" }} className="bg-blue-500 flex  gap-3 justify-center items-center w-[15%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <>Login</>
        </a>
      </main>
    );
  }


  return (
    <main className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <h1 className="text-4xl">Welcome, {session.user.name}!</h1>
    <SendMailOnce user={session.user} token={accessToken} />
    </main>
  );
}