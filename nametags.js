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


doc.setDrawColor(0,0,255);
doc.setLineWidth(0.01);
doc.line(page.center.x, 0, page.center.x, page.h);
doc.line(0, page.center.y, page.w, page.center.y);

var rows = Math.floor(page.h / dim.h);
var cols = Math.floor(page.w / dim.w);
console.log("Rows: "+rows);
console.log("Cols: "+cols);


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

for(var row=0; row<rows; row++) {
    var y = page.center.y - dim.h * rows/2 + (row * dim.h);

    doc.setDrawColor(192,0,0);
    doc.setLineWidth(0.2);
    doc.line(page.m, y+0.2, page.w-page.m, y+0.2);
    doc.line(page.m, y+dim.h-0.2, page.w-page.m, y+dim.h-0.2);
}
