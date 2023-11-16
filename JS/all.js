donateImgData = [
  {
    imgUrl: "./images/sponsor1.png",
  },
  {
    imgUrl: "./images/sponsor2.png",
  },
  {
    imgUrl: "./images/sponsor3.png",
  },
  {
    imgUrl: "./images/sponsor4.png",
  },
];

const donateSm = document.querySelector("#donate-sm");
const donateMd = document.querySelector("#donate-md");
const donateLg = document.querySelector("#donate-lg");
const donateCus = document.querySelector("#donate-cus");
const donateImg = document.querySelector("#donateImg");

donateMd.addEventListener("click", function (e) {
  donateMd.setAttribute(
    "class",
    "donate-list-active btn donate-list d-flex border border-2 rounded-3 text-nowrap py-3 mt-4 px-3 w-100 justify-content-center"
  );
  donateImg.setAttribute("src", `${donateImgData[1].imgUrl}`);
});

donateSm.addEventListener("click", function (e) {
  donateSm.setAttribute(
    "class",
    "donate-list-active btn donate-list d-flex border border-2 rounded-3 text-nowrap py-3 mt-4 px-3 w-100 justify-content-center"
  );
  donateImg.setAttribute("src", `${donateImgData[3].imgUrl}`);
});

donateLg.addEventListener("click", function (e) {
  donateLg.setAttribute(
    "class",
    "donate-list-active btn donate-list d-flex border border-2 rounded-3 text-nowrap py-3 mt-4 px-3 w-100 justify-content-center"
  );
  donateImg.setAttribute("src", `${donateImgData[2].imgUrl}`);
});

donateCus.addEventListener("click", function (e) {
  donateCus.setAttribute(
    "class",
    "donate-list-active btn donate-list border border-2 rounded-3 text-nowrap py-5 mt-4 px-3 w-100"
  );
  donateImg.setAttribute("src", `${donateImgData[0].imgUrl}`);
});
