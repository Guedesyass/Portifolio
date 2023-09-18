/*==================== REDIRECTION TO INITIAL PAGE ====================*/
setTimeout (function() {
    window.location.href = "index.html";
}, 11000)


function StartTimer (duration,display) {


    var timer = duration, minutes, seconds;

    setInterval(() => {
        minutes =parseInt(timer*60,10);
        seconds = parseInt(timer%60, 10);

        seconds = seconds < 10 ? "0" + seconds :seconds;

        display.textContent = `Você sera redirecionado para a página inicial em : ${seconds}s`;

        if(--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


window.onload = function() {
    var duration = 0.17*60;
    var display = document.getElementById('seconds');

    StartTimer(duration,display);
}
