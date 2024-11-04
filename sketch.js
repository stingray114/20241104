function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(250);//文字尺寸
  textAlign(CENTER, CENTER);//文字固定在中心
}


function draw() {
 
  background("#FFC8DD");
  noFill()
  stroke("#CDB4DB")
  strokeWeight(2)
  

  var rect_width = 50
  var bc_w = 50
  var sc_w =25
    for(let j = 0;j<25;j=j+1){
    for(let x=0;x<width;x=x+rect_width){
      ellipse(x,25+50*j,bc_w+mouseY/15)
      rect(x,25+50*j,rect_width+mouseX/20)
      ellipse(25+x+rect_width,50+50*j,sc_w+mouseY/25)
     }
    
    }
  
    translate(width / 2, height / 2);
    fill("#A2D2FF");//字體顏色
    rotate(frameCount / 50);//隨著時間旋轉
    text("Molly", 0, 50);//文字
    pop();
  }