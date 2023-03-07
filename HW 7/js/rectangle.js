class rectangle
{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    getX()
    {
        return this.x;

    }

    getY()
    {
        return this.y;
    
    }

    getW()
    {
        return this.w;

    }

    getH()
    {
        return this.h;
    }

    draw()
    {
        rect(this.x,this.y,this.h,this.w);
    }
}

/*
function isRectangleColliding(rec1,rec2)
{
    var topEdge1 = rec1.getY() + rec1.getH();
    var rightEdge1 = rec1.getX() + rec1.getW();
    var leftEdge1 = rec1.getX();
    var bottomEdge1 = rec1.getY();
    var topEdge2 = rec2.getY() + rec2.getH();
    var rightEdge2 = rec2.getX() + rec2.getW();
    var leftEdge2 = rec2.getX();
    var bottomEdge2 = rec2.getY();

    if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2)
    {
        return true;
    }
    return false;
}
*/