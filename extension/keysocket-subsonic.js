function onKeyPress(key) {
    var iframe = document.getElementById('playQueue');
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

    if (key === NEXT) {
        var nextButton = innerDoc.getElementById('nextButton');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var isPlaying = innerDoc.getElementById('startButton').style.display === 'none';
        var playPauseButton = null;
        if (isPlaying) {
            playPauseButton = innerDoc.getElementById('stopButton');
        } else {
            playPauseButton = innerDoc.getElementById('startButton');
        }
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = innerDoc.getElementById('previousButton');
        simulateClick(backButton);
    } else if (key === STOP) {
        var stopButton = innerDoc.getElementById('stopButton');
        simulateClick(stopButton);
    }
}
