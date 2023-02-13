class robot
{
    // constructor
    constructor(idle_animation)
    {
        // properties

        this.idle_animation = idle_animation;
        this.character = [];
    }


    // functions
    
    draw(i)
    {
        image(this.character[i], 300, 200, 283.5, 278);
    }

    animate()
    {
        //console.log(this.imageLinks);
        for (var j = 0; j < idle_animation.length; j++)
        {
            console.log(this.idle_animation[j]);

            robotCharacter = loadImage(this.idle_animation[j]);

            this.character[j] = robotCharacter;
        }
    }
}