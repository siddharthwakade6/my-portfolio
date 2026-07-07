import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Rocket,
  Play,
  ArrowUp,
  MessageCircle,
  FileText,
  Cloud,
  Container,
  GitBranch,
  Terminal,
  Database,
  Code2,
  Server,
  Cpu,
  Shield,
  Menu,
  X,
  Phone,
  Send,
  CheckCircle2,
  Award,
  Briefcase,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Siddharth Wakade — DevOps & AWS Cloud Engineer" },
      {
        name: "description",
        content:
          "DevOps Engineer portfolio — AWS, Docker, Kubernetes, Jenkins, Terraform, CI/CD and Linux automation.",
      },
    ],
  }),
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = {
  github: "https://github.com/aimtruptimane",
  linkedin: "https://linkedin.com/in/siddharthwakade6",
  email: "mailto:siddharth.wakade@example.com",
  whatsapp: "https://wa.me/919999999999",
};

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-white">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <GitHubStats />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ---------- Background & progress ---------- */

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 grid-bg animate-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,217,255,0.12),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,230,118,0.08),_transparent_60%)]" />
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#00D9FF]/25 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-[#00E676]/15 blur-3xl animate-float-slow [animation-delay:-4s]" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#00D9FF]/15 blur-3xl animate-float-slow [animation-delay:-8s]" />
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#00D9FF] via-[#00E676] to-[#00D9FF]"
    />
  );
}

/* ---------- Navbar ---------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6 ${
            scrolled ? "glow-cyan" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#00D9FF] to-[#00E676] text-[#090B12] font-black">
              S
            </div>
            <span className="hidden text-sm font-semibold tracking-wide sm:block">
              Siddharth <span className="text-gradient-cyan">Wakade</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-2 text-sm text-white/75 transition-all hover:bg-white/5 hover:text-[#00D9FF]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <IconLink href={SOCIAL.github} label="GitHub"><Github className="h-4 w-4" /></IconLink>
            <IconLink href={SOCIAL.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></IconLink>
            <IconLink href={SOCIAL.email} label="Email"><Mail className="h-4 w-4" /></IconLink>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-white/80 transition hover:bg-white/5 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 rounded-2xl p-3 lg:hidden"
          >
            <div className="grid grid-cols-2 gap-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[#00D9FF]"
                >
                  {n.label}
                </a>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
              <IconLink href={SOCIAL.github} label="GitHub"><Github className="h-4 w-4" /></IconLink>
              <IconLink href={SOCIAL.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></IconLink>
              <IconLink href={SOCIAL.email} label="Email"><Mail className="h-4 w-4" /></IconLink>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:border-[#00D9FF]/60 hover:text-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.35)]"
    >
      {children}
    </a>
  );
}

/* ---------- Section wrapper ---------- */

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#00D9FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title.split(" ").map((w, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} className="text-gradient-cyan">
                {" "}
                {w}
              </span>
            ) : (
              <span key={i}>{i === 0 ? "" : " "}{w}</span>
            ),
          )}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#B0B8C4] sm:text-base">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </section>
  );
}

/* ---------- Hero ---------- */

