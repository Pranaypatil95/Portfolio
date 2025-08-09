import { cn } from "@/lib/utils"

type SectionProps = {
  id?: string
  title?: string
  subtitle?: string
  className?: string
  children?: React.ReactNode
}

export default function Section({
  id = "",
  title = "",
  subtitle = "",
  className = "",
  children = null,
}: SectionProps = {
  id: "",
  title: "",
  subtitle: "",
  className: "",
  children: null,
}) {
  return (
    <section id={id} className={cn("container mx-auto px-4 py-16 md:py-24", className)}>
      {(title || subtitle) && (
        <div className="mb-10">
          {title ? <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{title}</h2> : null}
          {subtitle ? <p className="text-slate-600 mt-2">{subtitle}</p> : null}
        </div>
      )}
      {children}
    </section>
  )
}
