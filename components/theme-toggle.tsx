"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = (mounted ? resolvedTheme : theme) === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {isDark ? <Sun className="h-5 w-5 text-slate-200" /> : <Moon className="h-5 w-5 text-slate-700" />}
    </Button>
  )
}
