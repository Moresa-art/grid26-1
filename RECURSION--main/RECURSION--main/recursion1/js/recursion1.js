const MaxLevel = 8;
const MinLevel = 6;

function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    strokeWeight(10);
    fill(200, 100, 300);
    background (150);

    noLoop(); // prevent draw() from looping
    drawCircle(width/2,height/2,width/4, MaxLevel)
}
function drawCircle(x,y,d,count) {
    ellipse(x,y,d);
    if(count-- > MinLevel){
        drawCircle(x + d / 2, y, d / 2, count);
        drawCircle(x - d/ 2, y, d / 2, count);
        drawCircle(x , y + d / 2, d/ 2, count);
    }
}
