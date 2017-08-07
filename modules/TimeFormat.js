function formatTime(seconds) {
    var secPerMinute = 60;
    var secPerHour = 60 * 60;

    if (seconds > secPerHour) {
        return showHourMinSec(seconds);
    } else if (seconds > secPerMinute) {
        return showMinSec(seconds);
    } else {
        return seconds + " sekund";
    }

    //Widzę, że te dwie metody mają powtarzalny kod. Podpowiesz proszę, jak sprawić, żeby nie było powtórzenia?
    function showMinSec(seconds) {
        var minutes = Math.floor(seconds / secPerMinute);
        var remainingSeconds = seconds - (minutes * secPerMinute);
        var result = minutes + " minutes and " + remainingSeconds + " seconds";
        return result;
    }

    function showHourMinSec(seconds) {
        var hours = Math.floor(seconds / secPerHour);
        var remainingMinSec = seconds - (hours * secPerHour);
        var result = hours + " hours and " + showMinSec(remainingMinSec);
        return result;
    }
}

exports.calculate = formatTime;