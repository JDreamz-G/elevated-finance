import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-bold">Upgrade to Premium</h1>
      <p className="mt-2 text-slate-600">Unlock automation, fractional shares, and deeper insights.</p>
      <div className="mt-6">
        <Link href="/pricing">
          <button className="px-4 py-2 rounded-2xl bg-[#143C8C] text-white">See plans</button>
        </Link>
      </div>
    </main>
  );
}
