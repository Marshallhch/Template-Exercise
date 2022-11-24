// 1. Sticky Header : 스크롤 시 헤더가 따라다니는 기능 //
// 2. Header Menu Toggle //
// 3. Navigation Menu Design : 해당 섹션에 네비게이션 활성화 및 디자인 변경 //
// 4. Question Section Accordion //
// 5. Reveal Effect //
// 6. Mobile Navigation Design

/*======= Header Sticky =======*/
const header = document.querySelector(".header");
const stickyHeader = () => {
  const scrY = window.scrollY;
  if (scrY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
/*==============*/

/*======= Menu Active On Each Sections =======*/
const sections = document.querySelectorAll("section");
const headerHeight = document.querySelector("header").offsetHeight;

const activateNavMenu = () => {
  const scrY = window.scrollY;
  sections.forEach((section) => {
    const secHeight = section.offsetHeight; // section 요소의 높이값
    const secTop = section.offsetTop - headerHeight; // section 요소의 윗쪽 옵셋값 - 헤더의 높이
    const secId = section.getAttribute("id"); // 각 섹션의 아이디값 저장

    if (scrY > secTop && scrY <= secTop + secHeight) {
      // && : 합성곱 - 양쪽 모두 true일 경우 true
      // || : 합성합 - 양쪽 중 하나만 true일 경우 true
      document.querySelector(`.nav-${secId}`).classList.add("active");
    } else {
      document.querySelector(`.nav-${secId}`).classList.remove("active");
    }
  });
  if (scrY === 0) {
    document.querySelector(".nav-home").classList.add("active");
  }
};
/*==============*/

window.addEventListener("scroll", () => {
  stickyHeader();
  activateNavMenu();
});

/*======= Header Menu Toggle =======*/
const menu = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".nav-list");
const body = document.querySelector("body");
const scrY = window.scrollY;

const showMenu = () => {
  menu.children[0].setAttribute("class", "ri-close-line");
  mobileMenu.classList.add("show");
  body.style.overflow = "hidden";

  if (scrY === 0) {
    header.style.boxShadow = "0 2px 2px #efefef";
  }
};

const hideMenu = () => {
  menu.children[0].setAttribute("class", "ri-menu-line");
  mobileMenu.classList.remove("show");
  menu.classList.remove("close");
  body.style.overflow = "auto";
  if (scrY === 0) {
    header.setAttribute("style", "");
  }
};

const toggleMenu = (event) => {
  event.preventDefault();
  // console.log(this); // 화살표 함수는 this에 전역객체 window를 호출한다
  // console.log(event);
  // console.log(event.target);
  const target = event.currentTarget;

  // console.log(target.childNodes);
  // console.log(target.children);
  target.classList.toggle("close");
  if (target.classList.contains("close")) {
    // target.firstElementChild.setAttribute("class", "ri-close-line");
    // target.children[0].setAttribute("class", "ri-close-line");
    // mobileMenu.classList.add("show");
    // body.style.overflow = "hidden";

    // if (scrY === 0) {
    //   header.style.boxShadow = "0 2px 2px #efefef";
    // }
    showMenu();
  } else {
    // target.firstElementChild.setAttribute("class", "ri-menu-line");
    // target.children[0].setAttribute("class", "ri-menu-line");
    // mobileMenu.classList.remove("show");
    // body.style.overflow = "auto";
    // if (scrY === 0) {
    //   header.setAttribute("style", "");
    // }
    hideMenu();
  }
};

body.addEventListener("click", (e) => {
  if (!header.contains(e.target)) {
    // menu.children[0].setAttribute("class", "ri-menu-line");
    // mobileMenu.classList.remove("show");
    // body.style.overflow = "auto";
    // if (scrY === 0) {
    //   header.setAttribute("style", "");
    // }
    hideMenu();
  }
});

menu.addEventListener("click", toggleMenu);
/*==============*/

/*======= Question Section Accordion =======*/
const accHeaders = document.querySelectorAll(".question-box");

const activateAccordion = (e) => {
  // console.log(e.currentTarget);
  const $this = e.currentTarget;
  $this.classList.toggle("active");
};

accHeaders.forEach((header) => {
  header.addEventListener("click", activateAccordion);
});
/*==============*/

/*======= Element Fade Up Effect(reveal) =======*/
const sr = ScrollReveal({
  reset: false,
  duration: 1000,
  origin: "bottom",
  distance: "50px",
});
sr.reveal(".home-box");
sr.reveal(".about-box");
sr.reveal(".step-box", { interval: 200 });
sr.reveal(".item", { interval: 200 });

// sr.reveal(".home-box", { duration: 1000, origin: "bottom", distance: "50px" });
/*==============*/
