song_1 = '';
song_2 = '';
leftWrist_X = "";
leftWrist_Y = "";
rightWrist_X = "";
rightWrist_Y = "";

function preload() {
    song_1 = loadSound("night running.mp3")
    song_2 = loadSound("dire dire docks but weird.mp3")
}

function setup() {
    canvas = createCanvas(500,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWrist_X = results[0].pose.leftWrist.x;
        leftWrist_Y = results[0].pose.leftWrist.y;
        console.log("The Left wrist X coordinate is: " + leftWrist_X + " The Left wrist Y coordinate is: " + leftWrist_Y);
        rightWrist_X = results[0].pose.rightWrist.x;
        rightWrist_Y = results[0].pose.rightWrist.y;
        console.log("The Right wrist X coordinate is: " + rightWrist_X + " The Right wrist Y coordinate is: " + rightWrist_Y);
    }
}

function modelLoaded() {
    console.log("Model has been loaded!")
}
