const headerEl = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const wrapper = document.querySelector(".wrapper");

const tabsContentEls = document.querySelectorAll(".tabs__content");
const tabsLinks = document.querySelectorAll(".tabs__link");

const activeTab = document.querySelector(".tabs__link--active");

const currentYear = document.querySelector(".copyright__year");

currentYear.innerHTML = new Date().getFullYear();


const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", function(event){
    event.preventDefault();
    const href = link.getAttribute('href');
    if(href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else if (href !== "#" && href.startsWith("#")) {
      const target = document.querySelector(href);
      headerEl.classList.remove("nav--open");
      wrapper.classList.remove("u-overflow-hidden");
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});


menuBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav--open");
  wrapper.classList.toggle("u-overflow-hidden");
});

const swiper = new Swiper(".swiper", {
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
});


tabsLinks.forEach(function(link){
  link.addEventListener("click", function(event){
    event.preventDefault();

    if(link.classList.contains("active")) {
      return;
    }

    for (let i = 0; i < tabsLinks.length; i++) {
      tabsLinks[i].classList.remove("active");
      tabsContentEls[i].style.display = "none";
    }

    link.classList.add("active");

    const goal = link.getAttribute("data-for");

    const currentTabContent = [...tabsContentEls].filter((tabs) =>
      tabs.getAttribute("data-goal") === goal
    );

    if (currentTabContent.length > 0) {
      currentTabContent[0].style.display = "block";
    }
  });
})


activeTab.click();