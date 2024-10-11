const articles = document.querySelectorAll(".article__hidden");
const sliders = document.querySelectorAll(".sliding");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

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
const popIn = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      entry.target.classList.remove("article__hidden");
      entry.target.classList.add("article__visible");
    }
  });
};

// Create an IntersectionObserver
const articleObserver = new IntersectionObserver(popIn, {
  root: null,
  threshold: 0.5,
});

articles.forEach((article) => {
  articleObserver.observe(article);
});

// slider Observer
const slidIn = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
  });
};

const sliderObserver = new IntersectionObserver(slidIn, {
  root: null,
  threshold: 0.5,
});

sliders.forEach((slider) => {
  sliderObserver.observe(slider);
});

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
