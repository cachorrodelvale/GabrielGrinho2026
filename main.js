window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>100){
header.style.background="rgba(11,93,42,.95)";
}
else{
header.style.background="rgba(0,0,0,.6)";
}

});
