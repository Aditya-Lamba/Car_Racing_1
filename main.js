canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
rover_height=90; 
rover_width=100;
rover_x=10;
rover_y=10;
background_img="mars.jpg";
rover_image="rover.png";

function add() 
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = "https://i.postimg.cc/bv5d35nK/racing.jpg";

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = "https://i.postimg.cc/YqdnnNX1/car1.png";
}

function uploadBackground() 
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    }

function uploadrover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}