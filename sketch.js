let branches = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0, 200, 0);
  line(width/2, height-20,width/2, height-40);
  branches.push([width/2, height-40]);
  fill(255, 0, 0);
}

function draw() {
  let branchIndex = floor(random(branches.length));
  // console.log("length"+ branches.length);
  let branch = branches[branchIndex];
  //console.log("branch" + branch);
  let rand = random(1000);
  if(branches.length == 0 || branch[1] < 0){
    noLoop();
    return;
  }
  if ( rand < 50 ){
    noStroke();
    circle(branch[0], branch[1], 5);
    stroke(0, 200, 0);
  }else if ( rand < 100 ){
    line(branch[0], branch[1], branch[0]-10, branch[1]-10);
    line(branch[0], branch[1], branch[0], branch[1]-10);
    line(branch[0], branch[1], branch[0]+10, branch[1]-10);
    branches.push([branch[0]-10, branch[1]-10]);
    branches.push([branch[0], branch[1]-10]);
    branches.push([branch[0]+10, branch[1]-10]);
    branches.splice(branchIndex, 1);
  }else if ( rand < 200 ){
    line(branch[0], branch[1], branch[0]-10, branch[1]-10);
    line(branch[0], branch[1], branch[0]+10, branch[1]-10);
    branches.push([branch[0]-10, branch[1]-10]);
    branches.push([branch[0]+10, branch[1]-10]);
    branches.splice(branchIndex, 1);
  }else if (rand < 900){
    line(branch[0], branch[1], branch[0], branch[1]-10);
    branches.push([branch[0], branch[1]-10]);
    branches.splice(branchIndex, 1);
  }else{
    branches.splice(branchIndex, 1);
  }
}