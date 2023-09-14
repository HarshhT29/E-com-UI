const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
        nav.classList.remove('hidden');
    })
}
if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        nav.classList.add('hidden');
    })
}

// <---js of single product----------->
var mainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("sm-img");
if (smallImg[0]) {
    smallImg[0].onclick = function(){
        mainImg.src = smallImg[0].src;
    }
}
if (smallImg[1]) {
    smallImg[1].onclick = function(){
        mainImg.src = smallImg[1].src;
    }
}
if (smallImg[2]) {
    smallImg[2].onclick = function(){
        mainImg.src = smallImg[2].src;
    }
}
if (smallImg[3]) {
    smallImg[3].onclick = function(){
        mainImg.src = smallImg[3].src;
    }
}