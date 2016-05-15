var doc = new jsPDF("portrait", "in", "letter");
// 3.5 x 2.25 inches

/*
doc.setLineWidth(14);
doc.setDrawColor(96,0,0);
doc.line(72, 72, 144, 72); // horizontal line
*/

var MARGIN = {
    top: 0.25,
    left: 0.25,
    right: 0.25,
    bottom: 0.25
};
var CENTER = { x:4.25, y:5.5 };
var dim = { h: 2.25, w: 3.5 };

doc.setDrawColor(0,0,255);
doc.setLineWidth(0.01);
doc.line(CENTER.x, 0.25, CENTER.x, 10.75);
doc.line(0.25, CENTER.y, 8.25, CENTER.y);

//rows
for(var i=0; i<4; i++) {
    var y = CENTER.y-(2*dim.h) + (dim.h*i);
    
    //columns
    for (var col=0; col<2; col++) {
        var x = (col==0) ? CENTER.x - dim.w : CENTER.x;
        
        //draw the box
        doc.setLineWidth(0.014);
        doc.setDrawColor(0,0,0);
        doc.rect(x, y, dim.w, dim.h);
    }
    //doc.setLineWidth(0.1);
    doc.setDrawColor(112,0,0);
    //doc.line(MARGIN.left, y + 0.1, 8, y + 0.1); // horizontal line
    //doc.line(MARGIN.left, y + h - 0.3, 8, y + h - 0.3); // horizontal line
    //doc.rect(x, y+0.1, 8, 0.2);
}
