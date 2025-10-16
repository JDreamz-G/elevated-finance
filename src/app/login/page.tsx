export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-bold">Log in</h1>
      <p className="mt-2 text-slate-600">This is a placeholder. We can wire real auth later (Clerk/Auth.js).</p>
      <form className="mt-6 grid gap-3">
        <input className="border rounded-xl px-3 py-2" placeholder="Email" />
        <input className="border rounded-xl px-3 py-2" placeholder="Password" type="password" />
        <button className="px-4 py-2 rounded-2xl bg-[#143C8C] text-white">Continue</button>
      </form>
    </main>
  );
}
