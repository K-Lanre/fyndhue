/* DOM elements */
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const section1 = document.querySelector(".focus");
const resourceHub = document.querySelector(".resource_hub");
const article = document.querySelector(".article__hidden");
const blogSection = document.querySelector(".news_blog");

/* Sticky navbar observer */
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("navbar_sticky");
  } else {
    nav.classList.remove("navbar_sticky");
  }
};

const navObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-15px",
});

navObs.observe(header);

/* Single observer callback for all other sections */
const sectionObserverCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    // Focus section slide in
    if (entry.target.classList.contains("focus")) {
      entry.target.classList.add("slide_in");
    }

    // Resource Hub pop in
    if (entry.target.classList.contains("article__hidden")) {
      entry.target.classList.remove("article__hidden");
      entry.target.classList.add("article__visible");
      observer.unobserve(entry.target); // Optional: unobserve after it becomes visible
    }

    // Blog section slide in
    if (entry.target.classList.contains("news_blog")) {
      entry.target.classList.add("animate");
    }
  });
};

/* Create a single IntersectionObserver for content sections */
const sectionObserver = new IntersectionObserver(sectionObserverCallback, {
  root: null,
  threshold: 0.4, // Adjust as needed for section visibility
  rootMargin: "0px",
});

/* Observe multiple sections with the content observer */
sectionObserver.observe(section1);
sectionObserver.observe(resourceHub);
sectionObserver.observe(article);
sectionObserver.observe(blogSection);

// lazy loading
const image = document.querySelector("img[data-src]");
const loadImages = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0.1,
});
imageObserver.observe(image);
