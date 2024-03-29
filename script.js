const container = document.getElementById('container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const audio = document.getElementById('audio');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Songs array
const songs = ['Hallway', 'Pickup', 'Transition'];

let songIndex = 0;

// Update DOM with specific song
const updateSong = () => {
    title.textContent = `${songs[songIndex]}`
    audio.src = `Music/${songs[songIndex]}.mp3`
    cover.src = `Image/${songs[songIndex]}.jpg`
}

updateSong(songs[songIndex]);

// Play song and change button
const playSong = () => {
    container.classList.add('play');
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';

    audio.play();
}

// Pause song and change button
const pauseSong = () => {
    container.classList.remove('play');
    playBtn.innerHTML = '<i class="fas fa-play"></i>';

    audio.pause();
}

// Next song
const nextSong = () => {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    updateSong(songs[songIndex]);
    playSong();
}

// Previous song
const prevSong = () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    updateSong(songs[songIndex]);
    playSong();
}

// Update progress bar
const updateProgress = (e) => {
    const progressPercent = (e.srcElement.currentTime / e.srcElement.duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Set progress time by click
const setProgressTime = (e) => {
    const width = progressContainer.offsetWidth;
    const mouseX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (mouseX / width) * duration;
}

// Event listeners
// Play/pause song
playBtn.addEventListener('click', () => {
    if (!container.classList.contains('play')) {
        playSong();
    } else {
        pauseSong();
    }
})

// Change song
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Progress bar
audio.addEventListener('timeupdate', updateProgress);

// Set current time
progressContainer.addEventListener('click', setProgressTime)

// Next song after
audio.addEventListener('ended', nextSong);