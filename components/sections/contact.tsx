"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = `mailto:info@longwavetech.net?subject=Contact from ${formData.name}&body=${formData.message}`
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@longwavetech.net",
      href: "mailto:info@longwavetech.net",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(910) 250-8347",
      href: "tel:+19102508347",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Serving clients nationwide",
      href: null,
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
            Get in <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            Ready to transform your IT infrastructure? Contact us today for a free
            consultation and discover how we can help your business thrive.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your IT needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20"
            >
              <h3 className="text-xl font-semibold mb-3">Why Choose LongWave?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Proactive monitoring and maintenance</li>
                <li>Rapid response times and dedicated support</li>
                <li>Transparent pricing with no hidden fees</li>
                <li>Customized solutions for your business</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
