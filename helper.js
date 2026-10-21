document.addEventListener("scroll",(event)=>
{
   const avatar = document.getElementById("avatar");
   var positionY = window.scrollY;
   var max = document.body.scrollHeight;
   var progress = positionY / max;
   avatar.style.left = positionY +"em";
   console.log(avatar);
   console.log(positionY + "/" + max + "=" + progress);
    
});

document.addEventListener("keydown",(event)=>
{
if((event.key=="ArrowLeft") || (event.key == "ArrowUp"))
{
    console.log("Go l eft");
}
if(event.key=="ArrowRight") || (event.key == "ArrowDown"))
{
    console.log("Arrow Right");
}
});
        