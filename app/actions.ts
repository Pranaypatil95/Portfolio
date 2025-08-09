"use server"

type State = {
  ok: boolean
  message: string
}

export async function sendContact(prevState: State, formData: FormData): Promise<State> {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const message = String(formData.get("message") || "").trim()

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill out all fields." }
  }

  // Basic email shape check
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    return { ok: false, message: "Please enter a valid email address." }
  }

  // Simulate sending or log to server. Replace with an integration (email API, DB) when ready.
  console.log("New contact submission:", { name, email, message, at: new Date().toISOString() })

  // Pretend we sent it successfully
  return { ok: true, message: "Thanks! I’ll get back to you within 24 hours." }
}
