"use client"

import { useRef, useEffect } from "react"

export function CloudParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let w = (canvas.width = container.offsetWidth)
    let h = (canvas.height = container.offsetHeight)

    const img = new Image()
    img.src = "/cloud-particle.png"

    const particles: {
      x: number
      y: number
      w: number
      h: number
      vx: number
      vy: number
      scale: number
      opacity: number
      rotation: number
      vRotation: number
      depth: number
      reset: (initial?: boolean) => void
      update: () => void
      draw: (mx: number, my: number) => void
    }[] = []

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    let isVisible = true

    class Particle {
      x = 0
      y = 0
      w = 0
      h = 0
      vx = 0
      vy = 0
      scale = 0
      opacity = 0
      rotation = 0
      vRotation = 0
      depth = 0

      reset(initial = false) {
        this.scale = Math.random() * 9.2 + 5.6
        this.w = 512 * this.scale
        this.h = 512 * this.scale
        this.x = initial ? Math.random() * (w + this.w) - this.w : -this.w
        this.y = Math.random() * (h - this.h * 0.4) - this.h * 0.3
        this.vx = Math.random() * 5
        this.vy = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.2 + 0.1
        this.rotation = Math.random() * Math.PI * 2
        this.vRotation = (Math.random() - 0.5) * 15e-5
        this.depth = Math.random() * 0.4 + 0.6
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.rotation += this.vRotation
        if (this.x > w) this.reset()
      }

      draw(mx: number, my: number) {
        if (!ctx) return
        ctx.save()
        ctx.globalAlpha = this.opacity
        const cx = this.x + this.w / 2 + mx * this.depth
        const cy = this.y + this.h / 2 + my * this.depth
        ctx.translate(cx, cy)
        ctx.rotate(this.rotation)
        ctx.drawImage(img, -this.w / 2, -this.h / 2, this.w, this.h)
        ctx.restore()
      }
    }

    for (let i = 0; i < 7; i++) {
      const p = new Particle()
      p.reset(true)
      particles.push(p)
    }

    const animate = () => {
      if (!isVisible) return
      ctx!.clearRect(0, 0, w, h)
      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05
      for (const p of particles) {
        p.update()
        p.draw(mouseX, mouseY)
      }
      animId = requestAnimationFrame(animate)
    }

    img.onload = () => { animate() }

    const onMouse = (e: MouseEvent) => {
      targetX = ((e.clientX / window.innerWidth) - 0.5) * -50
      targetY = ((e.clientY / window.innerHeight) - 0.5) * -50
    }

    const onResize = () => {
      if (!container || !canvas) return
      w = canvas.width = container.offsetWidth
      h = canvas.height = container.offsetHeight
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isVisible = entry.isIntersecting
          if (isVisible) animate()
          else cancelAnimationFrame(animId)
        }
      },
      { threshold: 0.05 },
    )

    window.addEventListener("mousemove", onMouse, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })
    observer.observe(container)
    onResize()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("mousemove", onMouse)
      window.removeEventListener("resize", onResize)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 size-full select-none overflow-hidden"
    >
      <canvas ref={canvasRef} className="size-full opacity-80" />
    </div>
  )
}
