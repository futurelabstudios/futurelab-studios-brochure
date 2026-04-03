const siteBase = "https://futurelabstudios.com";

const enterpriseLogos = [
  { name: "Adda247", path: "/images/client logos/Adda247.jpeg" },
  { name: "Catalyst Management Services", path: "/photo/Logo/Catalyst Management Services.jpeg" },
  { name: "Culver Max Entertainment", path: "/images/client logos/Culver Max Entertainment.jpeg" },
  { name: "India Alternatives", path: "/photo/Logo/India Alternatives.jpeg" },
  { name: "International Money Matters", path: "/images/client logos/International Money Matters.jpeg" },
  { name: "Laqshya Media Group", path: "/photo/Logo/Laqshya Media Group.jpeg" },
  { name: "Love in Store", path: "/photo/Logo/LIS-LOGO-HQ-01.svg" },
  { name: "PepsiCo", path: "/photo/Logo/Pepsico.png" },
  { name: "Playmoolah", path: "/photo/Logo/Playmoolah.jpeg" },
  { name: "Quantum Consumer Solutions", path: "/photo/Logo/Quantum Consumer Solutions.jpeg" },
  { name: "SBI", path: "/photo/Logo/SBI.svg" },
  { name: "Sony TV", path: "/photo/Logo/Sony TV.jpeg" },
  { name: "Syngenta", path: "/photo/Logo/syngenta.svg" },
  { name: "Thermo Procus", path: "/photo/Logo/thermo_procus.png" },
  { name: "Value", path: "/photo/Logo/Value-logo.png" }
];

const socialLogos = [
  { name: "Access Development Services", path: "/images/client logos/Access Development Services.jpeg" },
  { name: "ACH Management Services", path: "/images/client logos/ACH Management Services.jpeg" },
  { name: "AISECT", path: "/images/client logos/AISECT.jpeg" },
  { name: "Development Management Institute", path: "/images/client logos/Development Management Institute.jpg" },
  { name: "Dhwani RIS", path: "/images/client logos/Dhwani RIS.jpeg" },
  { name: "i-Saksham", path: "/photo/Logo/i-Saksham.png" },
  { name: "IRMA", path: "/images/client logos/IRMA.jpeg" },
  { name: "ISDM", path: "/images/client logos/ISDM.jpeg" },
  { name: "Kaivalya Education Foundation", path: "/photo/Logo/Kaivalya Education Limited.jpeg" },
  { name: "Parivaar Mission", path: "/images/client logos/Parivaar Mission.jpeg" },
  { name: "Phicus Development Solutions", path: "/images/client logos/Phicus Development Solutions.jpeg" },
  { name: "Piramal Foundation", path: "/photo/Logo/piramal.png" },
  { name: "Samaritan Help Mission", path: "/images/client logos/Samaritan Help Mission.jpeg" },
  { name: "Swami Sivananda Memorial Institute", path: "/images/client logos/Swami Sivananda Memorial Institute.png" },
  { name: "Swasti", path: "/photo/Logo/Swasti.png" }
];

const workshopPhotos = [
  {
    path: "assets/custom/patna-workshop.jpeg",
    caption: "AI Enablement Workshop for State, Division and District Officials",
    location: "Patna"
  },
  {
    path: "/photo/workshop photos/Pepsico, Gurgaon.jpeg",
    caption: "PepsiCo Leadership",
    location: "Gurgaon"
  },
  {
    path: "/photo/workshop photos/Catalyst Management Services, Bengaluru.jpeg",
    caption: "Catalyst Management Services",
    location: "Bengaluru"
  },
  {
    path: "/photo/workshop photos/International Money Matters, Bengaluru.jpg",
    caption: "International Money Matters",
    location: "Bengaluru"
  },
  {
    path: "/photo/workshop photos/Culver Max Entertainment Pvt Ltd.jpeg",
    caption: "Culver Max Entertainment",
    location: "Mumbai"
  },
  {
    path: "/photo/workshop photos/India Alternatives, Mumbai.jpeg",
    caption: "India Alternatives",
    location: "Mumbai"
  },
  {
    path: "/photo/workshop photos/Samaritan Mission, Kolkata.jpeg",
    caption: "Samaritan Mission",
    location: "Kolkata"
  },
  {
    path: "/photo/workshop photos/Techno India Kolkata.jpeg",
    caption: "Techno India University",
    location: "Kolkata"
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
    title: "Custom RAG Copilots",
    description: "Internal knowledge assistants for enterprise teams working across policies, reports, training materials, and operational documents."
  },
  {
    title: "Knowledge Chatbots",
    description: "Domain-specific assistants that make organizational information searchable, conversational, and more usable."
  },
  {
    title: "Field Sales AI Tools",
    description: "Tools for reporting, planning, follow-ups, and faster field-level decision support."
  },
  {
    title: "AI Voice and Workflow Agents",
    description: "Operational agents and automations that help teams streamline repetitive internal processes."
  }
];

