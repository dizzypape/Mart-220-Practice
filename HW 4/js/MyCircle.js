class MyCircle
{
    // constructor
    constructor(x,y,diameter)
    {

    // properties

        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }

    // functions

        drawCircle()
            {
                circle(this.x, this.y, this.diameter);
            }
}