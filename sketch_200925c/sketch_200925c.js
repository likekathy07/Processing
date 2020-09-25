let q, w, e, r;

function setup() {
  createCanvas(500, 500);
  noFill();
  for(let i=0; i<5; i++){
    for(let j=0; j<4; j++){
      q = int(random(0, 500));
      w = int(random(0, 500));
      e = int(random(0, 500));
      r = int(random(0, 500));
      rect(q, w, e, r);
    }           
  }
}


function draw() {
  
}
