"use client"

import { motion } from "framer-motion"
import { Check, Server, ShieldCheck, Cloud, HardDriveDownload, Headphones, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

interface ServicesProps {
  setPage: (page: string) => void
}

export function Services({ setPage }: ServicesProps) {
  const services = [
    {
      icon: Server,
      name: "Managed IT",
      description: "End-to-end management of your business technology environment.",
      features: [
        "24/7 System Monitoring",
        "Automated Patching",
        "Help Desk Support",
        "Performance Optimization",
      ],
    },
    {
      icon: ShieldCheck,
      name: "Cybersecurity",
      description: "Layered protection that keeps your data and people secure.",
      features: [
        "Microsoft Defender Management",
        "Huntress EDR Protection",
        "DNS Filtering",
        "Advanced Threat Protection",
      ],
    },
    {
      icon: Cloud,
      name: "Cloud Solutions",
      description: "Modern, scalable cloud infrastructure tailored to your needs.",
      features: [
        "Microsoft 365 Management",
        "Cloud Migration",
        "Identity & Access Management",
        "Secure Remote Access",
      ],
    },
    {
      icon: HardDriveDownload,
      name: "Backup & Recovery",
      description: "Reliable backups and rapid recovery to keep you running.",
      features: [
        "Automated Cloud Backup",
        "Disaster Recovery Planning",
        "Data Retention Policies",
        "Rapid Restore",
      ],
    },
    {
      icon: Network,
      name: "Network Management",
      description: "Fast, secure, and dependable networking for your business.",
      features: [
        "Firewall Configuration",
        "Wi-Fi Design & Deployment",
        "VPN Setup",
        "Network Monitoring",
      ],
    },
    {
      icon: Headphones,
      name: "IT Consulting",
      description: "Strategic guidance to align technology with your goals.",
      features: [
        "Technology Roadmaps",
        "Quarterly Business Reviews",
        "Compliance Assistance",
        "Vendor Management",
      ],
    },
  ]

  const plans = [
    {
      name: "Starter Wave",
      price: "$75",
      period: "/user/month",
      description: "Essential IT management for small teams",
      features: [
        "24/7 System Monitoring",
        "Microsoft Defender Management",
        "DNS Filtering",
        "Automated Patching",
        "Help Desk Support",
      ],
      popular: false,
    },
    {
      name: "Core Wave",
      price: "$100",
      period: "/user/month",
      description: "Comprehensive protection for growing businesses",
      features: [
        "Everything in Starter Wave",
        "Huntress EDR Protection",
        "Priority Support",
        "Performance Optimization",
        "Quarterly Business Reviews",
      ],
      popular: true,
    },
    {
      name: "Tsunami Tier",
      price: "$150",
      period: "/user/month",
      description: "Enterprise-grade security and support",
      features: [
        "Everything in Core Wave",
        "Advanced Threat Protection",
        "Cloud Backup & Recovery",
        "Dedicated Account Manager",
        "Compliance Assistance",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-24">
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
            className="text-3xl sm:text-4xl font-bold mb-4 text-balance"
          >
            Services & <span className="text-primary">Solutions</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-muted-foreground text-lg text-pretty"
          >
            From day-to-day support to long-term strategy, we deliver reliable,
            secure, and forward-thinking IT solutions backed by our commitment to
            exceptional service.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.name} variants={fadeUp}>
              <Card className="relative h-full flex flex-col border-border hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="pb-4">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary w-fit">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Packages */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mt-28 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold mb-4 text-balance"
          >
            Simple, Transparent <span className="text-primary">Pricing</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed text-pretty"
          >
            Choose the plan that fits your business needs. Every package includes our
            commitment to proactive support and exceptional service.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={fadeUp}>
              <Card
                className={`relative h-full flex flex-col ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => setPage("contact")}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We offer tailored packages for unique requirements.
          </p>
          <Button variant="link" onClick={() => setPage("contact")} className="text-primary">
            Contact us for custom pricing
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
