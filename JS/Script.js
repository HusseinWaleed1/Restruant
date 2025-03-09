// let menu = document.querySelector('#menu-bars');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active')
// }

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active')
// }

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}


document.querySelector('.uiverse').onclick = () => {

    document.querySelector('#login-form').classList.toggle('active');

}
document.querySelector('#close2').onclick = () => {
    document.querySelector('#login-form').classList.remove('active');
}


let btn = document.getElementById('btn');
onscroll = function () {
    if (scrollY >= 400) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none';
    }
}
btn.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
}



// document.querySelector('.play-movie').onclick = () =>{
//     document.querySelector('.video-container').classList.toggle('active');
// }

// document.querySelector('.close-video').onclick = () =>{
//     document.querySelector('.video-container').classList.remove('active');
// }




// // Show Video
// let playButton = document.querySelector(".play-movie")
// let video = document.querySelector(".video-container")
// let myvideo = document.querySelector("#myvideo")
// let closebtn = document.querySelector(".close-video")

// playButton.onclick = () => {
//     video.classList.add("show-video")
//     // Auto Play When Click On Button
//     myvideo.play();
// };
// closebtn.onclick = () => {
//     video.classList.remove("show-video")
//     // Pause On Close Video
//     myvideo.pause();
// };




// var swiper = new Swiper(".home-slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     // If we need pagination
// pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     },
//     loop: true,
// });