music1 = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload() {
music1 = loadSound("music.mp3");
music2 = loadSound("music2.mp3");
}
function play() {
song.play();
song.setVolume(1);
song.rate(1);
}
function setup() {
canvas = createCanvas(600, 500);
canvas.center();
video = creatCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modleLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
if (results.length > 0) {
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX + "leftWristY =" + leftWristY);
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + "rightWristY =" + rightWristY);
}
}
function modleLoaded() {
console.log('PoseNet Is Initialized');
}
function draw(){
image(video, 0, 0, 600, 500);
canvas = createCanvas(600, 500);
canvas.center();
music1 = loadSound("HarryPotter.mp3");
music2 = loadSound("PeterPan.mp3");
fill("#FF0000");
stroke("#FF0000");
circle(rightWristX, rightWristY, 20);
if(rightWrist > 0.2){
if(leftWristX > 0.2, leftWristY > 0.2) {
circle(leftWristX, leftWristY, 20);
function pauseAudio1() { 
music1.pause(); 
}
pauseAudio1();
function pauseAudio2() { 
music2.pause(); 
} 
pauseAudio2();
if(music1 = false){
function playAudio1() { 
music1.play()
}
playAudio1();
function playAudio2() { 
document.getElementById("circle").innerHTML = "Harry Potter Theme Song";
music2.play()
}
playAudio2();
document.getElementById("circle").innerHTML = "Peter Pan Song";
}
}
}
music2 = results[0].pose.keypoints[10].score;
pauseAudio2();
if(music1 = false){
music.play()
}
if(music2 = false){
playAudio2();
}
if(music1 == true){
document.getElementById("circle").innerHTML = "Harry Potter Theme Song";
}
if(music2 == true){
document.getElementById("circle").innerHTML = "Peter Pan Song";
}
}