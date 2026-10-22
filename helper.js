  const avatar = document.getElementById("avatar");

document.addEventListener("scroll",(event)=>

{
    
   let positionY = window.scrollY;
   var maxHeight = document.body.scrollHeight;
   var maxWight = 
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
        