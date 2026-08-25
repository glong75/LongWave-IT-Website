"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Monitor, Cloud, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

interface HeroProps {
  setPage: (page: string) => void
}

export function Hero({ setPage }: HeroProps) {
  const services = [
    { icon: Shield, label: "Cybersecurity" },
    { icon: Monitor, label: "Managed IT" },
    { icon: Cloud, label: "Backup & Recovery" },
    { icon: Headphones, label: "Support" },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div
            variants={fadeUp}
            className="mb-6 -mt-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LW-UtQ9c5lOkZfjh8QTVf1TE2HXCs1kBj.png"
              alt="LongWave Technologies — Riding the Future of IT"
              width={420}
              height={420}
              className="object-contain w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] [mask-image:radial-gradient(circle_at_center,black_60%,transparent_82%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_60%,transparent_82%)]"
              priority
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6"
          >
            <span className="text-foreground">Riding the </span>
            <span className="text-primary">Future of IT</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-muted-foreground text-lg leading-relaxed text-pretty mb-10"
          >
            Reliable, proactive IT solutions built for long-term success. We partner with
            businesses to deliver enterprise-grade security and support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-16">
            <Button size="lg" onClick={() => setPage("contact")}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => setPage("services")}>
              View Services
            </Button>
          </motion.div>

          {/* Service Icons */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 w-full"
          >
            {services.map((service) => (
              <motion.div
                key={service.label}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="p-4 rounded-xl border border-border bg-card/50 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
