const siteBase = "https://futurelabstudios.com";

const enterpriseLogos = [
  { name: "ITC", path: "assets/custom/itc-logo.png" },
  { name: "PepsiCo", path: "/photo/Logo/Pepsico.png" },
  { name: "Xiaomi", path: "assets/custom/xiaomi-logo.png" },
  { name: "Sony TV", path: "/photo/Logo/Sony TV.jpeg" },
  { name: "Adda247", path: "/images/client logos/Adda247.jpeg" },
  { name: "Culver Max Entertainment", path: "/images/client logos/Culver Max Entertainment.jpeg" },
  { name: "India Alternatives", path: "/photo/Logo/India Alternatives.jpeg" },
  { name: "International Money Matters", path: "/images/client logos/International Money Matters.jpeg" },
  { name: "Laqshya Media Group", path: "/photo/Logo/Laqshya Media Group.jpeg" },
  { name: "Love in Store", path: "/photo/Logo/LIS-LOGO-HQ-01.svg" },
  { name: "Playmoolah", path: "/photo/Logo/Playmoolah.jpeg" },
  { name: "Quantum Consumer Solutions", path: "/photo/Logo/Quantum Consumer Solutions.jpeg" },
  { name: "SBI", path: "/photo/Logo/SBI.svg" },
  { name: "Syngenta", path: "/photo/Logo/syngenta.svg" },
  { name: "Thermo Procus", path: "/photo/Logo/thermo_procus.png" },
  { name: "Value", path: "/photo/Logo/Value-logo.png" }
];

const socialLogos = [
  { name: "Khan Academy", path: "assets/custom/khan-academy-logo.png" },
  { name: "Catalyst Management Services", path: "/photo/Logo/Catalyst Management Services.jpeg" },
  { name: "Piramal Foundation", path: "/photo/Logo/piramal.png" },
  { name: "Access Development Services", path: "/images/client logos/Access Development Services.jpeg" },
  { name: "AISECT", path: "/images/client logos/AISECT.jpeg" },
  { name: "Development Management Institute", path: "/images/client logos/Development Management Institute.jpg" },
  { name: "Dhwani RIS", path: "/images/client logos/Dhwani RIS.jpeg" },
  { name: "i-Saksham", path: "/photo/Logo/i-Saksham.png" },
  { name: "IRMA", path: "/images/client logos/IRMA.jpeg" },
  { name: "ISDM", path: "/images/client logos/ISDM.jpeg" },
  { name: "Kaivalya Education Foundation", path: "/photo/Logo/Kaivalya Education Limited.jpeg" },
  { name: "Parivaar Mission", path: "/images/client logos/Parivaar Mission.jpeg" },
  { name: "Phicus Development Solutions", path: "/images/client logos/Phicus Development Solutions.jpeg" },
  { name: "Samaritan Help Mission", path: "/images/client logos/Samaritan Help Mission.jpeg" },
  { name: "Swami Sivananda Memorial Institute", path: "/images/client logos/Swami Sivananda Memorial Institute.png" },
  { name: "Swasti", path: "/photo/Logo/Swasti.png" }
];

const workshopPhotos = [
  {
    path: "assets/custom/patna-workshop.jpeg",
    caption: "AI Enablement Workshop for State, Division and District Officials",
    location: "Patna",
    description: "Large-format AI enablement workshop for public-sector leadership teams."
  },
  {
    path: "/photo/workshop photos/Pepsico, Gurgaon.jpeg",
    caption: "PepsiCo Leadership",
    location: "Gurgaon",
    description: "Leadership-focused AI session on adoption, productivity, and use-case mapping."
  },
  {
    path: "/photo/workshop photos/Pepsico Finance, Gurgaon.jpeg",
    caption: "PepsiCo Finance",
    location: "Gurgaon",
    description: "Hands-on workshop tailored for finance workflows, reporting, and decision support."
  },
  {
    path: "/photo/workshop photos/Catalyst Management Services, Bengaluru.jpeg",
    caption: "Catalyst Management Services",
    location: "Bengaluru",
    description: "AI adoption workshop centered on team readiness and practical project use cases."
  },
  {
    path: "/photo/workshop photos/International Money Matters, Bengaluru.jpg",
    caption: "International Money Matters",
    location: "Bengaluru",
    description: "Practical AI session on communication, planning, and internal productivity workflows."
  },
  {
    path: "/photo/workshop photos/Culver Max Entertainment Pvt Ltd.jpeg",
    caption: "Culver Max Entertainment",
    location: "Mumbai",
    description: "Workshop built for creative and operational teams in fast-moving media environments."
  },
  {
    path: "/photo/workshop photos/India Alternatives, Mumbai.jpeg",
    caption: "India Alternatives",
    location: "Mumbai",
    description: "Focused exploration of AI for research, analysis, and internal knowledge workflows."
  },
  {
    path: "/photo/workshop photos/Samaritan Mission, Kolkata.jpeg",
    caption: "Samaritan Mission",
    location: "Kolkata",
    description: "Mission-led workshop on using AI in program implementation and learning systems."
  },
  {
    path: "/photo/workshop photos/Techno India Kolkata.jpeg",
    caption: "Techno India University",
    location: "Kolkata",
    description: "Academic AI workshop combining literacy, live demos, and hands-on experimentation."
  }
];

