var img = "";
var objects = [];
var statuss = "";
var percent = 0; 
var synth = window.speechSynthesis;
function setup() {
    var canvas = createCanvas(641, 481);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(641,481);
    video.hide();
}
function draw() {
    image(video, 0, 0);
    if(statuss != ""){
        objectDetector.detect(video, gotResult);
        for(var i = 0; i < objects.length; i++){
            document.getElementById("status2").innerHTML = "Total Number Of Objects Detected Are: " + objects.length;
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            if(objects.label = object_name){
                objectDetector.detect(gotResult);
                document.getElementById("status2").innerHTML = object_name + " " + "found";
                var utterThis = new SpeechSynthesisUtterance(object_name + " " + "found");
                synth.speak(utterThis);
            }
        }
        if(objects.length = 0){
            document.getElementById("status").innerHTML = "Status: Baby Is Not Detected";
            alert_sound.play();
        }
    }
}
function modelLoaded() {
    console.log('Model is Loaded!');
    statuss = true;
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    document.getElementById("btn").innerHTML = "";
    object_name = document.getElementById("object_name").value;
}