const siteBase = "https://futurelabstudios.com";

const clientLogos = [
  { name: "Access Development Services", path: "/images/client logos/Access Development Services.jpeg" },
  { name: "ACH Management Services", path: "/images/client logos/ACH Management Services.jpeg" },
  { name: "Adda247", path: "/images/client logos/Adda247.jpeg" },
  { name: "AISECT", path: "/images/client logos/AISECT.jpeg" },
  { name: "Catalyst Management Services", path: "/photo/Logo/Catalyst Management Services.jpeg" },
  { name: "Culver Max Entertainment", path: "/images/client logos/Culver Max Entertainment.jpeg" },
  { name: "Development Management Institute", path: "/images/client logos/Development Management Institute.jpg" },
  { name: "Dhwani RIS", path: "/images/client logos/Dhwani RIS.jpeg" },
  { name: "i-Saksham", path: "/photo/Logo/i-Saksham.png" },
  { name: "India Alternatives", path: "/photo/Logo/India Alternatives.jpeg" },
  { name: "International Money Matters", path: "/images/client logos/International Money Matters.jpeg" },
  { name: "IRMA", path: "/images/client logos/IRMA.jpeg" },
  { name: "ISDM", path: "/images/client logos/ISDM.jpeg" },
  { name: "Kaivalya Education Foundation", path: "/photo/Logo/Kaivalya Education Limited.jpeg" },
  { name: "Laqshya Media Group", path: "/photo/Logo/Laqshya Media Group.jpeg" },
  { name: "Love in Store", path: "/photo/Logo/LIS-LOGO-HQ-01.svg" },
  { name: "Parivaar Mission", path: "/images/client logos/Parivaar Mission.jpeg" },
  { name: "Phicus Development Solutions", path: "/images/client logos/Phicus Development Solutions.jpeg" },
  { name: "PepsiCo", path: "/photo/Logo/Pepsico.png" },
  { name: "Piramal", path: "/photo/Logo/piramal.png" },
  { name: "Playmoolah", path: "/photo/Logo/Playmoolah.jpeg" },
  { name: "Quantum Consumer Solutions", path: "/photo/Logo/Quantum Consumer Solutions.jpeg" },
  { name: "Samaritan Help Mission", path: "/images/client logos/Samaritan Help Mission.jpeg" },
  { name: "SBI", path: "/photo/Logo/SBI.svg" },
  { name: "Sony TV", path: "/photo/Logo/Sony TV.jpeg" },
  { name: "Swami Sivananda Memorial Institute", path: "/images/client logos/Swami Sivananda Memorial Institute.png" },
  { name: "Swasti", path: "/photo/Logo/Swasti.png" },
  { name: "Syngenta", path: "/photo/Logo/syngenta.svg" },
  { name: "Thermo Procus", path: "/photo/Logo/thermo_procus.png" },
  { name: "Value", path: "/photo/Logo/Value-logo.png" }
];

const workshopPhotos = [
  { path: "/photo/workshop photos/Access Development Services, New Delhi.jpeg", caption: "Access Development Services", location: "New Delhi" },
  { path: "/photo/workshop photos/Catalyst Management Services, Bengaluru.jpeg", caption: "Catalyst Management Services", location: "Bengaluru" },
  { path: "/photo/workshop photos/Culver Max Entertainment Pvt Ltd.jpeg", caption: "Culver Max Entertainment", location: "Mumbai" },
  { path: "/photo/workshop photos/Cybervahak, Mumbai.jpeg", caption: "Cybervahak", location: "Mumbai" },
  { path: "/photo/workshop photos/DMI Patna.jpeg", caption: "DMI Patna", location: "Patna" },
  { path: "/photo/workshop photos/India Alternatives, Mumbai.jpeg", caption: "India Alternatives", location: "Mumbai" },
  { path: "/photo/workshop photos/International Money Matters, Bengaluru.jpg", caption: "International Money Matters", location: "Bengaluru" },
  { path: "/photo/workshop photos/Pepsico Finance, Gurgaon.jpeg", caption: "PepsiCo Finance Team", location: "Gurgaon" },
  { path: "/photo/workshop photos/Pepsico, Gurgaon.jpeg", caption: "PepsiCo Leadership", location: "Gurgaon" },
  { path: "/photo/workshop photos/Samaritan Mission, Kolkata.jpeg", caption: "Samaritan Mission", location: "Kolkata" },
  { path: "/photo/workshop photos/Techno India Kolkata.jpeg", caption: "Techno India University", location: "Kolkata" }
];

