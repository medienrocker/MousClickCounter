var clicks = 0;
var counter = document.getElementById("clicks");
var overlay = document.getElementById("overlay");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var pauseButton = document.getElementById("pause");
var counting = false;
var isPaused = false;

function incrementCounter() {
    clicks++;
    counter.innerHTML = clicks;
}

function startCounting() {
    if (!counting && !isPaused) {
        counting = true;
        startButton.classList.add("mc_active");
        pauseButton.style.display = "";
        pauseButton.innerHTML = "PAUSE";
        document.addEventListener("click", incrementCounter);
        clicks = -1;
    }
}

function stopCounting() {
    counting = false;
    isPaused = false;
    startButton.classList.remove("mc_active");
    pauseButton.style.display = "none";
    pauseButton.classList.remove("mc_pause");
    document.removeEventListener("click", incrementCounter);
}

function togglePause() {
    isPaused = !isPaused;
    if (isPaused) {
        pauseButton.innerHTML = "...weiter";
        //pauseButton.style.backgroundColor = "gold";
        pauseButton.classList.add("mc_pause");
        startButton.classList.remove("mc_active");
        document.removeEventListener("click", incrementCounter);
    } else {
        document.addEventListener("click", incrementCounter);
        clicks -= 1;
        startButton.classList.add("mc_active");
        pauseButton.innerHTML = "PAUSE";
        pauseButton.classList.remove("mc_pause");
    }
    console.log("isPaused = " + isPaused);
}

function resetPause() {
    
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