
function moTrailer() {
  document.getElementsByClassName("banner")[0].style.display = "none";
  document.getElementsByClassName("trailer")[0].style.display = "flex";
}
var trailerphim = [
    { id: "the first frost", link: "https://www.youtube.com/embed/7jX9S6SimDc?si=uoFQ2Qh0m7-pQY6a",banner:"https://i.redd.it/e27f9y464oie1.jpg" },
  { id: "Interstellar ", link: "https://www.youtube.com/embed/zSWdZVtXT7E?si=DK1eDwYJVczLgneO", banner: "https://blogs-images.forbes.com/markhughes/files/2014/11/interstellar-4-1940x8971.jpg" },
  {id:"t4",link:"https://www.youtube.com/embed/T9bQCAWahLk?si=fsHnR6g7UWLTZVCu",banner:"https://images.alphacoders.com/508/thumb-1920-508544.jpg"}
]
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
