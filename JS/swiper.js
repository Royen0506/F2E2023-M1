const swiper = new Swiper(".swiper", {
  // 垂直或水平播放及是否輪迴播放
  direction: "horizontal",
  loop: false,
  autoplay: true,

  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // 下一頁、上一頁
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  slidesPerView: 1.15,
  spaceBetween: 15,

  // scrollbar: {
  //   el: '.swiper-scrollbar',
});

let newsCarouselData = [
  {
    id: "1",
    date: "2023.12.26",
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    article:
      "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的VIP 休憩空間。",
    img: "images/carousel1.png",
  },
  {
    id: "2",
    date: "2023.12.24",
    title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    article:
      "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。",
    img: "images/carousel2.png",
  },
  {
    id: "3",
    date: "2023.12.20",
    title: "收容所模特兒大比拼！",
    article:
      "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    img: "images/carousel3.png",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");
const buttonPrev = document.querySelector(".button-prev");
const buttonNext = document.querySelector(".button-next");

function renderData() {
  let str = "";
  newsCarouselData.forEach(function (item) {
    let content = `<div class="swiper-slide d-flex justify-content-center" data-swiper-autoplay="9000">
                        <div class="card rounded-5 d-flex bg-secondary-gray100 border-0" style="width: 20rem;">
                            <img src="${item.img}" class="card-img-top mb-2" alt="...">
                            <div class="card-body px-3">
                                <p class="text-info-100 bg-dark d-inline-block rounded-4 px-3 py-1 title-m mb-0">${item.date}</p>
                                </p>
                                <p class="card-text h6">${item.title}</p>
                                <p class="body-l text-gray-300 mt-3">
                                    ${item.article}</p>
                            </div>
                        </div>
                    </div>`;
    str += content;
  });
  swiperWrapper.innerHTML = str;
}
renderData(newsCarouselData);
