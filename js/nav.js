window.addEventListener("load", () => {
  // main nav
  const nav = document.querySelector(".nav");
  const navLi = document.querySelectorAll(".nav > li");

  // quick menu
  const nav2 = document.querySelector(".nav2");
  const nav2Li = document.querySelectorAll(".nav2 > li");

  // main nav
  for (let i = 0; i < navLi.length; i++) {
    navLi[i].index = i;
    // console.log(i);

    navLi[i].addEventListener("mouseenter", (e) => {
      e.preventDefault();
      n = e.currentTarget.index;
      //   console.log(n);

      for (let j = 0; j < navLi.length; j++) {
        if (j == n) {
          navLi[j].classList.add("active");
          //   console.log(j);
        } else {
          navLi[j].classList.remove("active");
        }
      }
    });
    nav.addEventListener("mouseleave", () => {
      for (let j = 0; j < navLi.length; j++) {
        navLi[j].classList.remove("active");
      }
    });
  }

  // quick menu
  for (i = 0; i < nav2Li.length; i++) {
    nav2Li[i].index = i;
    console.log(i);

    nav2Li[i].addEventListener("mouseenter", (e) => {
      e.preventDefault();
      n = e.currentTarget.index;

      for (let k = 0; k < nav2Li.length; k++) {
        if (k == n) {
          nav2Li[k].classList.add("active2");
          //   console.log(k);
        } else {
          nav2Li[k].classList.remove("active2");
        }
      }
    });
    nav2.addEventListener("mouseleave", () => {
      for (let k = 0; k < nav2Li.length; k++) {
        nav2Li[k].classList.remove("active2");
      }
    });
  }
});
