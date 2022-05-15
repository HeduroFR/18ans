// let scrollPercentage = () => {
//     let scrollProgress = document.getElementById("progress");
//     let progressValue = document.getElementById("progress-value");
//     let pos = document.documentElement.scrollTop;
//     let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let scrollValue = Math.round( pos * 100 / calcHeight);

//     scrollProgress.style.background = `conic-gradient(#008fff ${scrollValue}%, rgba(255, 255, 255, 0.2) ${scrollValue}%)`;
//     progressValue.textContent = `${scrollValue}%`;
// }

// window.onscroll = scrollPercentage;
// window.onload = scrollPercentage;

// contactBtn.addEventListener('click',()=>{
//     window.scrollTo(0,document.body.scrollHeight);
// })
// Navbar ScrollSpy
let sections = document.querySelectorAll(".page-scroll");
let navLinks = document.querySelectorAll("header ul li a");
let temp = sections[sections.length - 1];

sections.forEach((section) => {
  section.addEventListener("click", () => {
    let id = section.getAttribute("id");
    navLinks.forEach((links) => {
      links.classList.remove("active");
      document.querySelector(".page[href*=" + id + "]").classList.add("active");
    });
  });
});

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    let viewportHeight = window.innerHeight;
    let viewportWidth = window.innerWidth;
    let scrollheight = document.body.scrollHeight;
    if (top + viewportHeight / 2 >= offset && top < offset + height) {
      flg = 1;
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".page[href*=" + id + "]")
          .classList.add("active");
      });
    }
    if (top < 100) {
      let id = "top";
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".page[href*=" + id + "]")
          .classList.add("active");
      });
    }

    if (viewportWidth < 900) {
      if (
        (top + viewportHeight - scrollheight <= viewportWidth / 10 &&
          top + viewportHeight - scrollheight > 0) ||
        (scrollheight - top - viewportHeight <= viewportWidth / 10 &&
          scrollheight - top - viewportHeight > 0)
      ) {
        let id = "contact";
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(".page[href*=" + id + "]")
            .classList.add("active");
        });
      }
    }
  });
};

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "12/25/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("daysText").innerText = Math.floor(
          distance / day
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        ));
    }, 0);
})();

$(function () {
  var body = document.querySelector("body");
  var $cursor = $(".cursor");
  function cursormover(e) {
    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
      stagger: 0.002,
    });
  }
  function cursorhover(e) {
    gsap.to($cursor, {
      scale: 1.4,
      opacity: 1,
    });
  }
  function cursor(e) {
    gsap.to($cursor, {
      scale: 1,
      opacity: 0.6,
    });
  }
  $(window).on("mousemove", cursormover);
  $(".menubar").hover(cursorhover, cursor);
  $("a").hover(cursorhover, cursor);
  $(".navigation-close").hover(cursorhover, cursor);
});

var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");

var set_clock = setInterval(function clock() {
  var date_now = new Date();
  var hr = date_now.getHours();
  var min = date_now.getMinutes();
  var sec = date_now.getSeconds();

  var calc_hr = hr * 30 + min / 2;
  var calc_min = min * 6;
  var calc_sec = sec * 6;

  hour.style.transform = "rotate(" + calc_hr + "deg)";
  minute.style.transform = "rotate(" + calc_min + "deg)";
  seconds.style.transform = "rotate(" + calc_sec + "deg)";
}, 1000);
