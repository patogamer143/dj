song="";
function preload(){
    song="music.mp3";

}
derechax=0;
derechay=0;
izquierdax=0;
izquierday=0;
diferencia=0;




function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,detectar);
    poseNet.on("pose",gotposes);

}
function detectar(){
    console.log("poseNet activo");
}
function gotposes(){
    if (results.lenght >0) {
        console.log(results);
        izquierdax=results[0].pose.leftWrist.x;
        izquierday=results[0].pose.leftWrist.y;
        console.log("izquierdax="+izquierdax+"izquierday="+izquierday)
        derechax=results[0].pose.rightWrist.x;
        derechay=results[0].pose.rightWrist.y;
        console.log("derechax="+derechax+"derechay="+derechax)
    }
       
        //diferencia=floor(izquierdax-derechax);
}
function draw(){
    image(video,0,0,600,600)

}
function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}