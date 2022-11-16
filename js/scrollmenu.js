window.addEventListener("load", () => {
  let h; // 윈도우의 높이에 관련된 변수
  let n = 0; // 메뉴의 인덱스 값을 저장하는 공간
  let targetY = 0; // 상단 목표 위치에 관련된 변수 (스크롤을 했을 때 이동하고자 하는 위치값)
  let offsetY = 0; // 상단 위치에 관련된 변수 (현재 스크롤의 위치값)
  let timer = 0; // 현재 움직임에 관련된 타이머 변수 (애니메이션 함수의 이름)
  let moving = false; // 현재 움직임의 유무에 관련된 변수 (스크롤에 이벤트를 제어하기 위한 또 하나의 상태값)

  const wrap = document.getElementById("wrap");
  const nav = document.getElementsByClassName("nav");
  const navLi = document.querySelectorAll(".nav > li"); // navLi = #nav > ul > li
  console.log(navLi);

  const nav2 = document.getElementsByClassName("nav2");
  const nav2Li = document.querySelectorAll(".nav2 > li");
  let pageList = [];

  // wrap 안의 페이지들을 배열로 저장하기
  for (let i = 0; i < wrap.children.length; i++) {
    pageList.push(wrap.children[i]);
  }
  // console.log(pageList);

  // js로 선택된 태그의 높이를 설정
  function init() {
    h = window.innerHeight; // 현재 창의 높이값 설정
    targetY = n * h;
    navLi[n].classList.add("active");
    for (let j = 0; j < pageList.length; j++) {
      pageList[j].style.height = h + "px";
    }
  }
  init();

  window.addEventListener("resize", init); // 윈도우창의 크기가 바뀔 때 init() 함수 호출 -> 자동으로 높이가 바뀜

  // 버튼 이벤트 navLi
  for (let i = 0; i < navLi.length; i++) {
    navLi[i].index = i;
    // console.log("네비의 인덱스값:" + i);

    navLi[i].addEventListener("click", (e) => {
      e.preventDefault();
      if (moving) return; // false 이므로 return 하지 않고 다음 줄 스크립트 실행
      offsetY = window.pageYOffset;
      n = e.currentTarget.index;
      h = window.innerHeight;
      targetY = n * h;
      console.log("n:" + n + ", targetY:" + targetY);

      moveCategory(offsetY, targetY);
    });
  }
  //퀵메뉴
  for (i = 0; i < nav2Li.length; i++) {
    nav2Li[i].index = i;
    // console.log("네비의 인덱스값:" + i);

    nav2Li[i].addEventListener("click", (e) => {
      e.preventDefault();
      if (moving) return; // false 이므로 return 하지 않고 다음 줄 스크립트 실행
      offsetY = window.pageYOffset;
      n = e.currentTarget.index;
      h = window.innerHeight;
      targetY = n * h;
      console.log("n:" + n + ", targetY:" + targetY);

      moveCategory(offsetY, targetY);
    });
  }

  function moveCategory(current, target) {
    // moveCategory(이전 y 위치, 다음 y 위치)
    moving = true;

    const timer = setInterval(function () {
      if (target > current) {
        // 스크롤 위치가 위로 갈지 아래로 갈지 설정

        // 스크롤이 아래로
        if (Math.abs(target - current) > 100) {
          current += 100;
        } else {
          current = targetY;
          moving = false;
          clearInterval(timer);
        }
        // 해당되는 버튼에 스타일 적용
        for (let j = 0; j < navLi.length; j++) {
          if (j == n) {
            navLi[j].classList.add("active");
          } else {
            navLi[j].classList.remove("active");
          }
        }
      } else {
        // 스크롤이 위로
        if (Math.abs(target - current) > 100) {
          current -= 100;
        } else {
          current = targetY;
          moving = false;
          clearInterval(timer);

          // 해당되는 버튼에 스타일 적용
          for (let j = 0; j < navLi.length; j++) {
            if (j == n) {
              navLi[j].classList.add("active");
            } else {
              navLi[j].classList.remove("active");
            }
          }
        }
      }
      window.scrollTo({
        top: current,
        behavior: "smooth",
      });
    }, 1);
  }
});
