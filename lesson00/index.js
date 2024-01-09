const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDivTwo");


myButton.addEventListener("click", begin);
function begin() {
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame, 5);
    function frame() {
        if (scaleX >= 2 || scaleY >= 2) {
            clearInterval(timerId);
        }
        else {
            scaleX += 0.05;
            scaleY += 0.05;
            myAnimation.style.transform = "scale(" + scaleX + "," + scaleY + ")";

        }
    }
}