
const gift = document.querySelector("#gift");
const imgGift = document.querySelector('.gift__img');
const giftContent = document.querySelector('.gift_content');
const content = document.querySelector('#content');
const heading = document.querySelector('.heading__content');
const music = document.querySelector('#music');
const video = document.querySelector('#video');
const containerVideo = document.querySelector('#container-video');
const btn = document.querySelector('.btnMute');

alert('Vui lòng không dịch qua tiếng việt để tránh bị lỗi font chữ. Xin cảm ơn!');

gift.addEventListener('click', function(){
    gift.style.animation = 'scaleUp ease 1s';
    setTimeout(function(){
        document.body.style.background = `url('./asset/img/avatar.jpg') top center`;
        imgGift.src = './asset/img/moQua-removebg-preview.png';
        imgGift.style.transform = 'scale(1.6)';
        giftContent.style.display = 'none';
        music.play();
        containerVideo.style.display = 'block';
        video.play();
        video.muted = true;
        video.loop = true;
        btn.style.display = 'block';
        btn.innerHTML = 'Muted';
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
        var span = document.createElement('span');
        span.style = `--i:${i}`;
        span.innerHTML += s1[i];
        heading.appendChild(span);
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
    if(btn.innerHTML == 'Muted'){
        music.pause();
        btn.innerHTML = 'Play';
    }else{
        music.play();
        btn.innerHTML = 'Muted';
    }
}