const TITLES = [
  "DevOps Engineer",
  "AWS Cloud Engineer",
  "Linux Administrator",
  "CI/CD Enthusiast",
];

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = w.slice(0, text.length + 1);
          setText(next);
          if (next === w) setTimeout(() => setDel(true), pause);
        } else {
          const next = w.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

function Hero() {
  const typed = useTypewriter(TITLES);
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00E676]/30 bg-[#00E676]/5 px-3 py-1.5 text-xs font-medium text-[#00E676]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E676] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E676]" />
            </span>
            Available for DevOps Opportunities
          </div>

          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Siddharth
            <br />
            <span className="text-gradient-cyan">Wakade</span>
          </h1>

          <div className="mt-5 text-lg font-medium text-white/90 sm:text-xl">
            <span className="text-[#00D9FF]">{typed}</span>
            <span className="ml-1 inline-block w-[2px] bg-[#00D9FF] animate-blink" style={{ height: "1.1em", verticalAlign: "middle" }} />
          </div>

          <p className="mt-6 max-w-2xl text-[#B0B8C4] sm:text-lg">
            I build scalable cloud infrastructure, automate deployments, and design production-ready
            DevOps solutions using{" "}
            <span className="text-white/90">
              AWS, Docker, Kubernetes, Jenkins, Terraform, GitHub Actions, Linux, and Ansible.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#00E676] px-5 py-3 text-sm font-semibold text-[#090B12] transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,217,255,0.55)]"
            >
              <Rocket className="h-4 w-4" /> Hire Me
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-[#00D9FF]/60 hover:bg-white/10 hover:text-[#00D9FF]"
            >
              <Play className="h-4 w-4" /> View My Projects
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#B0B8C4]">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 text-white/90 transition hover:text-[#00D9FF]"
            >
              <Download className="h-4 w-4 text-[#00D9FF]" /> Download Resume
            </a>
            <span className="hidden h-4 w-px bg-white/10 sm:block" />
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#00E676]" /> Pune, Maharashtra, India
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#00D9FF]/40 via-transparent to-[#00E676]/40 blur-2xl" />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={heroPortrait}
                alt="Siddharth Wakade — DevOps Engineer"
                width={768}
                height={960}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090B12] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
                <div className="flex items-center gap-2 text-xs text-white/90">
                  <MapPin className="h-3.5 w-3.5 text-[#00D9FF]" />
                  Pune, India
                </div>
                <div className="flex items-center gap-2 text-xs text-[#00E676]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                  Available
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 p-2">
              <StatMini label="Role" value="Fresher DevOps" />
              <StatMini label="Status" value="Open to Work" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatMini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="text-[10px] uppercase tracking-widest text-[#B0B8C4]">{label}</div>
      <div className="mt-0.5 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <Section id="about" eyebrow="Introduction" title="About Me" subtitle="A quick look at who I am and what I love building.">
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:col-span-2"
        >
          <p className="text-[#B0B8C4] leading-relaxed">
            I am an aspiring <span className="text-white">DevOps Engineer</span> passionate about
            Cloud Computing, Automation, CI/CD, Infrastructure as Code, Linux Administration, and
            Kubernetes.
          </p>
          <p className="mt-4 text-[#B0B8C4] leading-relaxed">
            Currently improving my skills by building real-world DevOps projects on{" "}
            <span className="text-[#00D9FF]">AWS</span>. I enjoy solving infrastructure challenges
            and continuously learning modern cloud technologies.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Cloud", "CI/CD", "IaC", "Automation", "Kubernetes", "Linux"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <div className="space-y-4">
            <AboutStat icon={<Cloud className="h-5 w-5" />} k="AWS" v="Cloud Focus" />
            <AboutStat icon={<Container className="h-5 w-5" />} k="Docker & K8s" v="Containerization" />
            <AboutStat icon={<GitBranch className="h-5 w-5" />} k="CI/CD" v="Jenkins · GH Actions" />
            <AboutStat icon={<Terminal className="h-5 w-5" />} k="Linux" v="Ubuntu · Amazon Linux" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function AboutStat({ icon, k, v }: { icon: React.ReactNode; k: string; v: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#00D9FF]/20 to-[#00E676]/20 text-[#00D9FF]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-white">{k}</div>
        <div className="truncate text-xs text-[#B0B8C4]">{v}</div>
      </div>
    </div>
  );
}

/* ---------- Skills ---------- */

const SKILL_GROUPS: {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}[] = [
  {
    title: "AWS",
    icon: <Cloud className="h-5 w-5" />,
    color: "from-[#00D9FF]/30 to-transparent",
    items: ["EC2", "IAM", "VPC", "S3", "Route53", "CloudWatch", "RDS", "Auto Scaling", "Load Balancer"],
  },
  {
    title: "DevOps",
    icon: <Server className="h-5 w-5" />,
    color: "from-[#00E676]/30 to-transparent",
    items: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Git", "GitHub Actions", "Ansible"],
  },
  {
    title: "Operating Systems",
    icon: <Terminal className="h-5 w-5" />,
    color: "from-[#00D9FF]/30 to-transparent",
    items: ["Ubuntu", "Amazon Linux", "Linux Shell"],
  },
  {
    title: "Programming",
    icon: <Code2 className="h-5 w-5" />,
    color: "from-[#00E676]/30 to-transparent",
    items: ["Python", "Bash", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Database",
    icon: <Database className="h-5 w-5" />,
    color: "from-[#00D9FF]/30 to-transparent",
    items: ["MySQL"],
  },
  {
    title: "Tools",
    icon: <Cpu className="h-5 w-5" />,
    color: "from-[#00E676]/30 to-transparent",
    items: ["VS Code", "Postman", "Linux CLI", "GitHub"],
  },
];

function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills & Technologies" subtitle="Tools I use to design, ship, and operate reliable systems.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-[#00D9FF]/40"
          >
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${g.color} blur-2xl opacity-70 transition group-hover:opacity-100`}
            />
            <div className="relative flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#00E676]/20 text-[#00D9FF]">
                {g.icon}
              </div>
              <h3 className="text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/85 transition hover:border-[#00D9FF]/50 hover:text-[#00D9FF]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */

const TIMELINE = [
  {
    title: "DevOps Engineer (Fresher)",
    place: "Self Learning · Personal Labs",
    period: "2024 — Present",
    points: [
      "Hands-on with AWS infrastructure: VPC, EC2, IAM, ALB, Auto Scaling, RDS.",
      "CI/CD automation with Jenkins, GitHub Actions and Docker.",
      "Containerization & orchestration using Docker and Kubernetes.",
      "Infrastructure automation with Terraform and Ansible.",
    ],
  },
  {
    title: "Cloud Projects",
    place: "Personal Labs",
    period: "2024",
    points: [
      "Built end-to-end AWS three-tier architecture from scratch.",
      "Provisioned reproducible infra with Terraform modules.",
      "Configured Nginx and Apache using Ansible playbooks.",
    ],
  },
];

function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience Timeline" subtitle="Practical, project-driven experience across cloud and DevOps.">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D9FF]/60 via-white/10 to-[#00E676]/60 md:left-1/2" />
        <div className="space-y-10">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative pl-12 md:grid md:grid-cols-2 md:gap-8 md:pl-0 ${
                i % 2 ? "md:[&>*:first-child]:col-start-2" : ""
              }`}
            >
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#00D9FF]">
                  <Briefcase className="h-3.5 w-3.5" />
                  {t.period}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">{t.title}</h3>
                <div className="text-sm text-[#B0B8C4]">{t.place}</div>
                <ul className="mt-4 space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-white/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00E676]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="absolute left-4 top-6 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-[#00D9FF] shadow-[0_0_16px_#00D9FF] md:left-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */

const PROJECTS = [
  {
    title: "AWS Three-Tier Architecture",
    desc: "Highly available web app on AWS with VPC, ALB, Auto Scaling, and RDS Multi-AZ.",
    tech: ["AWS", "VPC", "EC2", "ALB", "Auto Scaling", "RDS"],
    prompt: "Cyberpunk AWS three tier architecture diagram, dark background, cyan glowing lines, isometric",
  },
  {
    title: "NodeJS CI/CD Pipeline",
    desc: "End-to-end CI/CD using GitHub → Jenkins → Docker image → EC2 deploy.",
    tech: ["GitHub", "Jenkins", "Docker", "EC2"],
    prompt: "Neon Jenkins CI/CD pipeline visualization with docker and nodejs, dark cyberpunk",
  },
  {
    title: "Kubernetes Deployment",
    desc: "Deployed microservices on Kubernetes with rolling updates and services.",
    tech: ["Docker", "Kubernetes", "AWS"],
    prompt: "Kubernetes cluster nodes glowing cyan on dark background, isometric",
  },
  {
    title: "Terraform Infrastructure",
    desc: "Reusable Terraform modules to provision VPC, EC2, IAM and networking.",
    tech: ["Terraform", "AWS", "EC2", "VPC", "IAM"],
    prompt: "Terraform infrastructure as code neon abstract art, dark cyber",
  },
  {
    title: "Ansible Automation",
    desc: "Playbooks that configure Nginx, Apache and hardened Linux baselines.",
    tech: ["Playbooks", "Apache", "Nginx", "Linux"],
    prompt: "Ansible automation dashboard neon glow, dark cyber",
  },
  {
    title: "Dockerized Portfolio Website",
    desc: "This portfolio containerized with Docker and shipped via GitHub Actions.",
    tech: ["Docker", "Nginx", "GitHub Actions"],
    prompt: "Docker containers glowing cyan on dark grid, cyber aesthetic",
  },
];

function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Featured Projects" subtitle="A selection of DevOps and cloud engineering projects.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="glass group relative flex flex-col overflow-hidden rounded-2xl transition hover:border-[#00D9FF]/50 hover:shadow-[0_10px_60px_-20px_rgba(0,217,255,0.4)]"
          >
            <div className="relative h-40 overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/25 via-transparent to-[#00E676]/25" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="glass grid h-16 w-16 place-items-center rounded-2xl text-[#00D9FF]">
                  <Cloud className="h-7 w-7" />
                </div>
              </div>
              <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#00D9FF] backdrop-blur">
                Project {String(i + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-white transition group-hover:text-[#00D9FF]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-[#B0B8C4]">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 pt-4">
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:border-[#00D9FF]/50 hover:text-[#00D9FF]"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#00E676] px-3 py-2 text-xs font-semibold text-[#090B12] transition hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Certifications ---------- */

const CERTS = [
  { name: "AWS Cloud Practitioner", status: "Preparing", icon: <Cloud className="h-5 w-5" /> },
  { name: "Docker", status: "Skilled", icon: <Container className="h-5 w-5" /> },
  { name: "Kubernetes", status: "Skilled", icon: <Cpu className="h-5 w-5" /> },
  { name: "Terraform", status: "Skilled", icon: <Server className="h-5 w-5" /> },
  { name: "Jenkins", status: "Skilled", icon: <GitBranch className="h-5 w-5" /> },
  { name: "Linux", status: "Skilled", icon: <Terminal className="h-5 w-5" /> },
  { name: "Git & GitHub", status: "Skilled", icon: <Github className="h-5 w-5" /> },
  { name: "Security Basics", status: "Learning", icon: <Shield className="h-5 w-5" /> },
];

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications & Learning" subtitle="Continuously validating skills through certifications and hands-on labs.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            whileHover={{ y: -4 }}
            className="glass flex items-center gap-3 rounded-2xl p-4 transition hover:border-[#00D9FF]/40"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#00E676]/20 text-[#00D9FF]">
              {c.icon}
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-white">{c.name}</div>
              <div className="text-xs text-[#B0B8C4]">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#00E676]" />
                {c.status}
              </div>
            </div>
            <Award className="ml-auto h-4 w-4 text-[#00D9FF]/60" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- GitHub Stats ---------- */

function GitHubStats() {
  const user = "aimtruptimane";
  return (
    <Section id="github" eyebrow="Activity" title="GitHub Statistics" subtitle="Live stats pulled straight from my GitHub profile.">
      <div className="grid gap-5 lg:grid-cols-2">
        <StatsCard
          src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=00000000&title_color=00D9FF&icon_color=00E676&text_color=B0B8C4`}
          alt="GitHub stats"
        />
        <StatsCard
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${user}&hide_border=true&background=00000000&stroke=00D9FF&ring=00D9FF&fire=00E676&currStreakLabel=00D9FF&sideLabels=B0B8C4&currStreakNum=FFFFFF&sideNums=FFFFFF&dates=B0B8C4`}
          alt="GitHub streak"
        />
        <StatsCard
          className="lg:col-span-2"
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&bg_color=00000000&title_color=00D9FF&text_color=B0B8C4`}
          alt="Top languages"
        />
        <StatsCard
          className="lg:col-span-2"
          src={`https://ghchart.rshah.org/00D9FF/${user}`}
          alt="GitHub contributions"
        />
      </div>
    </Section>
  );
}

function StatsCard({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`glass rounded-2xl p-5 ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="mx-auto max-h-72 w-full object-contain" />
    </div>
  );
}

/* ---------- Resume ---------- */

function Resume() {
  return (
    <Section id="resume" eyebrow="My CV" title="Resume">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl p-10 text-center"
      >
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#00D9FF]/25 to-[#00E676]/25 text-[#00D9FF]">
          <FileText className="h-7 w-7" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Siddharth Wakade — DevOps Engineer</h3>
          <p className="mt-2 text-sm text-[#B0B8C4]">
            Grab a copy of my latest resume, or preview it in your browser.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#00E676] px-5 py-3 text-sm font-semibold text-[#090B12] transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,217,255,0.55)]"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#00D9FF]/60 hover:text-[#00D9FF]"
          >
            <ExternalLink className="h-4 w-4" /> View Resume
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

/* ---------- Contact ---------- */

type ContactForm = { name: string; email: string; subject: string; message: string };

function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (_data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <Section id="contact" eyebrow="Say Hello" title="Get In Touch" subtitle="Have an opportunity or a question? Drop a message and I'll get back soon.">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" error={errors.name?.message}>
              <input
                {...register("name", { required: "Name is required" })}
                className="input"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="input"
                placeholder="you@example.com"
              />
            </Field>
          </div>
          <Field label="Subject" error={errors.subject?.message}>
            <input
              {...register("subject", { required: "Subject is required" })}
              className="input"
              placeholder="What's this about?"
            />
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={5}
              className="input resize-none"
              placeholder="Tell me a bit more..."
            />
          </Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#00E676] px-5 py-3 text-sm font-semibold text-[#090B12] transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,217,255,0.55)] disabled:opacity-60"
          >
            <Send className="h-4 w-4" /> {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {sent && (
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-[#00E676]">
              <CheckCircle2 className="h-4 w-4" /> Thanks! Your message has been sent.
            </p>
          )}
          <style>{`
            .input { width:100%; margin-top:.35rem; border-radius:.75rem; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); padding:.7rem .9rem; font-size:.875rem; color:white; outline:none; transition:all .2s; }
            .input::placeholder { color: #6b7480; }
            .input:focus { border-color: rgba(0,217,255,0.6); box-shadow: 0 0 0 3px rgba(0,217,255,0.15); }
          `}</style>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value="siddharth.wakade@example.com" href={SOCIAL.email} />
          <ContactCard icon={<Phone className="h-5 w-5" />} label="Phone" value="+91 99999 99999" href="tel:+919999999999" />
          <ContactCard icon={<MapPin className="h-5 w-5" />} label="Location" value="Pune, Maharashtra, India" />
          <ContactCard icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" value="/in/siddharthwakade6" href={SOCIAL.linkedin} />
          <ContactCard icon={<Github className="h-5 w-5" />} label="GitHub" value="@aimtruptimane" href={SOCIAL.github} />
        </motion.div>
      </div>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="mb-4 block">
      <span className="text-xs font-medium uppercase tracking-widest text-[#B0B8C4]">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass flex items-center gap-3 rounded-2xl p-4 transition hover:border-[#00D9FF]/50 hover:shadow-[0_0_24px_-8px_rgba(0,217,255,0.45)]">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#00E676]/20 text-[#00D9FF]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-widest text-[#B0B8C4]">{label}</div>
        <div className="truncate text-sm font-semibold text-white">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass flex flex-col items-center justify-between gap-6 rounded-2xl p-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#00D9FF] to-[#00E676] text-[#090B12] font-black">
              S
            </div>
            <div>
              <div className="font-semibold">
                Siddharth <span className="text-gradient-cyan">Wakade</span>
              </div>
              <div className="text-xs text-[#B0B8C4]">DevOps · AWS · Cloud</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconLink href={SOCIAL.github} label="GitHub"><Github className="h-4 w-4" /></IconLink>
            <IconLink href={SOCIAL.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></IconLink>
            <IconLink href={SOCIAL.email} label="Email"><Mail className="h-4 w-4" /></IconLink>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-[#B0B8C4]">
          © 2026 Siddharth Wakade. Built with React, TypeScript, Tailwind CSS, and{" "}
          <span className="text-[#00E676]">❤</span>
        </p>
      </div>
    </footer>
  );
}

/* ---------- Floating actions ---------- */

function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <a
        href={SOCIAL.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-11 w-11 place-items-center rounded-full bg-[#00E676] text-[#090B12] shadow-[0_0_24px_rgba(0,230,118,0.5)] transition hover:scale-110"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={SOCIAL.email}
        aria-label="Email"
        className="grid h-11 w-11 place-items-center rounded-full bg-[#00D9FF] text-[#090B12] shadow-[0_0_24px_rgba(0,217,255,0.5)] transition hover:scale-110"
      >
        <Mail className="h-5 w-5" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-[#00D9FF]/60 hover:text-[#00D9FF]"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
