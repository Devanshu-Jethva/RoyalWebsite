const sliding_img = document.getElementsByClassName('slidingimg');
const marquee_text= document.querySelector('#slide_img_text'); 
const contact_us_btn = document.querySelector('#contact_us')

for(let i = 1; i<sliding_img.length ; i++){
    sliding_img[i].style.display = 'none';
}
// console.log(marquee_text)
let index = 0 ;
const slide_left = document.querySelector('#left');
slide_left.addEventListener('click',()=>{
    if(index === 0){
        sliding_img[index].style.display = 'none';
        index = 3;
        sliding_img[index].style.display = 'block';
    }
    else{
        sliding_img[index].style.display = 'none';
        index--;
        sliding_img[index].style.display = 'block';
    }
    if(index==3){
        marquee_text.innerHTML = 'Belive in Dhiraj 🙏';
        marquee_text.style.color = 'black'
        marquee_text.style.left = '16rem'
        marquee_text.style.top = '12rem'
        marquee_text.style.animation = 'text'
        contact_us_btn.style.left = '25rem'
        contact_us_btn.style.top = '20rem'
    }
    else if(index==2){
        marquee_text.innerHTML = 'Become Big Data Analyst';
        marquee_text.style.color = 'white'
        marquee_text.style.left = '25rem'
        marquee_text.style.top = '20rem'
        contact_us_btn.style.left = '43rem'
        contact_us_btn.style.top = '30rem'
    }
    else if(index==1){
        marquee_text.innerHTML = 'Education is the passport to the future';
        marquee_text.style.color = 'white'
        marquee_text.style.left = '11rem'
        marquee_text.style.top = '28rem'
        contact_us_btn.style.left = '35rem'
        contact_us_btn.style.top = '35rem'
    }
    else if(index==0){
        marquee_text.innerHTML = 'Passion And Perfection';
        marquee_text.style.color = 'rgba(0, 0, 0, 0.84)'
        marquee_text.style.left = '11rem'
        marquee_text.style.top = '28rem'
        contact_us_btn.style.left = '23rem'
        contact_us_btn.style.top = '35rem'
    }
})

const slide_right = document.querySelector('#right');
slide_right.addEventListener('click',()=>{
    
    if(index<=2){
        sliding_img[index].style.display = 'none';
        index++;
        sliding_img[index].style.display = 'block';
    }
    else{
        sliding_img[index].style.display = 'none';
        index = 0;
        sliding_img[index].style.display = 'block';
    }
    if(index==0){
        marquee_text.innerHTML = 'Passion And Perfection';
        marquee_text.style.color = 'rgba(0, 0, 0, 0.84)'
        marquee_text.style.left = '11rem'
        marquee_text.style.top = '28rem'
        contact_us_btn.style.left = '23rem'
        contact_us_btn.style.top = '35rem'
    }
    else if(index==1){
        marquee_text.innerHTML = 'Education is the passport to the future';
        marquee_text.style.color = 'white'
        marquee_text.style.left = '11rem'
        marquee_text.style.top = '28rem'
        contact_us_btn.style.left = '35rem'
        contact_us_btn.style.top = '35rem'

    }
    else if(index==2){
        marquee_text.innerHTML = 'Become Big Data Analyst';
        marquee_text.style.color = 'white'
        marquee_text.style.left = '25rem'
        marquee_text.style.top = '20rem'
        contact_us_btn.style.left = '43rem'
        contact_us_btn.style.top = '30rem'
    }
    else if(index==3){
        marquee_text.innerHTML = 'Belive in Dhiraj 🙏';
        marquee_text.style.color = 'black'
        marquee_text.style.left = '16rem'
        marquee_text.style.top = '12rem'
        contact_us_btn.style.left = '25rem'
        contact_us_btn.style.top = '20rem'
    }
})
// console.log(sliding_img);


