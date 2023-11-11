var clicks = 0;
var counter = document.getElementById("clicks");
var overlay = document.getElementById("overlay");
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var stopButton = document.getElementById("stop");
var counting = false;

function incrementCounter() {
    clicks++;
    counter.innerHTML = clicks;
}

function startCounting() {
    if (!counting) {
        counting = true;
        //overlay.style.display = "none";
        document.addEventListener("click", incrementCounter);
        clicks = -1;
    }
}

function stopCounting() {
    counting = false;
    //overlay.style.display = "block";
    document.removeEventListener("click", incrementCounter);
}

startButton.addEventListener("click", startCounting);
stopButton.addEventListener("click", stopCounting);

// ---- Code um das Fenster sichtbar zu halten ----

// var myWindow = window.open("", "", "width=200,height=100");
// myWindow.document.write("<p>Das Fenster bleibt sichtbar, bis Sie es manuell schließen.</p>");

// var clickCount = 0;
// myWindow.document.write("<p>Die Anzahl der Klicks beträgt: " + clickCount + "</p>");

// myWindow.document.onclick = function () {
//     clickCount++;
//     myWindow.document.write("<p>Die Anzahl der Klicks beträgt: " + clickCount + "</p>");
// };

// setInterval(function () {
//     myWindow.focus();
// }, 1000);