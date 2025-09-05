import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col bg-gradient-to-br from-purple-600 to-pink-500 text-white md:flex">
        <div className="px-6 py-6 text-2xl font-bold">🔐 CryptoGuard</div>
        <nav className="flex flex-1 flex-col gap-2 px-4">
          <Link
            href="/dashboard"
            className="rounded-lg px-4 py-2 hover:bg-white/10"
          >
            📊 Dashboard
          </Link>
          <Link
            href="/upload"
            className="rounded-lg px-4 py-2 hover:bg-white/10"
          >
            📤 Upload
          </Link>
          <Link
            href="#"
            className="rounded-lg px-4 py-2 hover:bg-white/10"
          >
            🧠 Training
          </Link>
          <Link
            href="#"
            className="rounded-lg px-4 py-2 hover:bg-white/10"
          >
            ⚙️ Settings
          </Link>
        </nav>
        <div className="px-6 py-4 text-sm text-white/80 border-t border-white/20">
          {session?.user?.email}
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 md:p-10">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back,{" "}
              <span className="text-purple-600">
                {session?.user?.name || "User"}
              </span>{" "}
              👋
            </h1>
            <p className="text-gray-600">
              Your account is verified. Ready to analyze cryptographic
              algorithms.
            </p>
          </div>
          <Link
            href="/sign-in"
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-500 shadow"
          >
            Logout
          </Link>
        </header>

        {/* Stats overview */}
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-500">Total Analyses</p>
            <p className="mt-2 text-2xl font-bold">1,247</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-500">Algorithms Detected</p>
            <p className="mt-2 text-2xl font-bold">12+</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-500">Model Accuracy</p>
            <p className="mt-2 text-2xl font-bold text-green-600">94.2%</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-500">Avg Response</p>
            <p className="mt-2 text-2xl font-bold text-blue-600">1.2s</p>
          </div>
        </div>

        {/* Analysis panel */}
        <section className="rounded-2xl border bg-white p-8 shadow">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            🔬 Analysis Panel
          </h2>
          <p className="mb-6 text-gray-600">
            Upload a file or use the upload page to start analysis. Results will
            appear here once the ML model is integrated.
          </p>

          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-gray-500">
            ML integration coming soon…
          </div>
        </section>
      </div>
    </main>
  );
}
