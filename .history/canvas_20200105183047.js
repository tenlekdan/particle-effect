

(function () {
    var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var c = canvas.getContext('2d');
    let mouse = {
        x: undefined,
        y: undefined
    }

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })


    var maxRad = 50;
    var minRad = 3;
    var colorList = [
        "#ffaa33",
        "#99ffaa",
        "#00ff00",
        "#4411aa",
        "#ff1100"
    ];

    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRad = radius;
        this.color = colorList[Math.floor(Math.random() * colorList.length)];
        this.draw = function () {
            //draw circle
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            // c.strokeStyle = 'blue';
            c.fillStyle = this.color;
            c.fill();
            // c.stroke();
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

            //interactivity
            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
                mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRad)
                    this.radius += 1;
            }
            else if (this.radius > this.minRad) {
                this.radius -= 1;
            }


            this.draw();
        }
    }


    let circleList = [];

    for (let i = 0; i < 800; i++) {
        let radius = Math.random() * 6 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - .5) * 3;
        let dy = (Math.random() - .5) * 3;

        circleList.push(new Circle(x, y, dx, dy, radius));
    }


    var animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < circleList.length; i++) {
            circleList[i].update();
        }
    }

    animate();
})();
