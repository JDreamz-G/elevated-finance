// New home page for Elevated Finance
// This file is used to replace the existing src/app/page.tsx in the GitHub repository.
// It provides a simplified layout with working navigation buttons and sections.
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      {/* Header with navigation */}
      <header className="border-b">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="text-xl font-bold text-[#143C8C]">
            Elevated Finance
          </div>
          <div className="hidden space-x-6 md:flex text-sm text-slate-600">
            <a href="#features" className="hover:text-[#143C8C]">Features</a>
            <a href="#how" className="hover:text-[#143C8C]">How it works</a>
            <a href="#pricing" className="hover:text-[#143C8C]">Pricing</a>
            <a href="#faq" className="hover:text-[#143C8C]">FAQ</a>
          </div>
          <div className="flex space-x-2">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero section */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-[#143C8C]">
          Invest smarter, learn faster
        </h1>
        <p className="mt-4 text-slate-600">
          Your journey to financial freedom starts here.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/signup">
            <Button>Start free</Button>
          </Link>
          <Link href="/demo">
            <Button variant="outline" className="gap-1">
              Watch demo <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="bg-[#F7FAFF] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#143C8C]">
            Features
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent>
                <h3 className="mb-2 text-xl font-semibold">Learn by doing</h3>
                <p className="text-sm text-slate-600">
                  Interactive lessons integrated with investing tasks help you
                  understand concepts as you invest.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="mb-2 text-xl font-semibold">Automated investing</h3>
                <p className="text-sm text-slate-600">
                  Set your goals and let our automation invest in ETFs and
                  fractional shares on your behalf.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="mb-2 text-xl font-semibold">Track your progress</h3>
                <p className="text-sm text-slate-600">
                  See your portfolio grow over time, earn badges, and stay
                  motivated with personalized insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section id="how" className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#143C8C]">
            How it works
          </h2>
          <ol className="space-y-6 text-left">
            <li>
              <span className="font-semibold text-[#143C8C]">
                1. Sign up:&nbsp;
              </span>
              Create your account in minutes and complete basic verification.
            </li>
            <li>
              <span className="font-semibold text-[#143C8C]">
                2. Learn:&nbsp;
              </span>
              Take bite‑sized lessons and quizzes to build a foundation in
              finance and investing.
            </li>
            <li>
              <span className="font-semibold text-[#143C8C]">
                3. Invest:&nbsp;
              </span>
              Choose a goal (growth, dividends, or balanced) and let our
              system invest automatically.
            </li>
            <li>
              <span className="font-semibold text-[#143C8C]">
                4. Track:&nbsp;
              </span>
              Monitor your returns and progress; adjust contributions anytime.
            </li>
          </ol>
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="bg-[#F7FAFF] py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-[#143C8C]">Pricing</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold">Free</h3>
                <p className="mt-2 text-slate-600 text-sm">
                  Access lessons, portfolio tracking, and paper trading.
                </p>
                <Link href="/signup">
                  <Button variant="outline" className="mt-6 w-full">
                    Get started
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#143C8C]">
              <CardContent>
                <h3 className="text-xl font-semibold">Premium</h3>
                <p className="mt-2 text-slate-600 text-sm">
                  Unlock automation, fractional investing, and in‑depth
                  analytics.
                </p>
                <Link href="/upgrade">
                  <Button className="mt-6 w-full">Upgrade</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section id="faq" className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#143C8C]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="rounded-xl border p-4">
              <summary className="cursor-pointer font-medium text-[#143C8C]">
                Is Elevated Finance free to use?
              </summary>
              <p className="mt-2 text-slate-600">
                Yes, you can start learning and paper trading for free. Our
                premium plan unlocks automation and advanced analytics.
              </p>
            </details>
            <details className="rounded-xl border p-4">
              <summary className="cursor-pointer font-medium text-[#143C8C]">
                What investments do you support?
              </summary>
              <p className="mt-2 text-slate-600">
                We support fractional shares of major ETFs and stocks
                through our brokerage partner. More assets are coming soon.
              </p>
            </details>
            <details className="rounded-xl border p-4">
              <summary className="cursor-pointer font-medium text-[#143C8C]">
                Can I cancel my subscription anytime?
              </summary>
              <p className="mt-2 text-slate-600">
                Absolutely. You can switch between free and premium plans or
                cancel at any time from your dashboard.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="bg-[#143C8C] py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Ready to get started?
        </h2>
        <p className="mb-6 text-white">
          Create your account and start your investing journey today.
        </p>
        <Link href="/signup">
          <Button className="bg-white text-[#143C8C] hover:bg-slate-100">
            Create your account
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2e6b] py-8 text-center text-sm text-white">
        © {new Date().getFullYear()} Elevated Finance. All rights reserved.
      </footer>
    </>
  );
}