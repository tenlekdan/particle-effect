

(function(){
    var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');
    // c.fillRect(x, y, width, height);
    c.fillRect(100, 100, 50, 50);

    // lines
    c.beginPath();
    c.moveTo(10, 170);
    c.lineTo(100, 300)
})();