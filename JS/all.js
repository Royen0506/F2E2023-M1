const bannerBtn = document.querySelectorAll(".banner-btn");
const banner = document.querySelector("#banner");

bannerBtn[0].addEventListener("click", function (e) {
  let str = `<div class="container" data-aos="fade-up">
    <div class="text-center">
        <img data-aos="fade-up" data-aos-delay="150" class="img-fluid d-none d-lg-inline-block" src="images/title.png"
            alt="">
    </div>
    <div class="row">
        <div class="col-lg-7 text-dark px-5 pe-lg-0 align-self-center text-end">
            <div class="bg-info rounded-4 px-4 py-5 d-inline-block">
                <div class="d-flex justify-content-start justify-content-lg-center">
                    <h2 id="banner-h2" class="fw-bold title-l">喵立翰</h2>
                    <h5 id="banner-h5" class="fw-bold title-s align-self-end align-self-lg-center ms-2">Miao
                        Li-Han
                    </h5>
                </div>
                <p id="banner-p" class="body-s mt-3 d-flex justify-content-lg-center px-0 fw-bold">
                    推動更完善貓咪福利和政策，間接投資台灣未<br class="d-none d-lg-block">來。
                    民眾身心健康是推動經濟的核心動力。透<br class="d-none d-lg-block">過完善的
                    貓咪福利政策，為台灣GDP經濟帶來<br class="d-none d-lg-block">巨大效益。讓
                    一同護航台灣幸福經濟，從照顧<br class="d-none d-lg-block">每一隻貓咪開始。
                </p>
            </div>
        </div>
        <img class="col-lg-5 img-fluid mt-4 mt-lg-0 px-0 text-start px-4 px-lg-0" src="./images/cat2.png" alt="">
        <div class="text-center">
            <img class="img-fluid mt-4 d-inline-block d-lg-none" src="images/title-mobile.png" alt="">
        </div>
    </div>
</div>
<img class="img-fluid w-100 bg-primary" src="images/bk-gray.png" alt="頁底">`;
  banner.innerHTML = str;
});

bannerBtn[1].addEventListener("click", function (e) {
  let str = `<div class="container" data-aos="fade-up">
    <div class="text-center">
        <img data-aos="fade-up" data-aos-delay="150" class="img-fluid d-none d-lg-inline-block" src="images/title.png"
            alt="">
    </div>
    <div class="row">
        <div class="col-lg-7 text-dark px-5 pe-lg-0 align-self-center text-end">
            <div class="bg-info rounded-4 px-4 py-5 d-inline-block">
                <div class="d-flex justify-content-start justify-content-lg-center">
                    <h2 id="banner-h2" class="fw-bold title-l">喵立翰</h2>
                    <h5 id="banner-h5" class="fw-bold title-s align-self-end align-self-lg-center ms-2">Miao
                        Li-Han
                    </h5>
                </div>
                <p id="banner-p" class="body-s mt-3 d-flex justify-content-lg-center px-0 fw-bold">
                    推動更完善貓咪福利和政策，間接投資台灣未<br class="d-none d-lg-block">來。
                    民眾身心健康是推動經濟的核心動力。透<br class="d-none d-lg-block">過完善的
                    貓咪福利政策，為台灣GDP經濟帶來<br class="d-none d-lg-block">巨大效益。讓
                    一同護航台灣幸福經濟，從照顧<br class="d-none d-lg-block">每一隻貓咪開始。
                </p>
            </div>
        </div>
        <img class="col-lg-5 img-fluid mt-4 mt-lg-0 px-0 text-start px-4" src="./images/cat2.png" alt="">
        <div class="text-center">
            <img class="img-fluid mt-4 d-inline-block d-lg-none" src="images/title-mobile.png" alt="">
        </div>
    </div>
</div>
<img class="img-fluid w-100 bg-primary" src="images/bk-gray.png" alt="頁底">`;
  banner.innerHTML = str;
});
