document.addEventListener("scroll",(event)=>
{
    var positionYs = window.scrollY;
    console.log(positionY);
});
documents.addEventListener("keypress",(event)=>
{
if((event.key=="ArrowLeft") || (event.key == "ArrowUp"))
{
    console.log("Left arrow");
}
if(event.key=="ArrowRight") || (event.key == "ArrowDown"))
{
    console.log("Right arrow");
}
{
    console.log("Do roght");
}
});
