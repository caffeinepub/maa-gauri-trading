import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  Monitor,
  Phone,
  Star,
} from "lucide-react";
import type { Easing } from "motion/react";
import { motion } from "motion/react";

const WHATSAPP_URL = "https://wa.me/916202819125";
const PHONE_NUMBER = "6202819125";
const TEL_LINK = `tel:${PHONE_NUMBER}`;

const heroPoints = [
  { id: "p1", text: "Ghar banwana ho ya repair – hum kare sab kaam" },
  { id: "p2", text: "Experienced Labour & Mistri Available" },
  { id: "p3", text: "Cement, Sand, Material Supply" },
  { id: "p4", text: "Aadhaar, PAN, Online Work Available" },
];

const services = [
  {
    emoji: "🔨",
    title: "Construction Services",
    subtitle: "Nirman Kaam",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100 text-orange-600",
    items: [
      "Labour Supply",
      "Rajmistri (Mistri)",
      "Full House Construction",
      "Cement, Sand, Material Supply",
    ],
  },
  {
    emoji: "🏡",
    title: "Home Repair Services",
    subtitle: "Ghar Repair",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100 text-blue-700",
    items: [
      "Painting Work",
      "Tile / Marble Fitting",
      "Ghar Repair & Renovation",
    ],
  },
  {
    emoji: "💻",
    title: "Digital Services",
    subtitle: "Online Kaam",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100 text-green-700",
    items: [
      "New Aadhaar Card",
      "Aadhaar Update (Photo, Fingerprint, Mobile, Address, DOB)",
      "PAN Card",
      "Online Form Filling",
      "PVC Aadhaar Card",
      "Voter ID",
      "All Online Work",
    ],
  },
];

const pricing = [
  { label: "1 Room Construction", price: "₹1.5 – ₹2.5 Lakh", popular: false },
  { label: "2 Room Construction", price: "₹3 – ₹5 Lakh", popular: true },
  { label: "Full House", price: "₹5 Lakh+", popular: false },
];

const testimonials = [
  {
    id: "t1",
    text: "Suraj bhai ka kaam bahut accha hai – time pe kaam complete kiya",
    name: "Ramesh Kumar",
    location: "Parsa, Saran",
  },
  {
    id: "t2",
    text: "Sasta aur best service mila – highly recommended",
    name: "Priya Devi",
    location: "Mujauna, Bihar",
  },
  {
    id: "t3",
    text: "Labour aur mistri dono experienced hain",
    name: "Vijay Singh",
    location: "Saran, Bihar",
  },
];

