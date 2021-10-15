
const gift = document.querySelector("#gift");
const imgGift = document.querySelector('.gift__img');
const giftContent = document.querySelector('.gift_content');
const content = document.querySelector('#content');
const body = document.querySelector('body');
const heading = document.querySelector('.heading__content');
const music = document.querySelector('#music');
const video = document.querySelector('#video');
const containerVideo = document.querySelector('#container-video');
const btn = document.querySelector('.btnMute');

gift.addEventListener('click', function(){
    gift.style.animation = 'scaleUp ease 1s';
    setTimeout(function(){
        imgGift.src = './asset/img/moQua-removebg-preview.png';
        imgGift.style.transform = 'scale(1.8)';
        body.style.backgroundColor = '#333';
        heading.style.color = "#fff";
        heading.style.animation = 'ColorText linear 1s infinite';
        giftContent.style.display = 'none';
        music.play();
        containerVideo.style.display = 'block';
        video.play();
        video.muted = true;
        video.loop = true;
        btn.style.display = 'block';
        contentHeading();
    },1000);
})
var s1 = 'Happy Birthday';
var s2 = 'Chúc bạn sinh nhật vui vẻ!!!';
var lenS1 = s1.length;
var lenS2 = s2.length;
var i =j = 0;

function contentHeading() {
    if(i < lenS1){
        heading.innerHTML += s1[i];
        i++;
        setTimeout(()=> {
            contentHeading();
        },200) 
    }else
        contentMain();
}

function contentMain(){
    if(j < lenS2){
        content.innerHTML += s2[j];
        j++;
        setTimeout(function(){
            contentMain();
        },100)
    }
}



function muteMusic() {
    if(btn.innerHTML == 'Tắt tiếng'){
        music.pause();
        btn.innerHTML = 'Play';
    }else{
        music.play();
        btn.innerHTML = 'Tắt tiếng';
    }
}