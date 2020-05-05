

(function () {
    var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');
    // c.fillRect(x, y, width, height);
    // c.fillRect(100, 100, 50, 50);

    // // lines
    // c.beginPath();
    // c.moveTo(10, 170);
    // c.lineTo(100, 300);
    // c.stroke();



    let x = Math.random()*innerWidth;
    let y = Math.random()*innerHeight;
    let radius = 30;
    let dx = 8;
    let dy = 8;

    var animate = () => {
        requestAnimationFrame(animate);

        c.clearRect(0, 0, innerWidth, innerHeight);
        //draw circle
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.stroke();

        if (x+radius > innerWidth || x-radius <= 0) {
            dx = -dx;
        }
        if (y+radius > innerHeight || y-radius <= 0) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }

    animate();
})();