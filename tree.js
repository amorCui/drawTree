

// function draw(startX, startY, len, angle) {
//     var c = document.getElementById("myCanvas");
//     var ctx = c.getContext("2d");
//     ctx.beginPath();
//     ctx.save();

//     ctx.translate(startX, startY);
//     ctx.rotate(angle * Math.PI / 180);
//     ctx.moveTo(0, 0);
//     ctx.lineTo(0, -len);
//     ctx.stroke();

//     if (len < 10) {
//         ctx.restore();
//         return;
//     }

//     draw(0, -len, len * 0.8, -15);
//     draw(0, -len, len * 0.8, 15);

//     ctx.restore();
// }


var drawTree = function(ctx, startX, startY, len, angle, branchWidth){
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = options.branchColor;
    ctx.fillStyle = options.leafColor;
    ctx.translate(startX,startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.lineWidth = branchWidth;
    ctx.moveTo(0,0);
    ctx.lineTo(0,-len);
    ctx.stroke();
    if(len < options.minLine ){
        //draw leaf
        ctx.beginPath();
        if(randomX(1) > 0 ){
            ctx.arc(0,-len,10,Math.PI/2,Math.PI);
        }else{
            ctx.arc(0,-len,10,0,Math.PI/2);
        }
        
        ctx.fill();

        ctx.restore();
        return;
    }

    drawTree(ctx, 0, -len, (len + randomX(options.lineRateRand)) * options.lineRate, -options.angelRate + randomX(options.angelRateRand), (branchWidth + randomX(options.branchWidthRateRand)) * options.branchWidthRate);
    drawTree(ctx, 0, -len, (len + randomX(options.lineRateRand)) * options.lineRate, options.angelRate + randomX(options.angelRateRand), (branchWidth + randomX(options.branchWidthRateRand)) * options.branchWidthRate);

    ctx.restore()


}

var options = {
    lineRate : 0.8,
    lineRateRand : 1,
    branchWidthRate : 0.8,
    branchWidthRateRand : 1,
    angelRate : 15,
    angelRateRand : 2,
    minLine : 3,
    branchColor : 'darkgreen',
    leafColor : 'green'
}

var randomX= function(n){
    return Math.random() * 2 * n - n;
}
