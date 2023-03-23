//variables
var robby;
var idlePaths = [];
var runRobby;
var runPaths = [];
var gear = [];
var oil;
var healthBar = [];
var i = 0;
var points = 0; 

function preload() 
{
    idlePaths = loadStrings("./images/idle/idle.txt");
    runPaths = loadStrings("./images/run/run.txt");

}

function setup()
{
    createCanvas(800,600);

    gear[0] = createSprite(random(650, width),random(50, 245),100,100, 'static');
    gear[0].img = "./images/gear.png";
    gear[0].scale = 0.10;
    gear[0].diameter = 75;

    gear[1] = createSprite(random(50, 285),random(255, 396),100,100, 'static');
    gear[1].img = "./images/gear.png";
    gear[1].scale = 0.10;
    gear[1].diameter = 75;

    gear[2] = createSprite(random(315, 646),random(400, height),100,100, 'static');
    gear[2].img = "./images/gear.png";
    gear[2].scale = 0.10;
    gear[2].diameter = 75;

    oil = createSprite(random(650, width),random(50, 245), 100,100, 'kinematic');
    oil.img = "./images/oilbarrel.jpg";
    oil.scale = 0.10;
    oil.diameter = 75;

    robby = new robot(0, 0, 150, 150);
    robby.loadAnimation('idle', idlePaths);
    robby.loadAnimation('walk', runPaths);

    healthBar[i] = new healthbar(75,575,150,12,20,247,31);
}

function draw()
{
    background(225);

     //health bar
     fill(0);
     text('Health:',10,585);
     textSize(16);
     stroke(0);
     fill(225);
     rect(75,575,150,12);
     healthBar[i].draw();

     //score
     fill(0);
     textSize(20);
     text('Score: ' + points, 10, 560);

    if(kb.pressing('d'))
    {
        robby.updatePosition('forward');
        robby.drawAnimation('walk');
        if(robby.isColliding(gear[0],gear[1],gear[2]))
        {
            robby.drawAnimation('idle');
            robby.updatePosition('idle');           
        }
    }

    else if(kb.pressing('a'))
    {
        robby.updatePosition('reverse');
        robby.drawAnimation('walk');
        if(robby.isColliding(gear[0],gear[1],gear[2]))
        {
            robby.drawAnimation('idle');
            robby.updatePosition('idle');
        }
    }
    else if(kb.pressing('w'))
    {
        robby.updatePosition('up');
        robby.drawAnimation('walk');
        if(robby.isColliding(gear[0],gear[1],gear[2]))
        {
            robby.drawAnimation('idle');
            robby.updatePosition('idle');
        }
    }

    else if(kb.pressing('s'))
    {
        robby.updatePosition('down');
        robby.drawAnimation('walk');
        if(robby.isColliding(gear[0],gear[1],gear[2]))
        {
            robby.drawAnimation('idle');
            robby.updatePosition('idle');
        }
    }
    
    else
    {
        robby.drawAnimation('idle');
    }   

    gear.debug = mouseIsPressed;
    
    if(robby.isColliding(oil))
    {
        oil = createSprite(900,700,100,100);
        points += 2;
        healthBar[i] = new healthbar(75,575,152,12,20,247,31);       
    }
}