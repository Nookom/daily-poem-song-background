const poemContainer = document.getElementById('daily-poem');
const songContainer = document.getElementById('daily-song');
const audioElement = document.getElementById('daily-audio');
const body = document.body;

const poems = [
    'Charlie is my golden, longhaired sin.
His eyes tell all his dark brown chocolate thoughts.
All he wants is loving without end,
Ravenous for touching of all sorts.
Left on his own, he cannot comprehend
In lonely misery how I defend
Even just one breath away from him.
Copyright by Nicholas Gordon',
    'Grandmothers are mothers who are grand,
Restoring the sense that our most precious things
Are those that do not change much over time.
No love of childhood is more sublime,
Demanding little, giving on demand,
More inclined than most to grant the wings
On which we fly off to enchanted lands.
Though grandmothers must serve as second mothers,
Helping out with young and restless hearts,
Each has all the patience wisdom brings,
Remembering our passions more than others,
Soothing us with old and well-honed arts.
Copyright by Nicholas Gordon',
    'There is no greater passion than for beauty --
Ecstasy distilled into a song --
Nor calling more exquisite than the duty
To make our own the truths for which we long.
Here's to you, then! And for what you've done
To be the muse who mirrors well our hearts,
Restoring the lone many to the one
Common love that underlies all arts.
O love of being, bearer of our pain!
Well might we praise the gardeners who bring
Our passions into bloom, that we again
Might hear the sunlit bird within us sing.
Long may you ply what practices you've learned,
Profiting all by artistry you've earned.
Copyright by Nicholas Gordon',
    // Add more poems here...
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
