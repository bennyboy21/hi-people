var video;
var videoReady = false

function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  video = createCapture(VIDEO)
  video.hide();
}

function mousePressed() {
  videoReady = true
}

function deviceTurned() {
  videoReady = true
}

function draw() {
  if(videoReady == true) {
    image(video, 0, 0, windowWidth, windowHeight)
    save();
    videoReady = false
  }
}