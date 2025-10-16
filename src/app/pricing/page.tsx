import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="mt-2 text-slate-600">Choose the plan that fits you best.</p>
      <div className="mt-6 grid gap-4">
        <div className="rounded-2xl border p-4">
          <h2 className="font-semibold">Free</h2>
          <p className="text-slate-600 text-sm">Lessons, tracker, paper trading.</p>
          <Link href="/signup"><button className="mt-3 px-4 py-2 rounded-2xl border">Get Started</button></Link>
        </div>
        <div className="rounded-2xl border-2 border-[#143C8C] p-4">
          <h2 className="font-semibold">Premium</h2>
          <p className="text-slate-600 text-sm">Automation, fractional, analytics.</p>
          <Link href="/upgrade"><button className="mt-3 px-4 py-2 rounded-2xl bg-[#143C8C] text-white">Upgrade</button></Link>
        </div>
      </div>
    </main>
  );
}
