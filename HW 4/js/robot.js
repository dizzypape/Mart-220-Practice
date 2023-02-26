class robot

{
    // constructor
    constructor(idleAnimation, x, y, w, h)
    {
        // properties

        this.idleAnimation = idleAnimation;
        this.character = [];
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

    draw(i)
    {
        image(this.character[i], this.x, this.y, this.w, this.h);
    }

    animate()
    {
        //console.log(this.imageLinks);
        for (var j = 0; j < idleAnimation.length; j++)
        {
            //console.log(this.idleAnimation[j]);

            robotCharacter = loadImage(this.idleAnimation[j]);

            this.character[j] = robotCharacter;
        }
    }
}
