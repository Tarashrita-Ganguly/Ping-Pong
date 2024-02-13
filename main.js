video="";
status="";

function preload(){
}

function setup() {
    canvas = createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
}

function start() {
    document.getElementById("status").innerHTML = "Status: Detecting objects";
    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log("model loaded!")
}