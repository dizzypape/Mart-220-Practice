var myFont;

function setup()
{
    createCanvas(400,400);
}

function preload()
{
    myFont = loadFont("../fonts/adelia.otf");
}


function draw()
{
    background(225);

    textFont(myFont);
    textSize(24);
    fill(0);
    text('Fodizzlema', 180, 200);
}