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