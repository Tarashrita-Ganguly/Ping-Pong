rightWristX = "";
rightWristY = "";
rightWristSCORE = "";

function preload(){
}

function setup(){
	var canvas = createCanvas(700,600);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(700,600);
	video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose',gotPoses);
  }
  
  function modelLoaded(){
	console.log("model_loaded");
  }
  function gotPoses(results){
	if(results.length > 0){
	  console.log(results);
	  rightWristX = results[0].pose.rightWrist.x;
	  rightWristY = results[0].pose.rightWrist.y;
	  rightWristSCORE = results[0].pose.keypoints[10].score;
	  console.log("rightwristX = "+rightWristX+" ,rightwristY = "+rightWristY+" ,rightwristSCORE = "+rightWristSCORE);
	}
  }


  function draw(){
   background(0); 
   image(video,0,0,700,600);
   
   fill("red");
   stroke("red");
   rect(680,0,20,700);
  
   fill("red");
   stroke("red");
   rect(0,0,20,700);
   	
	  if(rightWristSCORE > 0.2){
		fill("#ff0000");
		stroke('#ff0000');
		circle(rightWristX, rightWristY,"40px");
	  }
	}