const socialTools = [
  {
    title: "SachivG",
    description: "An AI-powered voice agent designed to support Sarpanch leaders and improve access to governance-related information."
  },
  {
    title: "Sweety Didi",
    description: "A support and information platform built to make practical access and guidance more usable for underserved communities."
  },
  {
    title: "AI Prison OS",
    description: "An AI-led operating layer intended to support rehabilitation and reintegration-oriented prison systems."
  },
  {
    title: "Social Analytics Tools",
    description: "Impact-tracking and decision-support tools for organizations working in development, learning, and social change."
  }
];

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const progressBar = document.querySelector(".scroll-progress");

const toAssetUrl = (path) => {
  if (path.startsWith("http") || path.startsWith("assets/")) return path;
  return encodeURI(siteBase + path);
};

const chunkItems = (items, size) => {
  const chunks = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
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
          <span>${logo.name}</span>
        </article>
      `
    )
    .join("");
};

const renderWorkshopGallery = () => {
  const container = document.querySelector("#workshop-gallery");
  if (!container) return;

  container.innerHTML = chunkItems(workshopPhotos, 2)
    .map(
      (slide) => `
        <div class="gallery-slide">
          ${slide
            .map(
              (photo) => `
                <figure class="gallery-card">
                  <img src="${toAssetUrl(photo.path)}" alt="${photo.caption}">
                  <figcaption>
                    <strong>${photo.caption}</strong>
                    <span>${photo.location}</span>
                  </figcaption>
                </figure>
              `
            )
            .join("")}
        </div>
      `
    )
    .join("");
};

const initWorkshopCarousel = () => {
  const track = document.querySelector("#workshop-gallery");
  const prevButton = document.querySelector("#gallery-prev");
  const nextButton = document.querySelector("#gallery-next");
  const dots = document.querySelector("#workshop-gallery-dots");

  if (!track || !prevButton || !nextButton || !dots) return;

  const slides = Array.from(track.querySelectorAll(".gallery-slide"));
  const totalSlides = slides.length;
  let currentIndex = 0;

  const updateControls = () => {
    dots.querySelectorAll(".gallery-dot").forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });

    prevButton.disabled = totalSlides <= 1;
    nextButton.disabled = totalSlides <= 1;
  };

  const setPage = (pageIndex) => {
    if (!totalSlides) return;
    currentIndex = (pageIndex + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateControls();
  };

  dots.innerHTML = slides
    .map(
      (_slide, index) => `
        <button
          class="gallery-dot${index === 0 ? " is-active" : ""}"
          type="button"
          aria-label="Go to workshop slide ${index + 1}"
          aria-pressed="${index === 0}"
        ></button>
      `
    )
    .join("");

  dots.querySelectorAll(".gallery-dot").forEach((dot, index) => {
    dot.addEventListener("click", () => setPage(index));
  });

  prevButton.addEventListener("click", () => setPage(currentIndex - 1));
  nextButton.addEventListener("click", () => setPage(currentIndex + 1));

  setPage(0);
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
      (item) => `
        <article class="build-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
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
renderWorkshopGallery();
initWorkshopCarousel();
renderVideos();
renderToolChips();
renderBuildCards("#enterprise-tools-grid", enterpriseTools);
renderBuildCards("#social-tools-grid", socialTools);
initNav();
initProgress();
