import { isInDevelopment } from "@/lib/constants";

export default function About() {
  return (
    <main className="flex min-h-svh w-full flex-col items-center justify-center text-3xl md:px-64">
      {isInDevelopment ? (
        <div className="flex min-h-[30rem] w-full flex-col items-center justify-start rounded-3xl bg-white shadow-large">
          <h1 className="my-5">Haqqımda</h1>
        </div>
      ) : (
        <div className="py-32">
          <p className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text py-32 text-4xl text-transparent md:text-5xl">
            Coming Soon
          </p>
        </div>
      )}
    </main>
  );
}
