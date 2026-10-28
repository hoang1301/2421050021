
function moTrailer() {
  document.getElementsByClassName("banner")[0].style.display = "none";
  document.getElementsByClassName("trailer")[0].style.display = "flex";
}
var trailerphim = [
  { id: 0, link: "https://www.youtube.com/embed/7jX9S6SimDc?si=uoFQ2Qh0m7-pQY6a", banner: "https://i.redd.it/e27f9y464oie1.jpg" },
  { id: 1, link: "https://www.youtube.com/embed/iGidos6Gd2o?si=Id5n-OSCrkT01yEZ", banner: "https://newsmd2fr.keeng.vn/tiin/archive/imageslead/2023/01/09/8aeh5gbc9lgjn0hnadgbz1hqdcov0ghw.jpg" },
  { id: 2, link: "https://www.youtube.com/embed/hlR057kDMfA?si=z1GTVr4VJlOREvR4", banner: "https://bloganchoi.com/wp-content/uploads/2025/02/anh-poster-phim-696x464.jpg" },
  { id: 3, link: "https://www.youtube.com/embed/2PPJHjPlr2c?si=6H1R9BVPbmS0ZESj", banner: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/6/20/1207111/TLT.jpg" },
  { id: 4, link: "https://www.youtube.com/embed/6QxBpBlXLX8?si=pMhP47yKoAfBgXtA", banner: "https://esquire.vn/wp-content/uploads/2026/09/dau-xuan-tuoi-sang-trend-5-1024x681.webp" },
  { id: 5, link: "https://www.youtube.com/embed/827FNDpQWrQ?si=a4nnkAU_eqnOnPpz", banner: "https://www.fahasa.com/blog/wp-content/uploads/2025/03/interstellar-dai-dien.jpg" },
  { id: 6, link: "https://www.youtube.com/embed/5guMumPFBag?si=3tAyjFM3HjgELRGZ", banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1c89y6-Bw46UfL2Lh6-ivrK-wKlpHucSXlSl9Khxhlw&s=10" },
  { id: 7, link: "https://www.youtube.com/embed/T9bQCAWahLk?si=maDkak0HKwx_4GnB", banner: "https://img.youtube.com/vi/T9bQCAWahLk/maxresdefault.jpg" },
  { id: 8, link: "https://www.youtube.com/embed/vZoSD-riiy0?si=p68v0HzeidXckVEB", banner: "https://img.youtube.com/vi/vZoSD-riiy0/maxresdefault.jpg" },
  { id: 9, link: "https://www.youtube.com/embed/FEGNZETcuAk?si=m3hg5PkmCVsaXeAk", banner: "https://cdn.tgdd.vn/Files/2020/12/25/1315992/review-phim-kong-dao-dau-lau-2017-viet-nam-tren-phim-dep-nhu-mo-202012251152167662.jpg" },
  { id: 10, link: "https://www.youtube.com/embed/xKJmEC5ieOk?si=iOhCgvAI75jLN-wv", banner: "https://cdn.tgdd.vn/Files/2021/03/18/1336174/top-9-phim-kinh-di-hay-va-dang-xem-nhat-moi-thoi-dai-202103180006473714.jpg" },
  { id: 11, link: "https://www.youtube.com/embed/BU2eYAO31Cc?si=rXdI7vFDrXXc-m3V", banner: "https://cdn.tgdd.vn/Files/2021/03/18/1336174/top-9-phim-kinh-di-hay-va-dang-xem-nhat-moi-thoi-dai-202103180008048239.jpg" },
  { id: 12, link: "https://www.youtube.com/embed/WR7cc5t7tv8?si=q07ajxV7JzrhXuGN", banner: "https://cdn.tgdd.vn/Files/2021/03/18/1336174/top-9-phim-kinh-di-hay-va-dang-xem-nhat-moi-thoi-dai-202103180008183309.jpg" },
  { id: 13, link: "https://www.youtube.com/embed/DzfpyUB60YY?si=BWITC187raZFfHXH", banner: "https://cdn.tgdd.vn/Files/2021/03/18/1336174/top-9-phim-kinh-di-hay-va-dang-xem-nhat-moi-thoi-dai-202103180006297203.jpg" },
  { id: 14, link: "https://www.youtube.com/embed/ejMMn0t58Lc?si=o2IagSwCRPKR65gF", banner: "https://cdn.tgdd.vn/Files/2021/03/18/1336174/top-9-phim-kinh-di-hay-va-dang-xem-nhat-moi-thoi-dai-202201071118488854.jpeg" },
  { id: 15, link: "https://www.youtube.com/embed/yfUDIPUETUg?si=76qxgqAd2L4u2qGy", banner: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/91e41210-cad9-4547-be4d-1d2a28b0c049/d5m55dm-98e21c87-2e30-410f-9a55-b8900727735c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi85MWU0MTIxMC1jYWQ5LTQ1NDctYmU0ZC0xZDJhMjhiMGMwNDkvZDVtNTVkbS05OGUyMWM4Ny0yZTMwLTQxMGYtOWE1NS1iODkwMDcyNzczNWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aIDaTCczJpHpG9QJC-nvTITKP5K_hv-cWIydfYbJswA" },
  { id: 16, link: "https://www.youtube.com/embed/xOsLIiBStEs?si=vV3vHF4ssxV3rxQ0", banner: "https://cdn.tgdd.vn/Files/2021/02/20/1329099/9-phim-hoat-hinh-doat-giai-oscar-hay-nhat-moi-thoi-dai-202305131356127601.jpg" },
  { id: 17, link: "https://www.youtube.com/embed/wmiIUN-7qhE?si=1L-2xaHVH1GFR340", banner: "https://cdn.tgdd.vn/Files/2021/02/20/1329099/9-phim-hoat-hinh-doat-giai-oscar-hay-nhat-moi-thoi-dai-202305131359293566.jpg" },
  { id: 18, link: "https://www.youtube.com/embed/g4Hbz2jLxvQ?si=Z6g0s6YIvXXHJ8PA", banner: "https://cdn.tgdd.vn/Files/2021/02/20/1329099/9-phim-hoat-hinh-doat-giai-oscar-hay-nhat-moi-thoi-dai-202305131401461416.jpg" },
  { id: 19, link: "https://www.youtube.com/embed/ffb2u1N-TVY?si=tlKezxK0TuQxcQHX", banner: "https://cdn.tgdd.vn/Files/2021/02/20/1329099/9-phim-hoat-hinh-doat-giai-oscar-hay-nhat-moi-thoi-dai-202305131417359375.jpg" },
  { id: 20, link: "https://www.youtube.com/embed/0pmfrE1YL4I?si=jw_xi7NcZfbNx7oQ", banner: "https://cdn.tgdd.vn/Files/2022/05/13/1432301/x-phim-hai-hay-nhat-moi-thoi-dai-cuoi-be-bung-giai-toa-stress-202205140706362342.jpg" },
  { id: 21, link: "https://www.youtube.com/embed/jEDaVHmw7r4?si=oAv7vNbw8jB_uOKJ", banner: "https://cdn.tgdd.vn/Files/2022/05/13/1432301/x-phim-hai-hay-nhat-moi-thoi-dai-cuoi-be-bung-giai-toa-stress-202205140707247936.jpg" },
  { id: 22, link: "https://www.youtube.com/embed/Epeplansnd0?si=viEwWLviMn-OhNqJ", banner: "https://cdn.tgdd.vn/Files/2022/05/13/1432301/x-phim-hai-hay-nhat-moi-thoi-dai-cuoi-be-bung-giai-toa-stress-202205140708397154.jpg" },
  { id: 23, link: "https://www.youtube.com/embed/cyVk51ksx4o?si=b9jlfFiDTNDK0wTD", banner: "https://cdn.tgdd.vn/Files/2022/05/13/1432301/x-phim-hai-hay-nhat-moi-thoi-dai-cuoi-be-bung-giai-toa-stress-202205140709062648.jpg" },
  { id: 24, link: "https://www.youtube.com/embed/FtE9-o6dBEI?si=XmSKGkKdkRJWAAFd", banner: "https://cdn.tgdd.vn/Files/2022/05/13/1432301/x-phim-hai-hay-nhat-moi-thoi-dai-cuoi-be-bung-giai-toa-stress-202205140710102252.jpg" },
  { id: 25, link: "https://www.youtube.com/embed/1mGGb1r0kmk?si=yZBRXRDExN0XK4-l", banner: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo10/phim-phieu-luu-4.jpg" },
  { id: 26, link: "https://www.youtube.com/embed/5PSNL1qE6VY?si=i-FUn7yMxsynokNT", banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfN1w1txAOTxuBUyrgtRvJVBTwpR3Eb-75KPE1CPXrfFtqtCl7wgrPkf4&s=10" },
  { id: 27, link: "https://www.youtube.com/embed/YoHD9XEInc0?si=AvhaAJOJ6Q7WSCBR", banner: "https://live.staticflickr.com/4038/4686112993_efe13b4937_h.jpg" },
  { id: 28, link: "https://www.youtube.com/embed/b9EkMc79ZSU?si=fw2s1VQRvyQ5C8FN", banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI224p9TNXT38_3DJn4rs0ysk2Y7rP2v0vzyWqz9Y6eQ&s=10" },
  { id: 29, link: "https://www.youtube.com/embed/d96cjJhvlMA?si=aP4TovdFfKkBKxBY", banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jiDI-x5Lu0XdnwA0XwlbgeUCpQqmYQTgM40YxSyYsS5J3pCsgiGu_HU&s=10" }
];


function capnhat(vitri) {
  document.getElementsByClassName("anh-banner")[0].src = trailerphim[vitri].banner;
  document.getElementsByClassName("video-trailer")[0].src = trailerphim[vitri].link;
}

var vitri = -1;
function next() {
  if (vitri >= 0) {
    document.getElementsByClassName("phim-poster")[vitri].style.border = "none";
  }
  vitri = (vitri + 1) % trailerphim.length;
  capnhat(vitri)
  document.getElementsByClassName("banner")[0].style.display = "flex";
  document.getElementsByClassName("trailer")[0].style.display = "none";
  document.getElementsByClassName("phim-poster")[vitri].style.border = "2px solid red";

}
function back() {
  if (vitri >= 0) {
    document.getElementsByClassName("phim-poster")[vitri].style.border = "none";
  }
  vitri = (vitri - 1+trailerphim.length) % trailerphim.length;
  capnhat(vitri)
  document.getElementsByClassName("banner")[0].style.display = "flex";
  document.getElementsByClassName("trailer")[0].style.display = "none";
  document.getElementsByClassName("phim-poster")[vitri].style.border = "2px solid red";

}
function chon(id) {
  document.getElementsByClassName("banner")[0].style.display = "flex";
  document.getElementsByClassName("trailer")[0].style.display = "none";
  for (var i = 0; i < trailerphim.length; i++) {
    if (trailerphim[i].id == id) {
      document.getElementsByClassName("anh-banner")[0].src = trailerphim[i].banner;
      document.getElementsByClassName("video-trailer")[0].src = trailerphim[i].link;
    }
  }
}