// Global utility function   
// getRandomColor creates a random web color
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// A class for our application state and functionality
class Drawing {
    constructor(canv) {
        this.canv = canv;
        // the public paramater "canv" is automatically created by "public" constructor parameter
        // mouse position when we clicked
        this.clickStart = null;
        this.ctx = canv.getContext("2d");
        canv.onmousedown = (ev) => {
            this.clickStart = Drawing.offset(ev);
        };
    }
    // a simple wrapper to reliably get the offset within an element  
    // see: http://www.jacklmoore.com/notes/mouse-position/
    static offset(e) {
        e = e || window.event;
        var target = (e.target || e.srcElement), rect = target.getBoundingClientRect(), offsetX = e.clientX - rect.left, offsetY = e.clientY - rect.top;
        return { x: offsetX, y: offsetY };
    }
    // use the animationFrame to do continuous rendering
    render() {
        // Typescript will not let us dereference this.ctx below unless we guarantee
        // it is not null (notice the declaration allows it to be null because canv.getContext("2d") 
        // below might fail.  So we need to only try to render if this.ctx is non-null
        if (!this.ctx) {
            return;
        }
        // if we've clicked, draw the rubber band.  use a strokeStyle of gray
        if (this.clickStart) {
            this.ctx.fillStyle = getRandomColor();
            const m = this.clickStart;
            this.ctx.fillRect(m.x - 15, m.y - 15, 30, 30);
            this.clickStart = null;
        }
        // do it again!  and again!  AND AGAIN!  AND ...       
        requestAnimationFrame(() => this.render());
    }
}
// a global variable for our state
var myDrawing;
// main function, to keep things together and keep the variables created self contained
function exec() {
    // find our container
    var div = document.getElementById("drawing");
    if (div) {
        // let's create a canvas and to draw in
        var canv = document.createElement("canvas");
        div.appendChild(canv);
        canv.id = "main";
        canv.style.width = "100%";
        canv.style.height = "100%";
        canv.width = canv.offsetWidth;
        canv.height = canv.offsetHeight;
        window.addEventListener('resize', (event) => {
            canv.width = canv.offsetWidth;
            canv.height = canv.offsetHeight;
        });
        // create a Drawing object
        myDrawing = new Drawing(canv);
        // kick off the rendering!
        myDrawing.render();
    }
}
exec();
//# sourceMappingURL=app.js.map