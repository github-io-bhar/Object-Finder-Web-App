var object_name = "";
var status;
function setup(){
    canvas = createCanvas(641, 481);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function start(){
    var objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value;
}
function modelLoaded() {
    console.log('Model is Loaded!');
    statuss = true;
}
function draw(){
    image(video, 0, 0);
}