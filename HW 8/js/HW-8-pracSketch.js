// class variables
var robby;
var idlePaths = [];
var runRobby;
var runPaths = [];

function preload() 
{
    idlePaths = loadStrings("./images/idle/idle.txt");
    runPaths = loadStrings("./images/run/run.txt");

    //runAnimation = loadStrings("./images/run/run.txt");

}

function setup()
{
    createCanvas(800,600);

    robby = new robot(0, 0, 150, 150);
    robby.loadAnimation('idle', idlePaths);
    robby.loadAnimation('run', runPaths);

}

function draw()
{
    background(225);

    if(kb.pressing('d'))
    {
        robby.updatePosition('forward');
        robby.drawAnimation('run');  
    }
    else if(kb.pressing('a'))
    {
        robby.updatePosition('reverse');
        robby.drawAnimation('run');    
    }
    else
    {
        robby.drawAnimation('idle');
    }   
    
    //moveRobbymove();

    //text(colliding,50,100);
    
}

/*function moveRobbymove()
{
    if (keyIsPressed)
    {
        if(key == 'd')
        {
            runRobby.draw(i);
            colliding = runRobby.checkCollision();
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
*/