const videos = [
  {
    title: "AI Essentials for Working Professionals",
    subtitle: "Live session featuring Shabbir Haider",
    href: "https://www.youtube.com/watch?v=AOQ2xY8Y0E4",
    image: "assets/videos/ai-essentials.jpg"
  },
  {
    title: "AI for the Social Sector",
    subtitle: "Masterclass for mission-driven organizations",
    href: "https://www.youtube.com/watch?v=cVrYnL5LlVc",
    image: "assets/videos/social-sector-masterclass.jpg"
  },
  {
    title: "IRMAn Talks: AI Productivity",
    subtitle: "Personal and professional productivity with AI",
    href: "https://www.youtube.com/watch?v=6Bv5iML2RkY",
    image: "assets/videos/irman-talk.jpg"
  },
  {
    title: "AI for Educators",
    subtitle: "Founder-led session for future-ready learning",
    href: "https://www.youtube.com/watch?v=jKp6cwDg5PI",
    image: "assets/videos/ai-for-educators.jpg"
  },
  {
    title: "Walk with an Indian Futurist",
    subtitle: "A founder-facing media conversation",
    href: "https://www.youtube.com/watch?v=ULsLh4IjXy0",
    image: "assets/videos/futurist-walk.jpg"
  }
];

const commonTools = [
  "ChatGPT",
  "Claude",
  "Canva AI",
  "Notion AI",
  "DALL·E",
  "Midjourney",
  "RAG Copilots",
  "Knowledge Chatbots",
  "Voice Agents",
  "Automation Workflows",
  "Internal AI Assistants",
  "AI Productivity Systems"
];

const enterpriseTools = [
  {
    title: "Athena",
    description: "AI knowledge and productivity support for enterprise teams working across internal documents, workflows, and decision support.",
    image: "assets/custom/tool-athena.jpeg",
    imageFit: "contain",
    imagePosition: "center top"
  },
  {
    title: "SalesEasy",
    description: "An AI-powered sales companion designed for market intelligence, guided selling, and faster field decision support.",
    image: "assets/custom/tool-saleseasy.jpeg",
    imageFit: "contain",
    imagePosition: "center top"
  },
  {
    title: "Custom RAG Copilots",
    description: "Internal knowledge assistants for enterprise teams working across policies, reports, training materials, and operational documents.",
    image: "assets/custom/tool-rag-copilot-placeholder.svg",
    imageFit: "cover",
    imagePosition: "center"
  },
  {
    title: "AI Voice and Workflow Agents",
    description: "Operational agents and automations that help teams streamline repetitive internal processes.",
    image: "assets/custom/tool-workflow-agents-placeholder.svg",
    imageFit: "cover",
    imagePosition: "center"
  }
];

const socialTools = [
  {
    title: "Sachiv Ji",
    description: "A voice-led governance support tool designed to help local leaders access practical information faster.",
    image: "assets/custom/tool-sachiv-ji.jpeg",
    imageFit: "contain",
    imagePosition: "center top"
  },
  {
    title: "Sweety Didi",
    description: "A support and information platform built to make practical access and guidance more usable for underserved communities.",
    image: "assets/custom/tool-sweety-didi.jpeg",
    imageFit: "contain",
    imagePosition: "center top"
  },
  {
    title: "AI Prison OS",
    description: "An AI-led operating layer intended to support rehabilitation and reintegration-oriented prison systems.",
    image: "assets/custom/tool-ai-prison-os-placeholder.svg",
    imageFit: "cover",
    imagePosition: "center"
  },
  {
    title: "Social Analytics Tools",
    description: "Impact-tracking and decision-support tools for organizations working in development, learning, and social change.",
    image: "assets/custom/tool-social-analytics-placeholder.svg",
    imageFit: "cover",
    imagePosition: "center"
  }
];

