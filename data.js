// TechGzr Shared Content Store
// This file is the single source of truth for all website content.
// The admin portal writes to localStorage under the key 'techgzr_content'
// All public pages read from localStorage (falling back to these defaults).

const TECHGZR_DEFAULT = {
  company: {
    name: "TechGzr",
    tagline: "Innovating Pakistan's Digital Future",
    description: "Pakistan's trusted technology partner. Building world-class software from Islamabad for clients across the globe.",
    email: "shsyed@techgzr.com",
    phone: "+92 345-9600240",
    address: "Islamabad, Pakistan",
    founded: "2023",
    linkedin: "#",
    twitter: "#",
    github: "#",
    instagram: "#"
  },
  hero: {
    badge: "Pakistan's Premier Tech Partner",
    headline1: "Build Digital",
    headline2: "Excellence",
    headline3: "Powered from Islamabad, Delivered Worldwide",
    description: "From AI-powered platforms to mobile apps and IT training — TechGzr Private Limited engineers future-ready solutions for ambitious businesses.",
    cta_primary: "Start a Project",
    cta_secondary: "Explore Services",
    stat1_num: "50+",
    stat1_label: "Projects Delivered",
    stat2_num: "100%",
    stat2_label: "Client Satisfaction",
    stat3_num: "6+",
    stat3_label: "Service Domains"
  }
  services: [
    { id: 1, icon: "🌐", title: "Web Development", description: "Blazing-fast, scalable web applications built with modern frameworks. From dynamic front-ends to robust back-end architectures and e-commerce platforms.", detail: "We specialize in React, Next.js, Vue, Node.js, Laravel, and Django. Whether you need a landing page, a complex SaaS platform, or a high-traffic e-commerce store, we build it right the first time.", link: "services.html" },
    { id: 2, icon: "📱", title: "Mobile App Development", description: "Native and cross-platform iOS & Android apps that users love. Seamless UX, optimized performance, and App Store-ready deployment.", detail: "Flutter, React Native, Swift, and Kotlin — we pick the right tool for your project. From MVP to enterprise-grade, our apps have served millions of users.", link: "services.html" },
    { id: 3, icon: "🤖", title: "AI / Machine Learning", description: "Smart automation, predictive analytics, and AI integrations that give your business a competitive edge. LLM integrations, computer vision, and custom ML models.", detail: "We integrate OpenAI, Anthropic, Gemini, and open-source models into your workflows. RAG pipelines, chatbots, document intelligence, and predictive systems.", link: "services.html" },
    { id: 4, icon: "🎨", title: "UI/UX Design", description: "Pixel-perfect interfaces grounded in user research. We design experiences that convert visitors into loyal customers with intuitive, beautiful design systems.", detail: "Figma prototypes, design systems, user journey mapping, A/B testing, and accessibility audits. Every pixel is intentional.", link: "services.html" },
    { id: 5, icon: "💡", title: "Software Consulting", description: "Strategic technology advisory for startups and enterprises. Architecture reviews, tech stack selection, digital transformation roadmaps, and CTO-as-a-service.", detail: "Fractional CTO, technical due diligence, architecture audits, and team augmentation. We help you make the right technology decisions.", link: "services.html" },
    { id: 6, icon: "🎓", title: "IT Trainings", description: "Industry-relevant courses in web development, AI, mobile apps, and cybersecurity. Upskill your team or launch your tech career from Pakistan.", detail: "Live cohorts, corporate training, and self-paced learning. Taught by practitioners with real industry experience.", link: "training.html" }
  ],
  why: [
    { icon: "⚡", title: "Rapid Delivery", description: "Agile sprints, lean processes, and a team that ships fast without cutting corners on quality." },
    { icon: "🔒", title: "Security-First Approach", description: "Every line of code is written with security in mind. Penetration-tested, OWASP-compliant, and enterprise-grade." },
    { icon: "🌍", title: "Global Standards, Local Pricing", description: "Silicon Valley quality delivered at Pakistan-competitive rates. The best of both worlds for your budget." },
    { icon: "🤝", title: "Dedicated Partnership", description: "We don't just take orders — we become your technology partner with transparent communication and post-launch support." }
  ],
  process: [
    { num: "01", title: "Discovery & Strategy", description: "Deep-dive into your goals, target audience, and technical requirements to create a bulletproof project blueprint." },
    { num: "02", title: "Design & Prototype", description: "Wireframes, interactive prototypes, and UI systems that get client approval before a single line of code is written." },
    { num: "03", title: "Development & QA", description: "Agile sprints, daily standups, and rigorous testing to ship clean, performant, and scalable software." },
    { num: "04", title: "Launch & Support", description: "Deployment, monitoring, and ongoing maintenance — we stay with you long after the go-live date." }
  ],
  training: [
    { tag: "Beginner → Pro", title: "Full-Stack Web Dev", description: "React, Node.js, databases, and deployment — the complete modern stack.", duration: "16 Weeks", level: "Beginner to Pro" },
    { tag: "In-Demand", title: "AI & Prompt Engineering", description: "LLMs, RAG pipelines, fine-tuning, and real-world AI application development.", duration: "8 Weeks", level: "Intermediate" },
    { tag: "Mobile", title: "Flutter Development", description: "Cross-platform iOS & Android apps with a single beautiful codebase.", duration: "12 Weeks", level: "Beginner to Pro" },
    { tag: "Design", title: "UI/UX Mastery", description: "Figma, design systems, user research, and portfolio development.", duration: "10 Weeks", level: "All Levels" }
  ],
  testimonials: [
    { stars: 5, text: "TechGzr transformed our outdated system into a modern SaaS platform in record time. Their team's technical depth and communication are unmatched.", name: "Ahmed Khan", role: "CTO, FinanceFlow Pakistan", initials: "AK" },
    { stars: 5, text: "The mobile app they built for us exceeded every expectation. Download numbers in the first month blew our targets out of the water.", name: "Sara Rahman", role: "Founder, EduPath", initials: "SR" },
    { stars: 5, text: "Their IT training program is genuinely world-class. Three of our junior developers went through it and came out completely transformed.", name: "Muhammad Qureshi", role: "VP Engineering, LogiX", initials: "MQ" }
  ],
  about: {
    mission: "To empower businesses and individuals through world-class technology solutions and education, built with integrity from Pakistan.",
    vision: "To be South Asia's most trusted technology partner — building software that shapes industries and launches careers.",
    story: "TechGzr Private Limited was founded with a single belief: that world-class software can be built anywhere. From our offices in Rawalpindi, we've grown from a small consultancy into a full-service technology firm serving clients across Pakistan, the Middle East, Europe, and North America. We combine deep technical expertise with a culture of transparency and relentless execution."
  },
  cta: {
    heading1: "Ready to Transform",
    heading2: "Your Digital Future?",
    subtext: "Drop your email and we'll reach out within 24 hours to discuss your project."
  }
};

if (typeof module !== 'undefined') module.exports = TECHGZR_DEFAULT;
