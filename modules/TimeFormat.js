function formatTime(total) {
    var minutes = total / 60,
        seconds = Math.round(total % 60),
        hours = Math.round(minutes / 60),
        minutes = Math.round(minutes % 60);

    return hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

exports.calculate = formatTime;