"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Target, Users, Clock, Award } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function About() {
  const values = [
    {
      icon: Target,
      title: "Proactive Approach",
      description:
        "We identify and resolve issues before they impact your business, minimizing downtime and maximizing productivity.",
    },
    {
      icon: Users,
      title: "Partnership Focus",
      description:
        "We build lasting relationships with our clients, becoming an extension of your team rather than just a vendor.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Our dedicated support team is available around the clock to ensure your systems run smoothly at all times.",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "With years of experience across various industries, we bring proven solutions tailored to your specific needs.",
    },
  ]

  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            About <span className="text-primary">LongWave</span> Technologies
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-3xl mx-auto text-muted-foreground text-lg"
          >
            LongWave Technologies provides dependable managed IT and cybersecurity
            services focused on long-term partnerships. We prioritize reliability,
            security, and proactive support to keep your business running smoothly.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <motion.div variants={fadeUp} className="p-6">
            <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">99.9%</p>
            <p className="text-muted-foreground">Uptime Guarantee</p>
          </motion.div>
          <motion.div variants={fadeUp} className="p-6">
            <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">24/7</p>
            <p className="text-muted-foreground">Support Available</p>
          </motion.div>
          <motion.div variants={fadeUp} className="p-6">
            <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Endpoints Managed</p>
          </motion.div>
        </motion.div>

        {/* About the Founder */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-24 grid lg:grid-cols-5 gap-12 items-center"
        >
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border border-border">
              <Image
                src="/founder.jpg"
                alt="Portrait of the founder of LongWave Technologies"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-3">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-balance">
              About the <span className="text-primary">Founder</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              With over a decade of hands-on technology experience, I began my IT
              journey building computers at age 16 and later served in Information
              Technology while in the military. Throughout my career, I&apos;ve
              designed, implemented, and managed business technology environments
              ranging from small organizations to large enterprise-level operations.
              I&apos;ve also led the development of an internal IT department from the
              ground up, giving me firsthand experience with the challenges businesses
              face every day. My goal is simple: provide reliable, secure, and
              forward-thinking IT solutions that allow clients to focus on running
              their business while I handle the technology.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
