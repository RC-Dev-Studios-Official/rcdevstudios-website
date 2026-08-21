import {
  Code,
  Smartphone,
  PenTool,
  Cloud,
  Layout,
  Cpu,
  Globe,
  Database,
} from "lucide-react";

export const siteMetadata = {
  title: "RC Dev Studios — We Build. You Grow.",
  description:
    "RC Dev Studios designs and develops modern digital products, mobile applications, websites, and scalable software solutions.",
};

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { value: "25+", label: "Projects Delivered", icon: Layout },
  { value: "10+", label: "Happy Clients", icon: Globe },
  { value: "5+", label: "Years of Excellence", icon: Cpu },
  { value: "24/7", label: "Support", icon: Database },
];

export const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites built for performance.",
    icon: Code,
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps that users love.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that convert.",
    icon: PenTool,
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud solutions and DevOps automation.",
    icon: Cloud,
  },
];

export const projects = [
  {
    title: "Framecraft",
    category: "AI & Video",
    description: "AI-powered image and video editing platform.",
    tags: ["Kotlin", "Rust", "AI", "Video"],
  },
  {
    title: "PixelMotion",
    category: "Creative Tools",
    description: "Modern creative editing application.",
    tags: ["Android", "Kotlin", "Rust"],
  },
  {
    title: "Filmhook",
    category: "Social Platform",
    description: "Movie discovery/social platform.",
    tags: ["React Native", "Node.js", "AWS"],
  },
];

export const technologies = [
  "Kotlin",
  "Android",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "NestJS",
  "Rust",
  "PostgreSQL",
  "Supabase",
  "AWS",
  "Cloudinary",
  "AI/ML",
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the idea, users, and requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create the UX, UI, architecture, and product direction.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop the product using modern technologies.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Deploy, optimize, monitor, and continuously improve.",
  },
];
