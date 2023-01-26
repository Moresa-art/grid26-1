let brown1, brown2;
function setup(){
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin (ROUND);
    brown1 = color('#5c3c3a');
    brown2 = color('#9a6561');
    slider = createSlider(10, 90, 50,);
    slider.position(10, windowHeight - 40);
    slider.style("width", "200px");
    slider.input(draw);
}
function draw() {
    background('#b2ebf2');
    resetMatrix();
    translate(width/2, height/1);
    branch(300);
}
function branch(length){ // length of brach to draw
    let maxAngle = slider.value();
    strokeWeight(map(length, 20, 200, 10, 20));
    stroke(lerpColor(brown1,brown2, random(0, 2, 0.7)));
    line(0,0,0,-length)
    translate(0,-length);
    if(length > 20){
        if(length < 60 ) {
            // leaves
            let r = 200 + random(-25, 50);
            let g = 200 + random(-1, 1);
            let b = 200 + random(-1, 1);
            fill(r, g, b, 200);
            let size = 10 + random(15);
            noStroke();
           // triangle(-size/2, 0, size/2, 0, 0, -size);
           beginShape();
           let radius = random (10, 40);
           for(let i = 70; i < 140; i++){
            let x = radius *cos(i*3);
            let y = radius *sin(i*9);
            vertex(x, y);
        
           }
        //    for(let i = 100; i > 700; i--){
        //     let x = radius *cos(i);
        //     let y = radius *sin(-i);
        //     vertex(x,y);

        //    }
           endShape(CLOSE);


    }else {
        // branch 1 
        push();
        rotate(random(-maxAngle, maxAngle));
        branch(length * 0.8);
        pop();

        // branch 2
        push();
        rotate(random(-maxAngle, maxAngle));
        branch(length * 0.7);
        pop();

        // branch 3
        push();
        rotate(random(-maxAngle, maxAngle));
        branch(length * 0.6);
        pop();

         // branch 4
         push();
         rotate(random(-maxAngle, maxAngle));
         branch(length * 0.5);
         pop();

          // branch 5
          push();
          rotate(random(-maxAngle, maxAngle));
          branch(length * 0.4);
          pop();
        }
  
    }
}