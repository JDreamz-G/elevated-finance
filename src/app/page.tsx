"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, TrendingUp, GraduationCap, Shield, ArrowRight, Sparkles, Coins, LineChart } from "lucide-react";
import Image from "next/image";

const Logo = () => (
  <div className="flex items-center gap-2">
    <Image src="/ef-logo.png" alt="Elevated Finance" width={140} height={40} />
  </div>
);

export default function ElevatedFinanceLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-[#143C8C] transition">Features</a>
            <a href="#how" className="hover:text-[#143C8C] transition">How it Works</a>
            <a href="#pricing" className="hover:text-[#143C8C] transition">Pricing</a>
            <a href="#faq" className="hover:text-[#143C8C] transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0FF] via-transparent to-white pointer-events-none"/>
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E6F0FF] px-3 py-1 text-xs text-[#143C8C] mb-4">
              <Sparkles className="h-3 w-3"/> New • Student-friendly investing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              Learn. Invest. <span className="text-[#143C8C]">Grow.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Elevated Finance helps beginners build money confidence with bite‑size lessons and automated investing powered by modern Wealth‑as‑a‑Service rails.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button>Start free</Button>
              <Button variant="outline" className="gap-1">
                Watch demo <ArrowRight className="h-4 w-4"/>
              </Button>
              <div className="text-xs text-slate-500">No card required • Cancel anytime</div>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#143C8C]"/> KYC & compliance handled</div>
              <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-[#143C8C]"/> Fractional shares</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border bg-white shadow-xl p-4">
              <div className="rounded-xl bg-[#E6F0FF] h-56 w-full" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["VOO","VIG","AAPL"].map((t,i)=> (
                  <Card key={i} className="rounded-2xl shadow-sm">
                    <CardContent className="p-4">
                      <div className="text-xs text-slate-500">Holding</div>
                      <div className="font-semibold">{t}</div>
                      <div className="mt-2 flex items-center gap-1 text-emerald-600 text-sm"><TrendingUp className="h-4 w-4"/> +3.2%</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Why Elevated Finance?</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Designed for students and busy beginners. Learn the essentials, automate the rest, and track your progress with clarity.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: GraduationCap, title: "Bite‑size Lessons", desc: "Plain‑English modules that fit your schedule." },
            { icon: LineChart, title: "Automated Investing", desc: "Put your plan on autopilot with fractional shares." },
            { icon: Shield, title: "Bank‑grade Compliance", desc: "ID verification and custody through vetted partners." },
          ].map((f, i)=> (
            <Card key={i} className="rounded-2xl border shadow-sm">
              <CardContent className="p-6">
                <f.icon className="h-6 w-6 text-[#143C8C]"/>
                <div className="mt-3 font-semibold">{f.title}</div>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="how" className="bg-[#F7FAFF] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              step:"1. Sign up",
              text:"Create your account and verify your ID in minutes."
            },{
              step:"2. Learn & choose",
              text:"Complete quick lessons and pick a goal: growth, dividends, or balanced."
            },{
              step:"3. Automate",
              text:"Link your bank, set an amount, and let fractional investing run."
            }].map((s,i)=> (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-[#143C8C]">{s.step}</div>
                  <p className="mt-2 text-slate-700">{s.text}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500"><Check className="h-4 w-4 text-emerald-600"/> No hidden fees</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Simple pricing</h2>
        <p className="mt-2 text-slate-600">Start free. Upgrade when you want more power.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl border shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm font-semibold text-[#143C8C]">Free</div>
              <div className="mt-2 text-4xl font-bold">$0</div>
              <p className="mt-2 text-slate-600">Lessons, basic tracker, paper trading.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Core lessons</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Watchlists</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Email tips</li>
              </ul>
              <Button variant="outline" className="mt-6 w-full">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-2 border-[#143C8C] shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-[#143C8C]">Premium</div>
                <div className="inline-flex items-center gap-1 rounded-full bg-[#E6F0FF] px-2 py-1 text-[10px] text-[#143C8C]">
                  <Coins className="h-3 w-3"/> Best value
                </div>
              </div>
              <div className="mt-2 text-4xl font-bold">$4.99<span className="text-base font-medium text-slate-500">/mo</span></div>
              <p className="mt-2 text-slate-600">Automation, real portfolios, advanced insights.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Automated deposits</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Fractional shares</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Deeper analytics</li>
              </ul>
              <Button className="mt-6 w-full">Upgrade</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="bg-[#F7FAFF] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-slate-700">
            <div>
              <h3 className="font-semibold">Is this for beginners?</h3>
              <p className="mt-2 text-sm">Yes. Lessons are plain‑English and the app handles the technical parts.</p>
            </div>
            <div>
              <h3 className="font-semibold">How do deposits work?</h3>
              <p className="mt-2 text-sm">Link your bank, choose an amount, and automate weekly or monthly contributions.</p>
            </div>
            <div>
              <h3 className="font-semibold">Are there hidden fees?</h3>
              <p className="mt-2 text-sm">No. Pricing is transparent and you can cancel anytime.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do I need prior investing knowledge?</h3>
              <p className="mt-2 text-sm">No. You’ll learn while you build your first portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl bg-gradient-to-br from-[#143C8C] to-[#0f2e6b] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Ready to elevate your money?</h3>
              <p className="mt-2 text-white/80">Start free today — build habits that last a lifetime.</p>
            </div>
            <Button className="bg-white text-[#143C8C] hover:bg-slate-100">Create your account</Button>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Elevated Finance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
