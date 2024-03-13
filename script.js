// alert("Welcome To The Home page Of My Personal Portfolio Website")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.pop').addEventListener("click",()=>{
    document.querySelector('.bar').classList.toggle('barout');
    if(document.querySelector('.bar').classList.contains('barout')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display= 'none';
    }
    else{
        document.querySelector('.cross').style.display = 'inline';
        document.querySelector('.ham').style.display= 'none';
    }
})
