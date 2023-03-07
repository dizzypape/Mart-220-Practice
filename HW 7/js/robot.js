class robot

{
    // constructor
    constructor(idleAnimation, x, y, w, h)
    {
        // properties

        this.idleAnimation = idleAnimation;
        this.robby = [];
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }


    // functions

    getX()
    {
        return this.x;
    
    }

    setX(x)
    {
        this.x = x;
    }

    getY()
    {
        return this.y;
    }

    setY(y)
    {
        this.y = y;
    }   


    draw(i)
    {
        image(this.robby[i], this.x, this.y, this.w, this.h);
    }

    animate()
    {
        //console.log(this.imageLinks);
        for (var j = 0; j < idleAnimation.length; j++)
        {
            //console.log(this.idleAnimation[j]);

            robotCharacter = loadImage(this.idleAnimation[j]);

            this.robby[j] = robotCharacter;
        }
    }

    checkCollision(r2)
    {
        return collideRectRect(this.x, this.y, this.w, this.h,
        r2.getX(),r2.getY(),r2.getW(),r2.getH());
    }
    


  
}

