import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  Dumbbell,
  Wind,
  Flame,
  Heart,
  Clock,
  MapPin,
  Phone,
  ChevronDown,
  Star,
  Users,
  Award,
  Menu,
  X,
  Play,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Classes", href: "#classes" },
  { label: "Membership", href: "#pricing" },
  { label: "About Us", href: "#about" },
];

const CLASSES = [
  {
    title: "Flow Yoga",
    tag: "Beginner — Advanced",
    icon: Wind,
    description: "Synchronize breath with movement through vinyasa sequences that build strength and flexibility.",
    time: "Mon / Wed / Fri",
    image: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Power Strength",
    tag: "Intermediate",
    icon: Dumbbell,
    description: "High-intensity resistance training designed to sculpt, strengthen and transform your body.",
    time: "Tue / Thu / Sat",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Mindful Meditation",
    tag: "All levels",
    icon: Heart,
    description: "Guided breathwork and meditation to restore calm, sharpen focus, and reduce stress.",
    time: "Daily at 7am & 7pm",
    image: "https://images.unsplash.com/photo-1554977931-51c624a5798a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "HIIT Burn",
    tag: "Advanced",
    icon: Flame,
    description: "Explosive intervals that maximize caloric burn and push your cardiovascular limits.",
    time: "Mon / Wed / Fri",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

const TRAINERS = [
  {
    name: "Sophia Chen",
    role: "Yoga & Mindfulness",
    years: "8 years",
    image: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    quote: "The mat is a mirror. Every pose reveals something new.",
  },
  {
    name: "Marcus Reid",
    role: "Strength & HIIT",
    years: "11 years",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    quote: "Discipline is the bridge between goals and achievement.",
  },
  {
    name: "Aria Santos",
    role: "Flow & Pilates",
    years: "6 years",
    image: "https://images.unsplash.com/photo-1667061481921-b31e615ae740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    quote: "Movement is medicine. Find yours.",
  },
];

const PLANS = [
  {
    name: "Drop-In",
    price: "$22",
    period: "per class",
    features: ["Single class access", "Mat & equipment included", "Open showers"],
    highlight: false,
  },
  {
    name: "Monthly",
    price: "$89",
    period: "per month",
    features: ["Unlimited classes", "1 personal training session", "App access", "Priority booking"],
    highlight: true,
  },
  {
    name: "Annual",
    price: "$69",
    period: "per month",
    features: ["Everything in Monthly", "4 PT sessions / month", "Nutrition consult", "Guest passes"],
    highlight: false,
  },
];

const TESTIMONIALS = [
  { name: "Jessica M.", text: "YogaEase completely changed my relationship with fitness. The instructors are world-class.", stars: 5 },
  { name: "David K.", text: "Best studio I've ever joined. The community here is warm, encouraging, and incredibly motivating.", stars: 5 },
  { name: "Priya L.", text: "I came for the yoga and stayed for everything else. The HIIT classes are absolutely incredible.", stars: 5 },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0d5bf] text-[#2a1a0e] overflow-x-hidden">

      {/* ── NAVBAR ── */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6">
        <a href="#" className="flex items-center gap-2 font-bold text-[#2a1a0e] text-lg tracking-wide">
          <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a1 1 0 0 1 .894.553l2.618 5.303 5.852.85a1 1 0 0 1 .555 1.705l-4.235 4.127.999 5.826a1 1 0 0 1-1.451 1.054L12 18.902l-5.232 2.75a1 1 0 0 1-1.45-1.054l.998-5.826L2.08 10.41a1 1 0 0 1 .556-1.704l5.852-.851L11.106 2.553A1 1 0 0 1 12 2z"/>
          </svg>
          YOGAEASE
        </a>
        <nav className="hidden md:flex gap-10 items-center">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-[#2a1a0e]/80 hover:text-[#2a1a0e] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="hidden md:flex size-9 items-center justify-center rounded-full border border-[#2a1a0e]/30">
          <Menu className="size-4 text-[#2a1a0e]" />
        </button>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-[#f0d5bf] pt-20 px-8 flex flex-col gap-6"
        >
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-[#2a1a0e] border-b border-[#2a1a0e]/20 pb-4">
              {l.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5c2e0e] text-white text-base font-medium rounded-full">
            Begin Journey <ArrowRight className="size-4" />
          </a>
        </motion.div>
      )}

      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden" style={{background: "radial-gradient(ellipse at 50% 0%, #e8b898 0%, #dfa882 30%, #c8845a 70%, #a8623a 100%)"}}>

        {/* Big stacked text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none"
          style={{paddingTop: "4rem"}}>
          {["WELLNESS", "YOGA", "THROUGH"].map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" as const }}
              className="leading-none text-center text-[#7a3a12]"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(80px, 18vw, 220px)",
                letterSpacing: "-0.01em",
              }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        {/* Stat card — bottom left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-24 left-8 md:left-12 z-20"
        >
          <p className="text-[#2a1a0e] font-bold text-5xl md:text-6xl leading-none" style={{fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900}}>
            95%
          </p>
          <p className="text-[#2a1a0e]/70 text-sm mt-1 max-w-[130px] leading-snug">Yogis feeling calm<br/>and balanced.</p>
        </motion.div>

        {/* Tagline — bottom left below stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-6 left-8 md:left-12 z-20"
        >
          <p className="text-[#2a1a0e]/60 text-xs max-w-[200px] leading-relaxed">
            Simple Guided Yoga To Stay Active, Reduce Stress, And Feel Balanced.
          </p>
        </motion.div>

        {/* CTA + description — top right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-28 right-8 md:right-12 z-20 max-w-[260px]"
        >
          <p className="text-[#2a1a0e]/80 text-sm leading-relaxed mb-5">
            Guided yoga programs that help you feel stronger, lighter, and more centered every day.
          </p>
          <a href="#classes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2a1a0e] text-[#f0d5bf] text-sm font-medium hover:bg-[#3d2512] transition-colors cursor-pointer">
            Begin Journey
          </a>
        </motion.div>

        {/* Video card — bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-8 right-8 md:right-12 z-20 bg-[#f5e8d8]/90 backdrop-blur-sm rounded-2xl p-4 w-[260px] shadow-lg"
        >
          <div className="flex gap-3">
            <div className="relative shrink-0 w-20 h-20 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1697274834392-04ff3b76ef20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-7 rounded-full bg-[#2a1a0e]/80 flex items-center justify-center">
                  <Play className="size-3 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[#2a1a0e] text-sm leading-tight">Balance Your Body<br/>{"&"} Mind.</p>
              <p className="text-[#2a1a0e]/60 text-xs mt-1.5 leading-relaxed">
                Practice Yoga at home anytime to energize your body, calm your mind.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <a href="#classes"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[#2a1a0e]/40 hover:text-[#2a1a0e]/70 transition-colors cursor-pointer">
          <ChevronDown className="size-5 animate-bounce" />
        </a>
      </section>

      {/* ── CLASSES ── */}
      <section id="classes" className="py-24 px-8 md:px-12 bg-[#faf5ef]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#2a1a0e]/40 mb-3">What we offer</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#2a1a0e]">
                Classes for every<br/><span className="italic">body {"&"} goal</span>
              </h2>
            </div>
            <p className="text-[#2a1a0e]/60 max-w-xs text-sm leading-relaxed">
              From restorative flow to explosive strength, our schedule has something for every fitness journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CLASSES.map((cls, i) => (
              <motion.div
                key={cls.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={cls.image} alt={cls.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-medium bg-[#f0d5bf] text-[#2a1a0e]">
                    {cls.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <cls.icon className="size-4 text-[#a8623a]" />
                    <h3 className="font-semibold text-[#2a1a0e]">{cls.title}</h3>
                  </div>
                  <p className="text-sm text-[#2a1a0e]/60 leading-relaxed mb-4">{cls.description}</p>
                  <p className="text-xs text-[#2a1a0e]/50 flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {cls.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED STRIP ── */}
      <section className="relative overflow-hidden h-[460px]">
        <img src="https://images.unsplash.com/photo-1761035005546-62b8018b212a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
          alt="Group yoga class" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{background: "linear-gradient(to right, rgba(42,26,14,0.75) 0%, rgba(42,26,14,0.4) 100%)"}} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-balance max-w-3xl"
            style={{fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1}}
          >
            EVERY CLASS IS A SHARED <em style={{fontStyle: "italic"}}>JOURNEY</em>
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            href="#pricing"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-[#f0d5bf] text-[#2a1a0e] font-semibold rounded-full hover:bg-white transition-colors cursor-pointer"
          >
            Start your free trial <ArrowRight className="size-4" />
          </motion.a>
        </div>
      </section>

      {/* ── TRAINERS ── */}
      <section id="trainers" className="py-24 px-8 md:px-12 bg-[#faf5ef]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#2a1a0e]/40 mb-3">The team</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2a1a0e]">Meet your <span className="italic">trainers</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {TRAINERS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] mb-5">
                  <img src={t.image} alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-semibold text-white text-lg">{t.name}</p>
                    <p className="text-white/70 text-sm">{t.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="size-4 text-[#a8623a]" />
                  <span className="text-sm text-[#2a1a0e]/60">{t.years} experience</span>
                </div>
                <p className="font-serif italic text-[#2a1a0e]/70 text-sm leading-relaxed">{`"${t.quote}"`}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-8 md:px-12" style={{background: "linear-gradient(135deg, #f0d5bf 0%, #e8c4a4 100%)"}}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#2a1a0e]/40 mb-3">Testimonials</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2a1a0e]">What members <span className="italic">say</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="size-4 fill-[#a8623a] text-[#a8623a]" />
                  ))}
                </div>
                <p className="font-serif italic text-[#2a1a0e]/80 leading-relaxed mb-6">{`"${t.text}"`}</p>
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-full bg-[#f0d5bf] flex items-center justify-center">
                    <Users className="size-4 text-[#a8623a]" />
                  </div>
                  <p className="text-sm font-medium text-[#2a1a0e]">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-8 md:px-12 bg-[#faf5ef]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#2a1a0e]/40 mb-3">Membership</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2a1a0e]">Simple, transparent <span className="italic">pricing</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-8 flex flex-col ${plan.highlight ? "bg-[#2a1a0e] text-[#f0d5bf]" : "bg-white"}`}
              >
                <p className={`text-xs tracking-[0.2em] uppercase font-medium mb-4 ${plan.highlight ? "text-[#f0d5bf]/50" : "text-[#2a1a0e]/40"}`}>
                  {plan.name}
                </p>
                <div className="mb-6">
                  <span className="font-bold text-5xl" style={{fontFamily: "'Barlow Condensed', sans-serif"}}>{plan.price}</span>
                  <span className={`text-sm ml-2 ${plan.highlight ? "text-[#f0d5bf]/50" : "text-[#2a1a0e]/40"}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <div className={`size-1.5 rounded-full ${plan.highlight ? "bg-[#f0d5bf]" : "bg-[#a8623a]"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-85 cursor-pointer ${plan.highlight ? "bg-[#f0d5bf] text-[#2a1a0e]" : "bg-[#2a1a0e] text-[#f0d5bf]"}`}>
                  Get started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-8 md:px-12" style={{background: "linear-gradient(135deg, #f0d5bf 0%, #e8c4a4 100%)"}}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#2a1a0e]/40 mb-4">About the studio</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#2a1a0e] mb-6">
              A space where <span className="italic">wellness</span> becomes a way of life
            </h2>
            <p className="text-[#2a1a0e]/70 leading-relaxed mb-5">
              Founded in 2012, YogaEase was born from a belief that true fitness encompasses body, mind, and spirit.
            </p>
            <p className="text-[#2a1a0e]/70 leading-relaxed mb-8">
              We cap our classes at 15 members so every person receives personalised attention from our world-class instructors.
            </p>
            <div className="flex flex-col gap-3 text-sm text-[#2a1a0e]/70">
              <div className="flex items-center gap-3"><MapPin className="size-4 text-[#a8623a] shrink-0" /><span>142 Blossom Lane, London, EC1A 2BB</span></div>
              <div className="flex items-center gap-3"><Phone className="size-4 text-[#a8623a] shrink-0" /><span>+44 20 7946 0234</span></div>
              <div className="flex items-center gap-3"><Clock className="size-4 text-[#a8623a] shrink-0" /><span>Mon – Fri 6am – 9pm · Sat – Sun 7am – 7pm</span></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" alt="Gym interior" className="rounded-3xl object-cover h-64 w-full" />
            <img src="https://images.unsplash.com/photo-1552286450-4a669f880062?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" alt="Yoga stretch" className="rounded-3xl object-cover h-64 w-full mt-8" />
            <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" alt="Equipment" className="rounded-3xl object-cover h-48 w-full" />
            <img src="https://images.unsplash.com/photo-1697274834392-04ff3b76ef20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" alt="Meditation" className="rounded-3xl object-cover h-48 w-full mt-4" />
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#2a1a0e]/10 px-8 md:px-12 py-10 bg-[#faf5ef]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="flex items-center gap-2 font-bold text-[#2a1a0e] text-lg">
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a1 1 0 0 1 .894.553l2.618 5.303 5.852.85a1 1 0 0 1 .555 1.705l-4.235 4.127.999 5.826a1 1 0 0 1-1.451 1.054L12 18.902l-5.232 2.75a1 1 0 0 1-1.45-1.054l.998-5.826L2.08 10.41a1 1 0 0 1 .556-1.704l5.852-.851L11.106 2.553A1 1 0 0 1 12 2z"/>
            </svg>
            YOGAEASE
          </p>
          <p className="text-sm text-[#2a1a0e]/40 text-center">
            © {new Date().getFullYear()} YogaEase. All rights reserved.
          </p>
          <div className="flex gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-[#2a1a0e]/50 hover:text-[#2a1a0e] transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
