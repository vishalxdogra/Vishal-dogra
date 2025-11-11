'use client';

import { motion, type Variants ,AnimatePresence } from 'framer-motion';
import Link from 'next/link';


const container = "mx-auto w-full max-w-6xl px-6";

const fadedelay = (delay: number) => ({
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 1, delay } },
});

const iconClass =
  "text-zinc-500 hover:text-[#BFA76F] transition-all hover:scale-110"

const cinematicEase: [number, number, number, number] = [0.33, 0.74, 0.52, 0.99];

const fade: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: cinematicEase },
  },
};

const fadeDelay = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, delay, ease: cinematicEase },
  },
});




import { Menu, X } from "lucide-react"; // for hamburger icons


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className={`${container} flex items-center justify-between py-4 text-sm text-zinc-400`}>
        
        {/* Logo or name (optional) */}
        <a
          href="#home"
          className="text-[#BFA76F] font-semibold text-lg tracking-wide hover:text-[#d5c187] transition-all"
        >
          Vishal dogra
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#home" className="nav-link hover:text-[#BFA76F]">Home</a>
          <a href="#about" className="nav-link hover:text-[#BFA76F]">About</a>
          <a href="#projects" className="nav-link hover:text-[#BFA76F]">Projects</a>
          <a href="#experience" className="nav-link hover:text-[#BFA76F]">Experience</a>
          <a href="#contact" className="nav-link hover:text-[#BFA76F]">Contact</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-400 hover:text-[#BFA76F] transition-all"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0E0E0E]/95 border-t border-[#BFA76F]/20 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-6 py-6 text-sm text-zinc-400">
              <a href="#home" className="hover:text-[#BFA76F]" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="hover:text-[#BFA76F]" onClick={() => setIsOpen(false)}>About</a>
              <a href="#projects" className="hover:text-[#BFA76F]" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#experience" className="hover:text-[#BFA76F]" onClick={() => setIsOpen(false)}>Experience</a>
              <a href="#contact" className="hover:text-[#BFA76F]" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


import { Github, Linkedin, Mail ,Instagram} from "lucide-react"; 




// const iconClass =
//   "text-zinc-500 hover:text-[#BFA76F] transition-all hover:scale-110";

function SocialSidebar() {
  return (
    <>
      {/* --- Desktop Sidebar --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6"
      >
        <a href="https://github.com/vishalxdogra" target="_blank" className={iconClass}>
          <Github size={22} />
        </a>
        <a href="https://www.linkedin.com/in/vishal-dogra-2a2502249/" target="_blank" className={iconClass}>
          <Linkedin size={22} />
        </a>
        <a href="mailto:dograv8888@gmail.com" className={iconClass}>
          <Mail size={22} />
        </a>
        <a href="https://www.instagram.com/vishalxdogra" target="_blank" className={iconClass}>
          <Instagram size={22} />
        </a>

        <div className="w-px h-16 bg-[#BFA76F]/30 mt-2" />
      </motion.div>

      {/* --- Mobile Bottom Bar --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 ,  type: "spring", stiffness: 120 }}

        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-8 px-6 py-3 rounded-full bg-[#0E0E0E]/80 backdrop-blur-md border border-[#BFA76F]/30 shadow-[0_0_15px_rgba(191,167,111,0.15)]"
      >
        <a href="https://github.com/vishalxdogra" target="_blank" className="text-zinc-400 hover:text-[#BFA76F] transition-all">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/vishal-dogra-2a2502249/" target="_blank" className="text-zinc-400 hover:text-[#BFA76F] transition-all">
          <Linkedin size={20} />
        </a>
        <a href="mailto:dograv8888@gmail.com" className="text-zinc-400 hover:text-[#BFA76F] hover:shadow-[0_0_8px_rgba(191,167,111,0.4)] transition-all">
          <Mail size={20} />
        </a>
        <a href="https://www.instagram.com/vishalxdogra" target="_blank" className="text-zinc-400 hover:text-[#BFA76F] transition-all">
          <Instagram size={20} />
        </a>
      </motion.div>
    </>
  );
}
function Hero() {
  // Floating Resume Button Component
  function FloatingResumeButton() {
  return (
    <a
      href="/Vishal_Dogra_Resume.pdf"
      download
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 px-5 py-3 rounded-full border border-[#BFA76F]/50 bg-[#0E0E0E]/80 backdrop-blur-md text-[#BFA76F] text-sm font-medium tracking-wider shadow-[0_0_15px_rgba(191,167,111,0.25)] hover:shadow-[0_0_25px_rgba(191,167,111,0.4)] hover:bg-[#BFA76F]/10 transition-all duration-300 floating-resume-animate"
    >
      {/* 🧾 Elegant Document Icon (Default) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 transition-all duration-300 opacity-100 group-hover:opacity-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 2.25h6.75L21 8.25v13.5a0.75 0.75 0 01-.75.75H9.75a0.75 0.75 0 01-.75-.75V2.25zM15 2.25v6h6"
        />
      </svg>

      {/* 📥 Hover Download Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.6}
        stroke="currentColor"
        className="w-5 h-5 absolute transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v12m0 0l4-4m-4 4l-4-4m8 8H8"
        />
      </svg>

      <span className="hidden sm:inline">Resume</span>
    </a>
  );
}

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-24 bg-[#0B0B0B]"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-veil" />
        </div>

        <div className={`${container} relative`}>
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="space-y-10"
          >
            {/* Tagline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight font-semibold">
              Building <span className="gold-text">Meaning</span> into Modern Code
            </h1>

            {/* Subtext */}
            <motion.p
              variants={fadeDelay(0.15)}
              initial="hidden"
              animate="show"
              className="max-w-3xl text-lg md:text-xl text-zinc-400 leading-relaxed"
            >
              I’m <span className="gold-text font-medium">Vishal Dogra</span> — a Full Stack Developer with
              a deep focus on crafting functional, elegant, and performance-driven web experiences.
              I build systems that merge <span className="text-zinc-300 italic">design clarity</span> with
              <span className="text-zinc-300 italic"> engineering precision</span>.
            </motion.p>

            {/* Extra paragraph (adds personal touch) */}
            <motion.p
              variants={fadeDelay(0.3)}
              initial="hidden"
              animate="show"
              className="max-w-3xl text-md md:text-lg text-zinc-500 leading-relaxed"
            >
              When I’m not writing clean code, I’m refining ideas — turning minimalism and logic into
              products that feel seamless. I believe software isn’t just built; it’s composed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeDelay(0.45)}
              initial="hidden"
              animate="show"
              className="flex gap-6 pt-4"
            >
              <a
                href="#projects"
                className="btn-gold px-6 py-3 text-sm uppercase tracking-widest rounded-md"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="text-sm text-zinc-400 hover:text-[#BFA76F] transition-all"
              >
                Get in Touch →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <FloatingResumeButton />
    </>
  );
}



