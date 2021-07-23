var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
 


    circle(200,200,"blue");
circle(250,250,"yellow");
circle(300,200,"black");
circle(350,250,"green");
circle(400,200,"red");

function circle(mouse_x,mouse_y,color){
    ctx.beginPath();
    
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();   
}
