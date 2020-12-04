function toggleMenu() {
    'use strict';
    
    const menutoggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    menutoggle.classList.toggle("active");
    navigation.classList.toggle("active");
}

function videoToggle() {
    'use strict';
    const trailer = document.querySelector(".trailer");
    const video = document.querySelector("video");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}