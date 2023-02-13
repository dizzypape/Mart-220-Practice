//counter variables
var counter = 0;

// class variables
var robotCharacter;
var character = [];
var robotObject;
var idle_animation = [];
var i = 0;

function preload() 
{
    idle_animation = loadStrings("../images/idle.txt");

}

function setup() 
{
    createCanvas(800, 600);

    // counter function
    setInterval(displayCounter, 90);

    robotObject = new robot(idle_animation);

    robotObject.animate();

/*
    for (var j = 0; j < idle_animation.length; j++)
    {
        robot = loadImage(idle_animation[j]);
        character[j] = robotCharacter;
    }
*/


}

function draw() 
{
    background(20, 20, 44);
    
    //image(character[i], 300, 200, 283.5, 278);
    
    robotObject.draw(i);

}

function displayCounter() 
{
    counter++;

    i++;
    if (i > 9) 
    {
        i = 0;
    }

}