class CircularButton extends BaseObject
{
    constructor(image, x, y, radius, event)
    {
        super(x, y);
        this.image = image;
        this.radius = radius;
        this.event = event;
    }

    IsPressed()
    {
        relX = this.x - mouseX;
        relY = this.y - mouseY;
        if (mouseIsPressed && sqrt((relX * relX) + (relY * relY)) < radius)
        {
            return this.event;
        }
        return "";
    }

    Draw()
    {
        image(this.Image, this.x, this.y, this.radius, this.radius);
    }
}