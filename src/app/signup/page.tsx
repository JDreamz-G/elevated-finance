export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-bold">Create your account</h1>
      <p className="mt-2 text-slate-600">Sign up to start learning and build your first portfolio.</p>
      <form className="mt-6 grid gap-3">
        <input className="border rounded-xl px-3 py-2" placeholder="Full name" />
        <input className="border rounded-xl px-3 py-2" placeholder="Email" />
        <button className="px-4 py-2 rounded-2xl bg-[#143C8C] text-white">Create account</button>
      </form>
    </main>
  );
}
