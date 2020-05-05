

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



    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = function () {
            //draw circle
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fill();
            c.stroke();
        }

        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius <= 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius <= 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }


    let circleList = [];

    for (let i = 0; i < 100; i++) {
        let radius = 30;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - .5) * 8;
        let dy = (Math.random() - .5) * 8;

        circleList.push(new Circle(x, y, dx, dy, radius));
    }

    var circle = new Circle(300, 300, 5, 5, 30);

    var animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < circleList.length; i++) {
            circleList[i].update();
        }
    }

    animate();
})();