const testimonials = [
  { name: "ITC Testimonial", path: "Testimonials/ITC Testimonial.png" },
  { name: "PepsiCo Testimonial", path: "Testimonials/Pepsico Testimonial.png" },
  { name: "Xiaomi Testimonial", path: "Testimonials/Xiaomi Testimonial.png" },
  { name: "Quantum Testimonial", path: "Testimonials/Quantum Testimonial.png" },
  { name: "LoveInStore Testimonial", path: "Testimonials/Aditya Testimonial.png" },
  { name: "Piramal Foundation Testimonial", path: "Testimonials/Manmohan Singh Testimonial.png" }
];

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const progressBar = document.querySelector(".scroll-progress");

const toAssetUrl = (path) => {
  if (path.startsWith("http")) return path;
  if (!path.startsWith("/")) return encodeURI(path);
  return encodeURI(siteBase + path);
};

const renderLogoSection = (selector, items) => {
  const container = document.querySelector(selector);
  if (!container) return;

  container.innerHTML = items
    .map(
      (logo) => `
        <article class="logo-card" aria-label="${logo.name}">
          <div class="logo-media">
            <img src="${toAssetUrl(logo.path)}" alt="${logo.name} logo">
          </div>
        </article>
      `
    )
    .join("");
};

const renderTestimonials = () => {
  const container = document.querySelector("#testimonial-grid");
  if (!container) return;

  container.innerHTML = testimonials
    .map(
      (item) => `
        <figure class="testimonial-card">
          <img src="${toAssetUrl(item.path)}" alt="${item.name}">
        </figure>
      `
    )
    .join("");
};

const renderWorkshopGallery = () => {
  const container = document.querySelector("#workshop-gallery");
  if (!container) return;

  container.innerHTML = workshopPhotos
    .map(
      (photo) => `
        <figure class="workshop-card">
          <img src="${toAssetUrl(photo.path)}" alt="${photo.caption}">
          <figcaption class="workshop-card-body">
            <strong>${photo.caption}</strong>
            <p>${photo.description}</p>
            <span>${photo.location}</span>
          </figcaption>
        </figure>
      `
    )
    .join("");
};

const renderVideos = () => {
  const container = document.querySelector("#video-grid");
  if (!container) return;

  container.innerHTML = videos
    .map(
      (video) => `
        <a class="video-card" href="${video.href}" target="_blank" rel="noreferrer">
          <div class="video-thumb">
            <img src="${video.image}" alt="${video.title}">
            <span class="video-play" aria-hidden="true"></span>
          </div>
          <div class="video-meta">
            <h3>${video.title}</h3>
            <p>${video.subtitle}</p>
          </div>
        </a>
      `
    )
    .join("");
};

const renderToolChips = () => {
  const container = document.querySelector("#tool-chip-list");
  if (!container) return;

  container.innerHTML = commonTools
    .map((tool) => `<span>${tool}</span>`)
    .join("");
};

const renderBuildCards = (selector, items) => {
  const container = document.querySelector(selector);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item) => {
        const mediaStyle = [
          item.imageFit ? `--tool-image-fit:${item.imageFit}` : "",
          item.imagePosition ? `--tool-image-position:${item.imagePosition}` : ""
        ]
          .filter(Boolean)
          .join(";");

        return `
        <article class="build-card">
          ${
            item.image
              ? `
                <div class="build-media">
                  <img src="${toAssetUrl(item.image)}" alt="${item.title}"${mediaStyle ? ` style="${mediaStyle}"` : ""}>
                </div>
              `
              : ""
          }
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `;
      }
    )
    .join("");
};

const initNav = () => {
  if (!navToggle || !siteNav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
};

const initProgress = () => {
  if (!progressBar) return;

  const setProgress = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  setProgress();
  window.addEventListener("scroll", setProgress, { passive: true });
  window.addEventListener("resize", setProgress);
};

renderLogoSection("#enterprise-logo-grid", enterpriseLogos);
renderLogoSection("#social-logo-grid", socialLogos);
renderTestimonials();
renderWorkshopGallery();
renderVideos();
renderToolChips();
renderBuildCards("#enterprise-tools-grid", enterpriseTools);
renderBuildCards("#social-tools-grid", socialTools);
initNav();
initProgress();
