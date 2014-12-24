var player = document.getElementById("player");
var playTime = 0;


// Move to next song when this one ends...
player.addEventListener("ended", next, false);

// show time of current song
player.addEventListener("timeupdate", function(e) {
	currentTime = Math.floor(player.currentTime);
	if (currentTime !== playTime)
	{
		playTime = currentTime;
		minutes = Math.floor(playTime / 60);
		seconds = playTime % 60;
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}
		window.requestAnimationFrame(function() {
			document.getElementById("minutes").innerHTML = minutes;
			document.getElementById("seconds").innerHTML = seconds;
		});	
	}
});

document.getElementById("play").addEventListener("click", playButton, false);
document.getElementById("next").addEventListener("click", next, false);
document.getElementById("previous").addEventListener("click", previous, false);

songs = document.querySelectorAll(".songs");

for (var i = 0; i < songs.length; i++) {
	songs[i].addEventListener("click", songClick, false);
}

function songClick(e)
{
	if (e.target.nodeName === "A")
		{
			// console.log(e);
			song = e.target;
			load(song);
		}
	e.preventDefault();
	e.stopPropagation();
}


/**
* Toggle the player between paused and playing
*/
function toggle()
{
	if (player.paused)
	{
		player.play();
		document.getElementById("play").setAttribute("class", "active");
	}
	else
	{
		player.pause();
		document.getElementById("play").removeAttribute("class");
	}
}


/**
	Function called by the play/pause button
*/
function playButton()
{
	// if nothing playing, start the first song
	if (player.src === "")
	{
		// get the first song
		song = document.querySelector(".songs a");
		load(song);
	}
	else
	{
		toggle();
	}
	return false;
}


/**
	Move to the next track
*/
function next()
{
	// if nothing is playing
	songs = document.querySelectorAll(".songs a");
	for (var i = 0; i < songs.length; i++)
	{
		if (songs[i].href === player.src && i !== songs.length - 1)
		{
			load(songs[i + 1]);
			return false;
		}
	}
}


/**
	Move to the prior track
*/
function previous()
{
	// if nothing is playing
	songs = document.querySelectorAll(".songs a");
	for (var i = 0; i < songs.length; i++)
	{
		if (songs[i].href === player.src && i !== 0)
		{
			load(songs[i - 1]);
			return false;
		}
	}
}

/**
	Load a song into the player and set the active class for that song
	takes an "a" element
*/
function load(song)
{
	// remove the playing class from any other song...
	var active = document.querySelector("li.active");
	if (active)
	{
		active.classList.remove("active");
	}
	song.parentNode.classList.add("active");
	player.src = song.href;
	document.getElementById("nowplaying").innerHTML = song.innerHTML;
	toggle();
}