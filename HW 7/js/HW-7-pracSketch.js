//counter variables
var counter = 0;

// class variables
var robotCharacter;
var robby = [];
var robotObject;
var idleAnimation = [];
var i = 0;
var runAnimation;
var idleRobby;
var runRobby;

var r1;
//var r2;

var colliding = false;

function preload() 
{
    idleAnimation = loadStrings("./images/idle/idle.txt");

    runAnimation = loadStrings("./images/run/run.txt");

}

function setup()
{
    createCanvas(600,400);

    // counter function
    setInterval(displayCounter, 90);

    idleRobby = new robot(idleAnimation, 100, 80, 139.25, 139);
    idleRobby.animate();

    runRobby = new robot(runAnimation, 100, 80, 139.25, 139);
    runRobby.animate();

    //r1 = new rectangle(300,100,75,100);
    r2 = new rectangle(300,150,80,85);


}

function draw()
{
    background(225);
    
    //robotObject.draw(i);
    moveRobbymove();

    //fill(7,172,219);
    //r1.draw();

    text(colliding, 350,350);

    fill(63,111,206);
    r2.draw();

    //textSize(32);
    //text(isRectangleColliding(r1,r2),300,300);
    //text(collideRectRect(r1.getX(),r1.getY(),r1.getW(),r1.getH(),
    //r2.getX(),r2.getY(),r2.getW(),r2.getH()), 300,300);
    
}

function moveRobbymove()
{
    if (keyIsPressed)
    {
        if(key == 'd')
        {
            runRobby.draw(i);
            colliding = runAnimation.checkColliding(r2);
            runRobby.setX(runRobby.getX()+5);
            idleRobby.setX(idleRobby.getX()+5);
            
        } 
        else if(key == 'a')
        {
            runRobby.draw(i);
            runRobby.setX(runRobby.getX()-5);
            idleRobby.setX(idleRobby.getX()-5);
        }

        else if(key == 'w')
        {
            runRobby.draw(i);
            runRobby.setY(runRobby.getY()-5);
            idleRobby.setY(idleRobby.getY()-5);
        }

        else if(key == 's')
        {
            runRobby.draw(i);
            runRobby.setY(runRobby.getY()+5);
            idleRobby.setY(idleRobby.getY()+5);
        }

        else
        {
            idleRobby.draw(i);

        }
    }
    
else
{
    idleRobby.draw(i);
}

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