import { Send } from 'lucide-react'

export function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/patraksambit2@gmail.com"
      method="POST"
      className="mt-10 grid gap-4 border-t border-hairline pt-8"
    >
      <input type="hidden" name="_subject" value="New portfolio contact" />
      <input type="hidden" name="_template" value="table" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate">
            name
          </span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="border border-hairline bg-surface px-3 py-2.5 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-slate/70 focus:border-cobalt"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate">
            email
          </span>
          <input
            required
            name="_replyto"
            type="email"
            autoComplete="email"
            className="border border-hairline bg-surface px-3 py-2.5 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-slate/70 focus:border-cobalt"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate">
          message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="resize-y border border-hairline bg-surface px-3 py-2.5 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-slate/70 focus:border-cobalt"
          placeholder="Tell me a little about your project..."
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-fit items-center gap-2 bg-cobalt px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-cyan focus:outline-none focus:ring-2 focus:ring-cobalt focus:ring-offset-2 focus:ring-offset-background"
      >
        Send message
        <Send className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </form>
  )
}