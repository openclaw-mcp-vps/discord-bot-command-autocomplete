export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Discord Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Smart Autocomplete for{" "}
          <span className="text-[#58a6ff]">Discord Bot Commands</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing command syntax. Get intelligent suggestions based on your server&apos;s bots,
          your permissions, and your usage history — all in one slick command palette.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Instant access after payment.</p>

        {/* Mock command palette */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-left shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#58a6ff] font-mono text-sm">/</span>
            <span className="font-mono text-sm text-white">play lo-fi beats</span>
            <span className="ml-auto text-xs text-[#6e7681]">Rythm Bot</span>
          </div>
          <ul className="space-y-2">
            {[
              { cmd: "/play", desc: "Play a song or playlist", bot: "Rythm" },
              { cmd: "/playlist", desc: "Manage saved playlists", bot: "Rythm" },
              { cmd: "/poll", desc: "Create a quick poll", bot: "Carl-bot" }
            ].map((item) => (
              <li
                key={item.cmd}
                className="flex items-center justify-between bg-[#0d1117] rounded-lg px-4 py-2 border border-[#21262d]"
              >
                <span className="font-mono text-[#58a6ff] text-sm">{item.cmd}</span>
                <span className="text-xs text-[#8b949e] hidden sm:block">{item.desc}</span>
                <span className="text-xs bg-[#21262d] text-[#6e7681] px-2 py-0.5 rounded">{item.bot}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$15</p>
          <p className="text-sm text-[#6e7681] mb-6">per month</p>
          <ul className="text-sm text-[#8b949e] space-y-2 mb-8 text-left">
            {[
              "Unlimited server connections",
              "Permission-aware suggestions",
              "Command history & favorites",
              "All future updates included"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which Discord bots are supported?",
              a: "We support all bots that register slash commands with Discord's API, including Rythm, Carl-bot, MEE6, Dyno, and hundreds more."
            },
            {
              q: "Do I need to give the app admin permissions?",
              a: "No. We only request read-only OAuth scopes to list your servers and available commands. We never post messages on your behalf."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-[#21262d] pb-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Discord Bot Command Autocomplete. Not affiliated with Discord Inc.
      </footer>
    </main>
  );
}
