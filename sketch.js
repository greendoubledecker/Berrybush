let branches = [];
let berryChance = 0.05;
let tripleSplitChance = 0.1;
let splitChance = 0.2;
let straightChance = 0.3;
let deleteChance = 0.1;
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
  let rand = random(1);
  if(branches.length == 0 || branch[1] < 0){
    noLoop();
    return;
  }
  if ( rand < berryChance ){
    noStroke();
    circle(branch[0], branch[1], 5);
    stroke(0, 200, 0);
  }else if ( rand < berryChance + tripleSplitChance ){
    line(branch[0], branch[1], branch[0]-10, branch[1]-10);
    line(branch[0], branch[1], branch[0], branch[1]-10);
    line(branch[0], branch[1], branch[0]+10, branch[1]-10);
    branches.push([branch[0]-10, branch[1]-10]);
    branches.push([branch[0], branch[1]-10]);
    branches.push([branch[0]+10, branch[1]-10]);
    branches.splice(branchIndex, 1);
  }else if ( rand < berryChance + tripleSplitChance + splitChance ){
    line(branch[0], branch[1], branch[0]-10, branch[1]-10);
    line(branch[0], branch[1], branch[0]+10, branch[1]-10);
    branches.push([branch[0]-10, branch[1]-10]);
    branches.push([branch[0]+10, branch[1]-10]);
    branches.splice(branchIndex, 1);
  }else if (rand < berryChance + tripleSplitChance + splitChance + straightChance){
    line(branch[0], branch[1], branch[0], branch[1]-10);
    branches.push([branch[0], branch[1]-10]);
    branches.splice(branchIndex, 1);
  }else if(berryChance + tripleSplitChance + splitChance + straightChance + deleteChance){
    branches.splice(branchIndex, 1);
  }
}