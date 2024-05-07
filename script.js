// Mouse Move color
{
  var mouse = document.querySelector("#cursor");
  var mouseblur = document.querySelector("#cursor-blur");
  var card = document.querySelectorAll(".cardlist");

  mouseblur.style.left = "45%";
  mouseblur.style.top = "45%";

  document.addEventListener("mousemove", (e) => {
    var mh = e.target.className.split(" ");
    // console.log(mh.find((v) => v == "mouse_hover"));
    setTimeout(() => {
      mouse.style.zIndex = "10000";

      if (mh.find((v) => v == "mouse_hover")) {
        mouse.style.height = "100px";
        mouse.style.width = "100px";
        mouse.style.backgroundColor = "transparent";
        mouse.style.border = "2px solid white";
        mouse.style.left = e.x - 50 + "px";
        mouse.style.top = e.y - 50 + "px";
      } else {
        mouse.style.height = "25px";
        mouse.style.width = "25px";
        mouse.style.backgroundColor = "#95c11e";
        mouse.style.border = "none";
        mouse.style.left = e.x - 10 + "px";
        mouse.style.top = e.y - 10 + "px";
      }
    }, 75);

    setTimeout(() => {
      mouseblur.style.left = e.x - 100 + "px";
      mouseblur.style.top = e.y - 100 + "px";
    }, 200);

    /**
     * Card style
     */
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    // console.log((e.x - x) / 50, -1 * ((e.y - y) / 50));
    for (c of card) {
      c.style.willChange = "transform";
      c.style.transform = `perspective(1000px) 
    rotateX(${-1 * ((e.y - y) / 50)}deg) 
    rotateY(${(e.x - x) / 50}deg) 
    scale3d(1, 1, 1)`;
    }
  });
}

// navbar
gsap.to("nav", {
  backgroundColor: "black",
  height: "75px ",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    scrub: 1,
  },
});

// main
gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -90%",
    scrub: 2,
  },
});

// section2
gsap.from(".abouts-img, .abouts-text", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".abouts",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 28%",
    scrub: 3,
  },
});

// section3
// gsap.from("#section3 .cardlist", {
//   y: 100,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.4,
//   scrollTrigger: {
//     trigger: "#section3",
//     scroller: "body",
//     // markers: true,
//     start: "top 70%",
//     end: "top 28%",
//     scrub: 3,
//   },
// });
