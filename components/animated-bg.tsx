"use client"

import { useEffect, useRef } from "react"

type AnimatedBgProps = {
  density?: number
  dotColor?: string
  lineColor?: string
  speed?: number
}

export default function AnimatedBg({
  density = 0.8,
  dotColor = "rgba(100,116,139,0.18)",
  lineColor = "rgba(125,211,252,0.22)",
  speed = 0.4,
}: AnimatedBgProps = {
  density: 0.8,
  dotColor: "rgba(100,116,139,0.18)",
  lineColor: "rgba(125,211,252,0.22)",
  speed: 0.4,
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const requestRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1

    type P = { x: number; y: number; vx: number; vy: number }
    let points: P[] = []
    const mouse = { x: -1000, y: -1000 }

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      init()
    }

    const init = () => {
      const count = Math.max(40, Math.floor((width * height) / (12000 / Math.max(0.2, density))))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // draw connections
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        for (let j = i + 1; j < points.length; j++) {
          const q = points[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)
          if (dist < 120) {
            const alpha = 1 - dist / 120
            ctx.strokeStyle = lineColor
            ctx.globalAlpha = alpha * 0.8
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1

      // draw dots
      for (const p of points) {
        ctx.fillStyle = dotColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
        ctx.fill()
      }

      // update
      for (const p of points) {
        p.x += p.vx
        p.y += p.vy

        // gentle mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d = Math.hypot(dx, dy)
        if (d < 120) {
          const f = (120 - d) / 120
          p.vx += (dx / (d || 1)) * f * 0.02
          p.vy += (dy / (d || 1)) * f * 0.02
        }

        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10
      }

      requestRef.current = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    resize()
    window.addEventListener("resize", resize)
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mouseleave", onMouseLeave)
    requestRef.current = requestAnimationFrame(draw)

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", onMouseMove)
      canvas.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [density, dotColor, lineColor, speed])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden />
}
