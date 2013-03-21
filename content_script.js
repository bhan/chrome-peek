console.log("injection successful!");

document.onmousemove = function(e) {
    console.log("mouse moved to " + e.clientX + ", " + e.clientY);
}
