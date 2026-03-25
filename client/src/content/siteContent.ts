import { ArrowUpRight, Compass, Cpu, Palette, Trophy, Users, Zap } from "lucide-react";

export const navItems = [
  { id: "proof", label: "Proof" },
  { id: "mission", label: "Mission" },
  { id: "programs", label: "Programs" },
  { id: "impact", label: "Impact" },
  { id: "join", label: "Join" },
] as const;

export const heroContent = {
  eyebrow: "Artists and Athletes for Change",
  title: "From Potential to Platform.",
  subtitle:
    "AAFC equips young artists and athletes with the technology, discipline, and mentorship to lead culture and build durable futures.",
  primaryCta: {
    label: "Apply for the Cohort",
    href: "https://app.youform.com/forms/f8xnzrci",
  },
  secondaryCta: {
    label: "Partner With AAFC",
    href: "https://app.youform.com/forms/r9uihypu",
  },
  trustCue: "Trusted by educators, coaches, creatives, and community partners committed to measurable youth outcomes.",
};

export const proofStats = [
  { value: "500+", label: "Young people served", detail: "Across leadership and digital skill pathways" },
  { value: "50+", label: "Program experiences", detail: "Hands-on labs, mentorships, and showcases" },
  { value: "25+", label: "Partners", detail: "Community institutions and professional networks" },
  { value: "12 mos", label: "Cohort journey", detail: "Sustained coaching from onboarding to outcomes" },
] as const;

export const missionPillars = [
  "Creative discipline",
  "Athletic leadership",
  "Digital fluency",
  "Economic mobility",
] as const;

export const programs = [
  {
    icon: Palette,
    title: "Creative Systems Studio",
    description:
      "Participants build portfolio-ready campaigns, media assets, and storytelling systems while learning strategy, production, and business fundamentals.",
    outcome: "Produces market-ready creative leaders with execution discipline.",
  },
  {
    icon: Trophy,
    title: "Athletic Leadership Lab",
    description:
      "Athletes translate performance mindset into communication, branding, and career readiness through applied workshops and mentor-led training.",
    outcome: "Builds leaders who can navigate sports, media, and enterprise environments.",
  },
  {
    icon: Cpu,
    title: "Technology for Impact",
    description:
      "Youth teams apply product thinking, AI tools, and civic design methods to solve local challenges and launch practical solutions.",
    outcome: "Turns technical skills into community-level outcomes and opportunity creation.",
  },
] as const;

export const impactFrames = [
  {
    phase: "Before",
    title: "Untapped potential",
    description: "Participants enter with talent and ambition, but limited access to structured pathways, networks, and digital tools.",
  },
  {
    phase: "During",
    title: "Coached transformation",
    description: "AAFC delivers rigorous project cycles, leadership coaching, and professional mentorship rooted in accountability.",
  },
  {
    phase: "After",
    title: "Sustained momentum",
    description: "Graduates leave with a portfolio, trusted network, and repeatable systems for career growth and community contribution.",
  },
] as const;

export const pathwayMoments = [
  {
    title: "Orientation + Baseline",
    description: "Skills mapping, ambition interview, and individualized development plan.",
    icon: Compass,
  },
  {
    title: "Studio + Performance Cycles",
    description: "Creative, athletic, and technical sprints with live critique and accountability milestones.",
    icon: Zap,
  },
  {
    title: "Mentor Network Access",
    description: "Professionals provide guidance, introductions, and direct exposure to opportunity ecosystems.",
    icon: Users,
  },
  {
    title: "Showcase + Placement",
    description: "Participants present work, strengthen personal brand narratives, and activate next-step pathways.",
    icon: ArrowUpRight,
  },
] as const;

export const participationPaths = [
  {
    label: "For Applicants",
    title: "Build your platform",
    body: "Ages 18–24 can apply to join a high-standard cohort focused on creative growth, leadership, and economic opportunity.",
    cta: "Start Your Application",
    href: "https://app.youform.com/forms/f8xnzrci",
  },
  {
    label: "For Partners & Supporters",
    title: "Fund outcomes at scale",
    body: "Invest in coaching, technology access, and opportunity infrastructure that moves youth from potential to measurable progress.",
    cta: "Become a Partner",
    href: "https://app.youform.com/forms/r9uihypu",
  },
] as const;

export const faqs = [
  {
    question: "Who is AAFC designed for?",
    answer:
      "AAFC serves emerging artists and athletes—primarily ages 18 to 24—who are ready for a disciplined, year-long growth commitment.",
  },
  {
    question: "How much time does the program require?",
    answer:
      "Participants engage in recurring studio sessions, mentor meetings, and project milestones throughout a structured 12-month pathway.",
  },
  {
    question: "What does partner support fund?",
    answer:
      "Support expands technology access, instructor capacity, mentorship stipends, and direct career-readiness opportunities for participants.",
  },
  {
    question: "What happens after someone applies?",
    answer:
      "Applicants complete an intake form, are reviewed for fit, and then receive next-step guidance for interviews, onboarding, and program placement.",
  },
] as const;
