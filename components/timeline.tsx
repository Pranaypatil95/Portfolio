import { Badge } from "@/components/ui/badge"
import { Medal, Briefcase } from 'lucide-react'
import { cn } from "@/lib/utils"

export type TimelineItem = {
  title: string
  org: string
  date: string
  description: string
  icon?: "work" | "cert"
}

type Props = {
  items?: TimelineItem[]
  className?: string
}

export default function Timeline({
  items = [
    {
      title: "Role",
      org: "Company",
      date: "2020 — Now",
      description: "Impact and responsibilities.",
      icon: "work",
    },
  ],
  className = "",
}: Props = {
  items: [
    {
      title: "Role",
      org: "Company",
      date: "2020 — Now",
      description: "Impact and responsibilities.",
      icon: "work",
    },
  ],
  className: "",
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-sky-200 via-white to-violet-200" aria-hidden />
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="relative pl-10">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-white border border-sky-200 shadow-sm" />
            <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-white/80 text-slate-700 border-white/80">
                    {item.icon === "cert" ? (
                      <span className="inline-flex items-center gap-1">
                        <Medal className="h-3.5 w-3.5 text-violet-600" />
                        Certification
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5 text-sky-600" />
                        Experience
                      </span>
                    )}
                  </Badge>
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                </div>
                <div className="text-xs text-slate-500">{item.date}</div>
              </div>
              <div className="mt-1 text-sm text-slate-500">{item.org}</div>
              <p className="mt-2 text-slate-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
