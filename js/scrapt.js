/***************text move and button click**********************/

/*let btnsend = document.getElementById('click1');
let btnsend2 = document.getElementById('click2');
let btnsend3 = document.getElementById('click3');
let message = document.querySelector('.bu')
/*
btnsend.addEventListener ('click', () =>{
    setTimeout(() => {
        message.innerHTML = '<h5>ABOUT</h5> <p>Sendian Group is Qatar based company since 1973 <br> and a mother company of 5 different companies.</p>';
    }, 0);

});

btnsend2.addEventListener ('click', () =>{
     setTimeout(() => {
         message.innerHTML = '<h5>Our Mission</h5> <p>Lorem ipsum dolor sit amet consectetur adipisicing <br> elit. Sunt quidem quae error est neque, eaque <br> perferendis veritatis quo corporis eius.</p>';
     }, 0);
 
 });

 btnsend3.addEventListener ('click', () =>{
     setTimeout(() => {
         message.innerHTML = '<h5>Our Vision</h5> <p>Lorem ipsum dolor sit amet consectetur adipisicing <br> elit. Sunt quidem quae error est neque, eaque <br> perferendis veritatis quo corporis eius.</p>';
     }, 0);
 
 });
 /*************************end***************************/

 /*********************button up**********************/
let button = document.getElementById('but')
window.onscroll = function(){
    if (window.pageYOffset >= 700){
        button.style.display = 'block';
    }else{
        button.style.display = 'none';
    }
}
button.onclick = function(){
    window.scrollTo(0,0);
}
/*************************end************************/