const ease: Easing = "easeOut";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: i * 0.1 },
});

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── STICKY HEADER ── */}
      <header className="sticky top-0 z-50 hero-gradient shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <p className="font-display font-800 text-white text-base sm:text-lg leading-tight tracking-wide">
              MAA GAURI TRADING
            </p>
            <p className="text-orange-200 text-xs hidden sm:block">
              Ghar ka har kaam – ek hi jagah
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={TEL_LINK}
              data-ocid="header.call_button"
              className="flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-3 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              <Phone size={15} />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="header.whatsapp_button"
              className="flex items-center gap-1.5 bg-green-500 text-white text-sm font-semibold px-3 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="hero-gradient relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url(/assets/generated/hero-construction.dim_1200x500.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative max-w-5xl mx-auto px-4 py-14 sm:py-20">
            <motion.div {...fadeUp} className="text-center">
              <Badge className="saffron-gradient text-white border-0 text-xs mb-4 px-3 py-1">
                Bihar Ka Bharosemand Naam
              </Badge>
              <h1 className="font-display font-extrabold text-white text-4xl sm:text-6xl leading-tight mb-3">
                MAA GAURI
                <span className="block text-orange-300">TRADING</span>
              </h1>
              <p className="text-blue-100 text-xl sm:text-2xl font-semibold mb-1">
                Ghar ka har kaam – ek hi jagah
              </p>
              <p className="text-blue-200 text-sm mb-8">
                Every home need, one place
              </p>

              <ul className="inline-flex flex-col gap-2 text-left mb-10">
                {heroPoints.map((point, i) => (
                  <motion.li
                    key={point.id}
                    {...stagger(i)}
                    className="flex items-start gap-2 text-white text-sm sm:text-base"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-orange-300 shrink-0 mt-0.5"
                    />
                    {point.text}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={TEL_LINK}
                  data-ocid="hero.call_button"
                  className="flex items-center justify-center gap-2 saffron-gradient text-white font-bold text-base px-6 py-3.5 rounded-2xl shadow-glow hover:opacity-90 transition-opacity"
                >
                  <Phone size={20} />📞 Call Now: {PHONE_NUMBER}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="hero.whatsapp_button"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-base px-6 py-3.5 rounded-2xl transition-colors"
                >
                  <MessageCircle size={20} />📲 WhatsApp Karo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-14 sm:py-20 px-4 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
                Hamari Services
              </h2>
              <p className="text-muted-foreground mt-1">Our Services</p>
              <div className="w-16 h-1 saffron-gradient mx-auto mt-3 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <motion.div key={svc.title} {...stagger(i)}>
                  <Card
                    className={`card-hover border-2 h-full ${svc.color}`}
                    data-ocid={`services.item.${i + 1}`}
                  >
                    <CardHeader className="pb-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${svc.iconBg}`}
                      >
                        <span className="text-2xl">{svc.emoji}</span>
                      </div>
                      <CardTitle className="font-display text-lg text-foreground">
                        {svc.title}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground font-medium">
                        {svc.subtitle}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1.5">
                        {svc.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-primary shrink-0 mt-0.5"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-14 sm:py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
                Price / Daam
              </h2>
              <p className="text-muted-foreground mt-1">Construction Pricing</p>
              <div className="w-16 h-1 saffron-gradient mx-auto mt-3 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {pricing.map((item, i) => (
                <motion.div key={item.label} {...stagger(i)}>
                  <Card
                    data-ocid={`pricing.item.${i + 1}`}
                    className={`card-hover text-center border-2 ${
                      item.popular
                        ? "border-primary bg-orange-50 shadow-glow"
                        : "border-border"
                    }`}
                  >
                    {item.popular && (
                      <div className="saffron-gradient text-white text-xs font-bold py-1 px-3 rounded-t-lg">
                        ⭐ Most Popular
                      </div>
                    )}
                    <CardContent className="pt-6 pb-6">
                      <p className="text-sm font-semibold text-muted-foreground mb-2">
                        {item.label}
                      </p>
                      <p className="font-display font-extrabold text-2xl sm:text-3xl text-primary">
                        {item.price}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.p
              {...fadeUp}
              className="text-center text-sm text-muted-foreground bg-accent/60 rounded-xl py-3 px-4"
            >
              📞{" "}
              <span className="font-semibold text-foreground">
                Exact estimate ke liye call karein
              </span>{" "}
              — Call for exact estimate
            </motion.p>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-14 sm:py-20 px-4 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
                Customers Ki Baat
              </h2>
              <p className="text-muted-foreground mt-1">What Customers Say</p>
              <div className="w-16 h-1 saffron-gradient mx-auto mt-3 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={t.id} {...stagger(i)}>
                  <Card
                    data-ocid={`testimonials.item.${i + 1}`}
                    className="card-hover border-2 border-border h-full"
                  >
                    <CardContent className="pt-6">
                      <div className="flex mb-3">
                        {["s1", "s2", "s3", "s4", "s5"].map((s) => (
                          <Star
                            key={s}
                            size={16}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-foreground text-sm leading-relaxed mb-4 italic">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full saffron-gradient flex items-center justify-center text-white text-xs font-bold">
                          {t.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {t.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── CONTACT / FOOTER ── */}
      <footer className="hero-gradient py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-1">
              Hamse Sampark Karein
            </h2>
            <p className="text-blue-200 text-sm">Contact Us</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <motion.div
              {...stagger(0)}
              className="bg-white/10 rounded-2xl p-5 text-white space-y-3"
            >
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Address / Pata</p>
                  <p className="text-blue-100 text-sm">
                    Mujauna, Parsa, Saran, Bihar – 841219
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-orange-300 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Timing / Samay</p>
                  <p className="text-blue-100 text-sm">8 AM – 8 PM (Daily)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...stagger(1)}
              className="bg-white/10 rounded-2xl p-5 text-white space-y-3"
            >
              <p className="font-semibold text-sm text-orange-200">
                Direct call karein ya WhatsApp message bhejein
              </p>
              <a
                href={TEL_LINK}
                data-ocid="footer.call_button"
                className="flex items-center gap-2 saffron-gradient text-white font-bold px-4 py-3 rounded-xl hover:opacity-90 transition-opacity w-full justify-center"
              >
                <Phone size={18} />📞 {PHONE_NUMBER}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.whatsapp_button"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 rounded-xl transition-colors w-full justify-center"
              >
                <MessageCircle size={18} />📲 Click to Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          <div className="text-center border-t border-white/20 pt-6">
            <p className="text-blue-200 text-xs">
              © {new Date().getFullYear()} MAA GAURI TRADING — All Rights
              Reserved
            </p>
            <p className="text-blue-300 text-xs mt-1">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING BUTTONS ── */}
      <div className="fixed bottom-5 left-0 right-0 flex justify-between px-4 z-50 pointer-events-none">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="floating.whatsapp_button"
          className="pointer-events-auto flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-4 py-3 rounded-full shadow-lg transition-colors"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>
        <a
          href={TEL_LINK}
          data-ocid="floating.call_button"
          className="pointer-events-auto flex items-center gap-2 saffron-gradient text-white font-bold text-sm px-4 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        >
          <Phone size={20} />
          Call Now
        </a>
      </div>
    </div>
  );
}