function About() {
  return (
    <section id="about" className="py-28 text-[#E8E6E3]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl mb-12 font-[Cormorant Garamond] text-[#BFA76F]"
        >
          About Vishal
        </motion.h2>

        {/* About Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-[#E8E6E3]/80 mb-12 font-[Inter]"
        >
          Hi, I’m <span className="text-[#BFA76F] font-semibold">Vishal Dogra</span>, a 
          <span className="font-medium"> Full Stack Web Developer </span> from 
          <span className="italic"> Jammu Kashmir, India</span>, currently pursuing a 
          <span className="font-medium"> B.Tech in Computer Science and Engineering</span>.  
          I’m passionate about building modern, efficient, and user-focused web applications that 
          merge clean design with scalable architecture.
        </motion.p>

        {/* Technical Skills */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-[Cormorant Garamond] text-[#BFA76F] mb-4">
              Technical Skills
            </h3>
            <ul className="space-y-3 text-[#E8E6E3]/70 leading-relaxed font-[Inter]">
              <li>
                <span className="text-[#BFA76F] font-semibold">Frontend:</span> HTML, CSS, JavaScript (ES6+), React.js, TypeScript, Next.js, Tailwind CSS, Framer Motion
              </li>
              <li>
                <span className="text-[#BFA76F] font-semibold">Backend:</span> Node.js, Express.js, Next.js API Routes, RESTful APIs, Authentication (JWT, NextAuth), Middleware, Zod Validation
              </li>
              <li>
                <span className="text-[#BFA76F] font-semibold">Databases:</span> PostgreSQL, MongoDB, Prisma ORM, Mongoose, Supabase
              </li>
              <li>
                <span className="text-[#BFA76F] font-semibold">Tools & Infrastructure:</span> Git, GitHub, Vercel, Render, Cloudinary, Google APIs, Performance Optimization
              </li>
              
            </ul>
          </div>

          {/* Additional Expertise */}
          <div>
            <h3 className="text-2xl font-[Cormorant Garamond] text-[#BFA76F] mb-4">
              Additional Expertise
            </h3>
            <ul className="space-y-3 text-[#E8E6E3]/70 font-[Inter]">
              <li>-API Development & Integration (RESTful APIs, Middleware, Validation)</li>
              <li>-System Design, Role-based Authentication</li>
              <li>-Error Handling: Custom Error Responses, Async Error Handling</li>
              <li>-Libraries: Zod, Joi, JWT, Express-Session, Multer</li>
            </ul>
          </div>

          {/* Passion & Vision */}
          <div>
            <h3 className="text-2xl font-[Cormorant Garamond] text-[#BFA76F] mb-4">
              Passion & Vision
            </h3>
            <p className="text-[#E8E6E3]/80 leading-relaxed font-[Inter]">
              I enjoy building applications that are functional, efficient, and thoughtfully designed.  
              My projects, including <span className="text-[#BFA76F]">Activity Board</span> and 
              <span className="text-[#BFA76F]"> Wanderlust</span>, reflect my focus on 
              real-world usability, performance, and clean architecture.  
              I strive to keep learning, improving, and building solutions that make an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer — Rang-e-Chinar (College Event)",
      company: "National Institute of Technology, Srinagar",
      period: "July 2025 - October 2025",
      description:
        "Contributed to the official web platform for Rang-e-Chinar, an inter-college cultural event. Implemented Cloudinary integration for efficient media management and optimized the event gallery for seamless uploads and real-time performance. Focused on responsive design and smooth animations for an elegant visual experience.",
    },
    
  ];

  return (
    <section id="experience" className="py-28 bg-[#0B0B0B] text-[#E8E6E3]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl mb-12 font-[Cormorant Garamond] text-[#BFA76F]"
        >
          Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border-l border-[#BFA76F]/30 pl-6 relative"
            >
              <span className="absolute -left-[7px] top-[8px] w-3 h-3 rounded-full bg-[#BFA76F]" />
              <h3 className="text-xl font-semibold text-[#BFA76F]">
                {exp.role}
              </h3>
              <p className="text-sm text-zinc-500 mb-2">
                {exp.company} • {exp.period}
              </p>
              <p className="text-[#E8E6E3]/80 leading-relaxed text-[0.95rem]">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

function ProjectCard({ title, description, link, demoLink }: ProjectCardProps) {
  return (
    <div className="relative group">
      {/* Main project card */}
      <motion.a
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        href={link}
        target="_blank"
        rel="noreferrer"
        className="project-card block group bg-[#0E0E0E] border border-[#BFA76F]/20 rounded-xl p-6 hover:border-[#BFA76F]/50 transition"
      >
        <div className="flex items-start justify-between gap-6">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#E8E6E3]">
            {title}
          </h3>
          <span className="text-zinc-500 transition-colors group-hover:text-[#BFA76F]">→</span>
        </div>

        <p className="mt-3 text-sm md:text-base leading-7 text-[#E8E6E3]/70">
          {description}
        </p>

        <div className="mt-8 text-sm uppercase tracking-[0.3em] text-zinc-500 transition-colors group-hover:text-[#BFA76F]">
          View Project →
        </div>
      </motion.a>

      {/* Floating Live Demo Button */}
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-5 right-5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#BFA76F] border border-[#BFA76F]/40 rounded-md bg-[#0E0E0E]/60 backdrop-blur-sm hover:bg-[#BFA76F]/10 hover:shadow-[0_0_15px_rgba(191,167,111,0.3)] transition-all"
        >
          Live Demo
        </a>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className={container}>
        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl md:text-4xl mb-12"
        >
            Projects
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          <ProjectCard
            title="Tomorrow's Datagram"
            description="A full-stack Next.js-based platform designed to help college students discover, join, and manage campus activities across Open Events, Communities, and College-Funded Projects — built for real-world scalability and engagement.     "
            link="https://github.com/vishalxdogra/Activity-board2"
            demoLink="https://activity-board-iota.vercel.app/"
          />
          <ProjectCard
            title="Wanderlust"
            description="Wanderlust — an Airbnb-style full-stack web app for exploring, hosting, and reviewing stays. Built with Node.js, Express, and MongoDB, it features secure authentication, map-based listings, image uploads via Cloudinary, and a clean, responsive UI."
            link="https://github.com/vishalxdogra/wanderlust"
            demoLink="https://wanderlust-za45.onrender.com/listings"
          />
        </div>
      </div>
    </section>
  );
}



import { useState } from "react";





function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const msg = formData.get("message");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: msg }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage("✨ Message sent successfully! I’ll get back to you soon.");
        form.reset();
      } else {
        setStatus("error");
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("⚠️ Server error. Try again later.");
    }

    // Auto-hide the toast
    setTimeout(() => setStatus("idle"), 4500);
  };

  return (
    <section id="contact" className="py-28">
      <div className={container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl mb-10 text-[#BFA76F]"
        >
          Contact
        </motion.h2>

        <div className="grid items-start gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* Left side text + social links */}
          <motion.div
            variants={fadeDelay(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6 text-zinc-400"
          >
            <p className="leading-8 text-[1.05rem] text-zinc-400">
              Let’s build something meaningful together. Whether you’re refining
              a product or launching a bold idea, I craft experiences that
              whisper luxury while delivering substance.
            </p>

            <ul className="flex flex-wrap items-center gap-8 text-[1rem] uppercase tracking-[0.2em] text-zinc-500 font-medium">
              <li>
                <Link
                  href="https://github.com/vishalxdogra"
                  className="inline-flex transition-all duration-300 hover:text-[#BFA76F] hover:tracking-[0.25em]"
                  target="_blank"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/vishal-dogra-2a2502249/"
                  className="inline-flex transition-all duration-300 hover:text-[#BFA76F] hover:tracking-[0.25em]"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:dograv8888@gmail.com"
                  className="inline-flex transition-all duration-300 hover:text-[#BFA76F] hover:tracking-[0.25em]"
                >
                  Email
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Right side form */}
          <motion.form
            variants={fadeDelay(0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4 relative"
          >
            <input
              className="input-base w-full"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="input-base w-full"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
            <textarea
              className="input-base w-full h-32"
              name="message"
              placeholder="Your message"
              required
            />
            <button className="btn-gold w-full" type="submit">
              Send
            </button>

            {/* Elegant Animated Toast */}
            <AnimatePresence>
              {status !== "idle" && (
                <motion.div
                  key={status}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    boxShadow:
                      status === "success"
                        ? "0 0 20px rgba(191,167,111,0.35)"
                        : "0 0 15px rgba(255,90,90,0.3)",
                  }}
                  exit={{ opacity: 0, y: 40, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`absolute left-1/2 -translate-x-1/2 bottom-[-5rem] px-6 py-3 rounded-xl text-sm font-medium text-center backdrop-blur-md border ${
                    status === "success"
                      ? "border-[#BFA76F]/50 text-[#BFA76F] bg-[#0E0E0E]/80"
                      : "border-red-500/50 text-red-400 bg-[#0E0E0E]/80"
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className={container}>
        <p className="mb-6 font-serif text-lg italic text-gold/80">Built in silence, designed to endure.</p>
        <div className="h-px w-full bg-gold/40 mb-6" />
        <p className="text-sm text-zinc-500">© 2025 Vishal Dogra — Built in silence, made to impress 🖤</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <SocialSidebar /> 
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}

