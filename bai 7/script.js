var videoList = [
    { id: 0, link: "https://www.youtube.com/embed/MTDqG8ZKDuI?si=7Lc0kSgVz34CcsMS", namevideo:"mot" },
    { id: 1, link: "https://www.youtube.com/embed/bE2rrcUKnok?si=JdPVhaM3_fxbqFVx" ,namevideo:"hai"},
    { id: 2, link: "https://www.youtube.com/embed/dH8sbGnmfZo?si=idaj1ZazLpUBXoN2" ,namevideo:"ba"},
    { id: 3, link: "https://www.youtube.com/embed/IjFa_UDzNrc?si=8--2luC3MCF0_6J3", namevideo: "bon" }
];

function changeVideo(id) {
    var banner = document.getElementsByClassName('anh-banner')[0];
    

    for (var i = 0; i < videoList.length; i++) {
        if (videoList[i].id == id) {
            banner.src = videoList[i].link;
            document.getElementsByClassName("ten-video")[0].innerHTML = videoList[i].namevideo;
            break;
        }
    }
}
