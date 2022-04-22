songPotter=""
songPeter=""

function preload()
{
    songPotter = loadSound("Harry_Potter.mp3");
    songPeter = loadSound("Peter_Pan.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 100, 600, 500); 

    fill("#FF0000");
    stroke("#FF0000");


}