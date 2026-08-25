import Image from "next/image"

interface FooterProps {
  setPage: (page: string) => void
}

export function Footer({ setPage }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const links = {
    company: [
      { label: "Home", page: "home" },
      { label: "About", page: "about" },
      { label: "Services", page: "services" },
      { label: "Contact", page: "contact" },
    ],
    services: [
      "Managed IT",
      "Cybersecurity",
      "Cloud Solutions",
      "Backup & Recovery",
    ],
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LW-UtQ9c5lOkZfjh8QTVf1TE2HXCs1kBj.png"
                alt="LongWave Technologies"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <span className="font-bold text-lg text-foreground">Long</span>
                <span className="font-bold text-lg text-primary">Wave</span>
                <span className="block text-xs text-muted-foreground tracking-wider">
                  TECHNOLOGIES
                </span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm mb-4">
              Riding the Future of IT. We provide reliable managed IT services and
              cybersecurity solutions for businesses of all sizes.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Riding the Future of IT
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => setPage(link.page)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {links.services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} LongWave Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
