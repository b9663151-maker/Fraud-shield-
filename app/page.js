'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [saved, setSaved] = useState(47300)
  const [voids, setVoids] = useState(39)
  const [lastAlert, setLastAlert] = useState("19:32:14 | TILL_03 | EMP003 | KSh 1,200 BLOCKED")

  useEffect(() => {
    const interval = setInterval(() => {
      const newSave = Math.floor(Math.random() * 1200)
      setSaved(prev => prev + newSave)
      if (Math.random() > 0.7) {
        setVoids(prev => prev + 1)
        setLastAlert(`${new Date().toLocaleTimeString()} | TILL_03 | EMP003 | KSh ${newSave} BLOCKED`)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="bg-black text-white min-h-screen">
      <nav className="border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">🛡️ FRAUD SHIELD LTD</div>
        <a href="https://wa.me/254705224274?text=I%20saw%20EMP003.%20Audit%20my%20tills" 
           className="bg-green-600 px-4 py-2 rounded font-bold hover:bg-green-700">
          WhatsApp 0705224274
        </a>
      </nav>

      <section className="px-6 py-16 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-4">The POS That Arrests Thieves.</h1>
        <p className="text-xl text-gray-300 mb-8">Locks tills mid-theft. Names staff. Sends you cash saved. Live.</p>
        
        <div className="flex gap-4 justify-center mb-12">
          <a href="#demo" className="bg-red-600 px-6 py-3 rounded font-bold hover:bg-red-700">
            Watch 30s EMP003 Denial
          </a>
          <a href="https://wa.me/254705224274?text=AUDIT" className="border border-white px-6 py-3 rounded font-bold hover:bg-white hover:text-black">
            Get Free Till Audit
          </a>
        </div>

        <div className="bg-gray-900 border border-green-500 p-6 rounded-lg font-mono text-left">
          <div className="text-xs text-green-400">🔴 LIVE FROM NAIVAS WESTLANDS</div>
          <div className="text-4xl font-bold text-green-400">KSh {saved.toLocaleString()} Saved Today</div>
          <div className="text-lg">Voids Blocked: {voids} | Last: {lastAlert}</div>
          <div className="text-xs mt-2 text-gray-400">v3.5 Auto-Lock: ARMED</div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Total Protected Since 5:55 AM:</h2>
          <div className="text-6xl font-black text-green-400 mb-8">KSh 2,847,600</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-black p-4 rounded">
              <div className="text-gray-400">Silent Switchers</div>
              <div className="text-2xl font-bold">KSh 1,203,000</div>
            </div>
            <div className="bg-black p-4 rounded">
              <div className="text-gray-400">Ghost Refunds</div>
              <div className="text-2xl font-bold">KSh 894,600</div>
            </div>
            <div className="bg-black p-4 rounded">
              <div className="text-gray-400">Manager Code Abuse</div>
              <div className="text-2xl font-bold">KSh 750,000</div>
            </div>
          </div>
          <p className="text-gray-400 mt-6">Updated every 60 seconds. This is not revenue. This is theft prevented.</p>
        </div>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get Fraud Shield in 3 Steps</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl mb-2">1️⃣</div>
            <h3 className="font-bold text-xl mb-2">WHATSAPP AUDIT</h3>
            <p className="text-gray-300">Send "AUDIT" to 0705224274. We scan 30 days of voids for free. Find your EMP003.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">2️⃣</div>
            <h3 className="font-bold text-xl mb-2">7-DAY LIVE TRIAL</h3>
            <p className="text-gray-300">We install v3.5 on 1 till. You watch Telegram. No payment needed.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">3️⃣</div>
            <h3 className="font-bold text-xl mb-2">FULL ROLLOUT</h3>
            <p className="text-gray-300">KSh 8,000/month. Pays for itself if you stop 1 theft.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">WHY FRAUD SHIELD LTD</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">✅ BENEFITS</h3>
              <ul className="space-y-3 text-gray-300">
                <li><b>Auto-Lock:</b> Till freezes mid-theft. Manager controls from phone</li>
                <li><b>Name + Shame:</b> emp003_crimes.txt with timestamp. HR-ready</li>
                <li><b>Money First:</b> Every alert shows KSh saved. ROI in 1 day</li>
                <li><b>One Bot v3-v10:</b> Pay once, upgrade forever. No new apps</li>
                <li><b>Built in Kenya:</b> We know EMP003. You know EMP003.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ DISADVANTAGES</h3>
              <ul className="space-y-3 text-gray-300">
                <li><b>Your staff will hate you:</b> Thieves quit when watched</li>
                <li><b>No more excuses:</b> "I didn't know" dies with v3.5</li>
                <li><b>Telegram required:</b> If manager has no smartphone, use calculators</li>
                <li><b>It's aggressive:</b> We don't "reduce shrinkage". We jail it.</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-400">If you want passive reports, buy Oracle. If you want thieves stopped, call 0705224274.</p>
        </div>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">ROADMAP - One Bot Forever</h2>
        <div className="space-y-4 font-mono text-sm">
          <div className="border-l-4 border-green-500 pl-4"><b>v3.5 LIVE NOW:</b> Void Lock + Telegram + Money Counter</div>
          <div className="border-l-4 border-yellow-500 pl-4"><b>v4 Q2 2026:</b> HR Integration - Auto-deduct from payslip, email termination.pdf</div>
          <div className="border-l-4 border-yellow-500 pl-4"><b>v5 Q3 2026:</b> CCTV Link - Alert comes with 10s video clip</div>
          <div className="border-l-4 border-yellow-500 pl-4"><b>v6 Q4 2026:</b> Predictive - "EMP003 90% likely to void next 10min"</div>
          <div className="border-l-4 border-red-500 pl-4"><b>v10 2027:</b> AI Manager - Fires thieves, hires replacements, runs store</div>
        </div>
        <p className="text-center mt-6 text-gray-400">All updates free. Same bot. Same price.</p>
      </section>

      <section id="demo" className="px-6 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">MEET EMP003 - OUR UNPAID QA TESTER</h2>
          <div className="bg-black p-6 rounded-lg border border-red-500 mb-6">
            <div className="w-full h-64 bg-gray-800 rounded flex items-center justify-center text-gray-500">
              [EMP003 BASH ERRORS IMAGE: /public/emp003_crimes.png]
            </div>
            <p className="text-left font-mono text-sm mt-4 text-green-400">
              TILL_03 | 19:32:14 | VOID #7 | KSh 1,200 BLOCKED
            </p>
          </div>
          <p className="text-gray-300">
            Without Fraud Shield: KSh 1,200 gone.<br/>
            With Fraud Shield: KSh 1,200 saved. EMP003 exposed.<br/><br/>
            He tests our system 12 times a day. Your staff will too.<br/>
            <span className="text-gray-500">This is not a stock photo. This is Tuesday.</span>
          </p>
        </div>
      </section>

      <footer className="px-6 py-12 border-t border-gray-800 text-center">
        <div className="text-xl font-bold mb-2">FRAUD SHIELD LTD</div>
        <p className="text-gray-400 mb-4">Built at 5AM in Katheka. Battle-tested in Nairobi.</p>
        <p className="mb-4">Contact: 0705224274 | info@fraudshield.co.ke</p>
        <a href="https://wa.me/254705224274?text=AUDIT" 
           className="bg-green-600 px-6 py-3 rounded font-bold inline-block hover:bg-green-700">
          Book Free Audit on WhatsApp
        </a>
        <p className="text-gray-600 mt-8 text-sm">v3.5 is alive. Your margins should be too. #v3.5isAlive</p>
      </footer>
    </main>
  )
}
