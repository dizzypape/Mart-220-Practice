//counter variables
var counter = 0;

// class variables
var robotCharacter;
var character = [];
var robotObject;
var idleAnimation = [];
var i = 0;

function preload() 
{
    idleAnimation = loadStrings("./images/idle/idle.txt");

}

function setup() 
{
    createCanvas(800, 600);

    // counter function
    setInterval(displayCounter, 90);

    robotObject = new robot(idleAnimation, 300, 200, 284, 278);
    robotObject.animate();

/*
    for (var j = 0; j < idleAnimation.length; j++)
    {
        robot = loadImage(idle_animation[j]);
        character[j] = robotCharacter;
    }
*/


}

function draw() 
{
    background(20, 20, 44);
    
    //image(character[i], 300, 200, 284, 278);
    
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