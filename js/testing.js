// const article = document.querySelector("#resourceText");
// const words = document.querySelectorAll("#resourceContent span");

// const animateWords = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;

//   // Animate each word with a delay
//   words.forEach((word, i) => {
//     setTimeout(() => {
//       word.classList.add("article__visible");
//     }, i * 300); // 300ms delay for each word
//   });

//   // Optional: Make browser read the words
//   const speech = new SpeechSynthesisUtterance();
//   speech.text = entry.target.innerText;
//   speech.lang = "en-US";
//   window.speechSynthesis.speak(speech);

//   //   observer.unobserve(entry.target); // Stop observing once the effect is applied
// };

// // Intersection Observer setup
// const observer = new IntersectionObserver(animateWords, {
//   root: null,
//   threshold: 0.2,
// });

// observer.observe(article);

document.addEventListener("DOMContentLoaded", function () {
  const article = document.querySelector("#resourceText");
  const words = document.querySelectorAll("#resourceContent span"); // Select all the span elements inside the content

  // Function to animate words
  const animateWords = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return; // Don't trigger if not visible

    // Loop through words and apply the visible class with a delay
    words.forEach((word, i) => {
      setTimeout(() => {
        word.classList.add("article__visible"); // Add visible class with delay
      }, i * 300); // Adjust delay for each word
    });

    // Stop observing after animation is triggered
    observer.unobserve(entry.target);
  };

  // IntersectionObserver setup
  const observer = new IntersectionObserver(animateWords, {
    root: null, // Use viewport as the root
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  // Observe the article element
  observer.observe(article);
});

// const header = document.querySelector("header");
// const nav = document.querySelector("nav");
// const section1 = document.querySelector(".focus");
// const resourseHub = document.querySelector(".resource_hub");
// const article = document.querySelector(".article__hidden");
// const resourceHub = document.querySelector(".resource_hub");
// const blogSection = document.querySelector(".news_blog");

// /*sticky navbar */
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) nav.classList.add("navbar_sticky");
//   else nav.classList.remove("navbar_sticky");
// };

// const navObs = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: "-15px",
// });
// navObs.observe(header);

// /*focus section observer*/
// const fadeIn = function (entries, observer) {
//   const [entry] = entries;
//   // console.log(entry);
//   if (!entry.isIntersecting) return;
//   entry.target.classList.add("slide_in");
// };
// const section1Obs = new IntersectionObserver(fadeIn, {
//   root: null,
//   threshold: 0.3,
//   rootMargin: "200px",
// });

// section1Obs.observe(section1);

// /*esource Hub Observer*/
// const popIn = function (entries, observer) {
//   const [entry] = entries;

//   // console.log(entry);
//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("article__hidden");
//   entry.target.classList.add("article__visible");

//   observer.unobserve(entry.target);
// };

// const resourceObs = new IntersectionObserver(popIn, {
//   root: null,
//   threshold: 0.2,
// });

// resourceObs.observe(article); // Observe the article element

// /*blog section*/

// const slidIn = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;
//   entry.target.classList.add("animate");
// };
// const blogObserver = new IntersectionObserver(slidIn, {
//   root: null,
//   threshold: 0.4,
// });

// blogObserver.observe(blogSection);
