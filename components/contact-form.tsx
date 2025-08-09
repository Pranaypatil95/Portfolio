"use client"

import { useEffect, useRef, useActionState } from "react"
import { useFormStatus } from "react-dom"
import { sendContact } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from "@/lib/utils"

type State = {
  ok: boolean
  message: string
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="bg-sky-600/90 hover:bg-sky-600 text-white" disabled={pending}>
      {pending ? (
        <span className="inline-flex items-center">
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Sending...
        </span>
      ) : (
        "Send Message"
      )}
    </Button>
  )
}

export default function ContactForm() {
  const initialState: State = { ok: false, message: "" }
  const [state, formAction] = useActionState(sendContact, initialState)
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset()
    }
  }, [state.ok])

  return (
    <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-6 shadow-sm">
      <form ref={formRef} action={formAction} className="space-y-4">
        <FloatingField label="Name" name="name" />
        <FloatingField label="Email" name="email" type="email" />
        <FloatingTextArea label="Message" name="message" rows={5} />
        <div className="pt-2 flex items-center gap-3">
          <SubmitButton />
          {state.ok ? (
            <div className="inline-flex items-center text-sm text-emerald-600">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              {state.message || "Message sent. I will reply shortly."}
            </div>
          ) : state.message ? (
            <div className="text-sm text-rose-600">{state.message}</div>
          ) : null}
        </div>
      </form>
    </div>
  )
}

function FloatingField({
  label = "Label",
  name = "field",
  type = "text",
  className = "",
}: {
  label?: string
  name?: string
  type?: string
  className?: string
} = { label: "Label", name: "field", type: "text", className: "" }) {
  return (
    <div className={cn("relative", className)}>
      <Input
        id={name}
        name={name}
        type={type}
        className="peer h-12 rounded-xl bg-white/70 border-white/70 placeholder-transparent focus:bg-white"
        placeholder={label}
        required
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-transparent px-1 text-slate-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  )
}

function FloatingTextArea({
  label = "Message",
  name = "message",
  rows = 5,
  className = "",
}: {
  label?: string
  name?: string
  rows?: number
  className?: string
} = { label: "Message", name: "message", rows: 5, className: "" }) {
  return (
    <div className={cn("relative", className)}>
      <Textarea
        id={name}
        name={name}
        rows={rows}
        className="peer rounded-xl bg-white/70 border-white/70 placeholder-transparent focus:bg-white min-h-[140px]"
        placeholder={label}
        required
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-3 top-4 bg-transparent px-1 text-slate-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  )
}
