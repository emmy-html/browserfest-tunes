// grab the pause/play button
// counter to count how many times button has been pressed
var counter = 0;
// audio player
function playSong() {
    const playButton = document.getElementById("play");
    // define audio element
    const audioElement = document.getElementById("song-container");
    audioElement.play();
    // alternate between pause & play depending on if the song is playing or not
    counter++;
    if (counter % 2 == 0) {
        playButton.innerHTML = "&#9658;";
        audioElement.pause()
        // toggle between displaying play & pause symbols
    } else if (counter == 1) {
        playButton.innerHTML = "&#65372;&#65372;";
    } else {
        playButton.innerHTML = "&#65372;&#65372;";
    }
}
