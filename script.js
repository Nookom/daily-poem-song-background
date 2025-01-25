const poemContainer = document.getElementById('daily-poem');
const songContainer = document.getElementById('daily-song');
const audioElement = document.getElementById('daily-audio');
const body = document.body;

const poems = [
    'Poem 1',
    'Poem 2',
    'Poem 3',
    // Add more poems here...
];

const songs = [
    { title: 'Song 1', artist: 'Artist 1', audio: 'song1.mp3' },
    { title: 'Song 2', artist: 'Artist 2', audio: 'song2.mp3' },
    { title: 'Song 3', artist: 'Artist 3', audio: 'song3.mp3' },
    // Add more songs here...
];

const backgrounds = [
    'animal1.jpg',
    'animal2.jpg',
    'animal3.jpg',
    // Add more background images here...
];

const today = new Date();
const dayOfYear = today.getDate() + today.getMonth() * 30;

poemContainer.textContent = poems[dayOfYear % poems.length];
songContainer.textContent = `${songs[dayOfYear % songs.length].title} by ${songs[dayOfYear % songs.length].artist}`;
audioElement.src = songs[dayOfYear % songs.length].audio;
body.style.backgroundImage = `url(${backgrounds[dayOfYear % backgrounds.length]})`;
