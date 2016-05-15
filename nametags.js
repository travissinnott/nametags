var doc = new jsPDF("portrait", "in", "letter");
// 3.5 x 2.25 inches

var Page = function(width, height, margin){
    this.w = width;
    this.h = height;
    this.m = margin;
    this.center = {
        x: width / 2,
        y: height / 2
    };
    return this;
};

var dim = { h: 2.25, w: 3.5 };
var page = new Page(8.5, 11, 0.25);

//Draw Center Axis
doc.setDrawColor(0,0,255);
doc.setLineWidth(0.01);
doc.line(page.center.x, 0, page.center.x, page.h);
doc.line(0, page.center.y, page.w, page.center.y);

//Calculate number of rows and cols
var rows = Math.floor(page.h / dim.h);
var cols = Math.floor(page.w / dim.w);
console.log("Rows: "+rows);
console.log("Cols: "+cols);

//Draw cut lines
doc.setDrawColor(192,192,192);
doc.setLineWidth(0.01);

//rows
for (var row=0; row <= rows; row++) {
    var y = page.center.y - dim.h * rows/2 + (row * dim.h);
    console.log("Row at: "+y);
    doc.line(0.5, y, 8, y);
}

//cols
for (var col=0; col < rows+1; col++) {
    var x = page.center.x - dim.w * cols/2 + col * dim.w;
    console.log("Col at: "+x);
    doc.line(x, 0.5, x, 10.5);
}

//doc.setFont("helvetica");
doc.setFont("times");
//doc.setFontType("bold");

//Draw Badges
for(var row=0; row<rows; row++) {
    var y = page.center.y - dim.h * rows/2 + (row * dim.h);

    doc.setDrawColor(192,0,0);
    doc.setLineWidth(0.2);
    doc.line(page.m, y+0.2, page.w-page.m, y+0.2);
    doc.line(page.m, y+dim.h-0.2, page.w-page.m, y+dim.h-0.2);

    for (var col=0; col<cols; col++){
        var x = page.center.x - dim.w * cols/2 + col * dim.w;
        doc.setFont("times");
        doc.setFontSize(64);
        doc.text(x+0.3, y+dim.h-1, 'Travis');
        doc.setFontSize(18);
        doc.text(x+0.4, y+dim.h-0.65, 'Sinnott');
        doc.setFont("helvetica");
        doc.setFontSize(8);
        doc.text(x+0.2, y+dim.h-0.4, 'TEAM, MANAGEMENT, AND LEADERSHIP PROGRAM');        
    }
}
