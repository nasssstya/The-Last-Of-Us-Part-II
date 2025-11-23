//character
const nav = document.querySelector("nav");
const underline = document.querySelector(".underline");
const items = document.querySelectorAll(".underline-block");

let active = items[0];
function moveUnderline(target) {
  const rect = target.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();

  underline.style.width = `${rect.width}px`;
  underline.style.left = `${rect.left - navRect.left}px`;
  underline.style.top = `${rect.bottom - navRect.top + 4}px`;
}



moveUnderline(active.querySelector("a"));

items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    moveUnderline(item.querySelector("a"));
  });

  item.addEventListener("mouseleave", () => {
    moveUnderline(active.querySelector("a"));
  });
});








//main

const faqBlocks = document.querySelectorAll('.faq__questionBlock');

faqBlocks.forEach(block => {
  block.addEventListener('click', () => {
    faqBlocks.forEach(b => {
      if (b !== block) b.classList.remove('active');
    });
    block.classList.toggle('active');
  });
});



const imageBlocks = document.querySelectorAll('.main__imageBlock');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

imageBlocks.forEach(el => observer.observe(el));





const fadeSections = document.querySelectorAll("section");

fadeSections.forEach(section => section.classList.add("fade-section"));

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  rootMargin: "0px 0px -5% 0px",
  threshold: 0
});

fadeSections.forEach(section => fadeObserver.observe(section));



const btn = document.querySelector('.trailerButton');
const video = document.getElementById('trailerVideo');

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    video.style.display = 'block';
    video.muted = false; 
    video.play().catch(err => console.log(err));
});

video.addEventListener('click', () => {
    if (video.paused) video.play();
    else video.pause();
});



