var dom = document.getElementById('clock');
var ctx = dom.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width / 2;

function drawBackground() {
    ctx.save();
    ctx.translate(r, r);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(0, 0, r - 5, 0, 2 * Math.PI, false);
    ctx.stroke();
    var hourNumber = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    hourNumber.forEach(function (Number, i) {
        var rad = 2 * Math.PI / 12 * i;
        var x = (r - 30) * Math.cos(rad);
        var y = (r - 30) * Math.sin(rad);
        ctx.fillText(Number, x, y);
    });
    for (var i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = (r - 18) * Math.cos(rad);
        var y = (r - 18) * Math.sin(rad);
        ctx.beginPath();
        if (i % 5 === 0) {
            ctx.fillStyle = '#000';
            ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
        } else {
            ctx.fillStyle = '#ccc';
            ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
        }
        ctx.fill();
    }
}
function drawHour(hour, minute) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 12 * hour;
    var mrad = 2 * Math.PI / 12 / 60 * minute;
    ctx.rotate(rad + mrad);
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -r / 2);
    ctx.stroke();
    ctx.restore();
}
function drawMinute(minute) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 60 * minute;
    ctx.rotate(rad);
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -r + 30);
    ctx.stroke();
    ctx.restore();
}
function drawSecond(second) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#c14543';
    var rad = 2 * Math.PI / 60 * second;
    ctx.rotate(rad);
    ctx.moveTo(-2, 20);
    ctx.lineTo(2, 20);
    ctx.lineTo(1, -r + 18);
    ctx.lineTo(-1, -r + 18);
    ctx.fill();
    ctx.restore();
}
function drawDot() {
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.arc(0, 0, 3, 0, 2 * Math.PI, false);
    ctx.fill();
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    drawBackground();
    drawHour(hour, minute);
    drawMinute(minute);
    drawSecond(second);
    drawDot();
    ctx.restore();
}
setInterval(draw, 1000);
