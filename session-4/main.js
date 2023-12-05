let watcher = false;
function computeRadius() {
    watcher = true;
    return 4;
}

function drawCircle(radius) {
    watcher = false;
    return radius*360;
}

function main () {
    const radius = computeRadius();

    while (watcher) {
        drawCircle (radius);
        }
}