const chunkItems = (items, size) => {
  const chunks = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
};

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
  "Custom Copilots",
  "Knowledge Chatbots",
  "Voice Agents",
  "Automation Workflows",
  "RAG Systems",
  "AI Productivity Stacks"
];

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const progressBar = document.querySelector(".scroll-progress");
const renderLogoGrid = () => {
  const container = document.querySelector("#logo-grid");
  if (!container) return;

  const seen = new Set();
  const items = clientLogos.filter((logo) => {
    if (seen.has(logo.name)) return false;
    seen.add(logo.name);
    return true;
  });

  container.innerHTML = items
    .map(
      (logo) => `
        <a
          class="logo-card"
          href="${encodeURI(siteBase + logo.path)}"
          target="_blank"
          rel="noreferrer"
          aria-label="Open ${logo.name} logo source"
        >
          <img src="${encodeURI(siteBase + logo.path)}" alt="${logo.name} logo">
          <span>${logo.name}</span>
        </a>
      `
    )
    .join("");
};

const renderWorkshopGallery = () => {
  const container = document.querySelector("#workshop-gallery");
  if (!container) return;

  const slides = chunkItems(workshopPhotos, 2);

  container.innerHTML = slides
    .map(
      (slide) => `
        <div class="gallery-slide">
          ${slide
            .map(
              (photo) => `
                <figure class="gallery-card">
                  <img src="${encodeURI(siteBase + photo.path)}" alt="${photo.caption}">
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
  const viewport = document.querySelector("#workshop-gallery-viewport");
  const track = document.querySelector("#workshop-gallery");
  const prevButton = document.querySelector("#gallery-prev");
  const nextButton = document.querySelector("#gallery-next");
  const dots = document.querySelector("#workshop-gallery-dots");

  if (!viewport || !track || !prevButton || !nextButton || !dots) return;

  const slides = () => Array.from(track.querySelectorAll(".gallery-slide"));
  const totalSlides = slides().length;
  let currentIndex = 0;

  const updateControls = () => {
    dots.querySelectorAll(".gallery-dot").forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });

    const isSingleSlide = totalSlides <= 1;
    prevButton.disabled = isSingleSlide;
    nextButton.disabled = isSingleSlide;
  };

  const setPage = (pageIndex) => {
    if (!totalSlides) return;

    currentIndex = (pageIndex + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateControls();
  };

  const renderDots = () => {
    dots.innerHTML = slides()
      .map(
        (_slide, index) => `
          <button
            class="gallery-dot${index === currentIndex ? " is-active" : ""}"
            type="button"
            aria-label="Go to workshop slide ${index + 1}"
            aria-pressed="${index === currentIndex}"
          ></button>
        `
      )
      .join("");

    dots.querySelectorAll(".gallery-dot").forEach((dot, index) => {
      dot.addEventListener("click", () => setPage(index));
    });
  };

  prevButton.addEventListener("click", () => setPage(currentIndex - 1));
  nextButton.addEventListener("click", () => setPage(currentIndex + 1));

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPage(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPage(currentIndex + 1);
    }
  });

  renderDots();
  setPage(0);
};

const renderVideos = () => {
  const container = document.querySelector("#video-grid");
  if (!container) return;

  container.innerHTML = videos
    .map(
      (video) => `
        <a class="video-card reveal" href="${video.href}" target="_blank" rel="noreferrer">
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

renderLogoGrid();
renderWorkshopGallery();
initWorkshopCarousel();
renderVideos();
renderToolChips();
initNav();
initProgress();
