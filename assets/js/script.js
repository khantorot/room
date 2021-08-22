function contentAnimation(data) {

	let page_name = data.next.namespace;

	if (page_name == 'index') {
		showIndex();
	} else if (page_name == 'tv') {
		showTv();
	} else if (page_name == 'who') {
		showWho();
	} else if (page_name == 'what') {
		showPage();
	} else if (page_name == 'how') {
		showPage();
	} else if (page_name == 'why') {
		showPage();
	}


	addJsCssFile("./assets/js/" + page_name + ".js", "js");
	addJsCssFile("./assets/css/" + page_name + ".css", "css");
	mode(mode_id);
}

function pageTransition(data) {




	if (data.trigger != 'back' && data.trigger != 'popstate' && data.trigger != 'forward') {
		let page_name = data.current.namespace;
		let link_name = data.trigger.dataset.barbaTrigger;
		if (page_name == 'index' && link_name == 'tv') {
			hideIndexAndShowTv();
		} else if (page_name == 'index' && link_name == 'who') {
			hideIndexAndShowWho();
		} else if (page_name == 'index' && link_name == 'what') {
			hideIndexAndShowWhat();
		} else if (page_name == 'index' && link_name == 'how') {
			hideIndexAndShowHow();
		} else if (page_name == 'index' && link_name == 'why') {
			hideIndexAndShowWhy();
		} else if (page_name == 'tv') {
			hideTv();
		} else if (page_name == 'who') {
			hideWho();
		} else if (page_name == 'what') {
			hidePage();
		} else if (page_name == 'how') {
			hidePage();
		} else if (page_name == 'why') {
			hidePage();
		}

		setTimeout(function () {
			removeJsCssFile("./assets/js/" + page_name + ".js", "js");
			removeJsCssFile("./assets/css/" + page_name + ".css", "css");

		}, 5100);
	}


}


let floor = document.querySelector('.floor_wrapper');
let floor_el = document.querySelector('.floor');

function showTv() {
	let room = document.querySelector('.tv');

	room.animate([
		{ transform: 'translateZ(120vw) translateY(0%)' },
		{ transform: 'translateZ(-60vw) translateY(0%)' },
		{ transform: '' }
	], {
		duration: 5000,
		easing: "ease-in"
	})
	floor.animate([
		{ transform: 'translateZ(180vw) translateY(0%)' },
		{ transform: 'translateZ(0vw) translateY(0%)' },
		{ transform: '' }
	], {
		duration: 5000,
		easing: "ease-in"
	})

	floor_el.style.background = 'url(../content/images/noise.gif)';
	floor_el.style.opacity = 0.2;
}

function hideTv() {
	let wall = document.querySelector('.tv');

	wall.animate([
		{ transform: '' },
		{ transform: 'translateZ(110vw)' }
	], {
		duration: 5000,
		easing: "ease-out"
	})
	floor.animate([
		{ transform: '' },
		{ transform: 'translateZ(110vw' }
	], {
		duration: 5000,
		easing: "ease-out"
	})
}


function showIndex() {
	let room = document.querySelector('.room');

	room.animate([
		{ transform: 'translateZ(90vw) translateY(20%)' },
		{ transform: 'translateZ(-60vw) translateY(0%)' },
		{ transform: '' }
	], {
		duration: 5000,
		easing: "ease-in"
	})
	floor.animate([
		{ transform: 'translateZ(150vw) translateY(20%)' },
		{ transform: 'translateZ(0vw) translateY(0%)' },
		{ transform: '' }
	], {
		duration: 5000,
		easing: "ease-in"
	})
	floor_el.style.background = 'url(./content/images/floor.png)';
	floor_el.style.opacity = 1;

}



function hideIndexAndShowTv() {
	let room = document.querySelector('.room');

	room.animate([
		{ transform: '' },
		{ transform: 'translate3d(0, 0, 30vw) rotateX(-30deg) rotateY(-30deg)' },
		{ transform: 'translate3d(0vw, 0vh, -240vw) rotateX(10deg) rotateY(310deg) rotateZ(40deg)' },
		{ transform: 'translate3d(0vw, 10vh, 90vw) rotateX(-40deg) rotateY(-180deg) rotateZ(360deg)' }
	], {
		duration: 5000,
		easing: "ease-in-out"
		// easing: "cubic-bezier(.54,1.58,.7,.26)"
	})
	floor_el.style.opacity = 0;
}

function hideIndexAndShowWho() {
	let room = document.querySelector('.room');

	room.animate([
		{ transform: '' },
		{ transform: 'scale(0.05) translateZ(-60vw)' }
	], {
		duration: 5000,
		easing: "ease-in"
	})
	floor.animate([
		{ transform: '' },
		{ transform: 'scale(0.05)' }
	], {
		duration: 5000,
		easing: "ease-in"
	})
}


function hideIndexAndShowWhat() {
	let room = document.querySelector('.room');

	room.animate([
		{ transform: '' },
		{ transform: 'translate3d(10vw, -10vh, 10vw) rotateX(-30deg) rotateY(50deg) rotateZ(-10deg)' },
		{ transform: 'translate3d(20vw, -10vh, 10vw) rotateX(10deg) rotateY(45deg) rotateZ(-0deg)' },
		{ transform: 'translate3d(0vw, 0vh, 20vw) rotateX(0deg) rotateY(130deg) rotateZ(-20deg)' },
		{ transform: 'translate3d(1vw, -10vh, 80vw) rotateX(0deg) rotateY(100deg) rotateZ(0deg) rotateZ(360deg)' },
	], {
		duration: 5000,
		easing: "ease-in-out"
	})
	floor_el.style.opacity = 0;
}

function hideIndexAndShowHow() {

	let room = document.querySelector('.room');

	room.animate([
		{ transform: '' },
		{ transform: 'translate3d(-20vw, -10vh, 10vw) rotateX(10deg) rotateY(-45deg)' },
		{ transform: 'translate3d(0vw, -10vh, -100vw) rotateX(0deg) rotateY(210deg)' },
		{ transform: 'translate3d(0vw, 30vh, -160vw) rotateX(-40deg) rotateY(-180deg) rotateZ(30deg)' },
		{ transform: 'translate3d(15vw, -15vh, 100vw) rotateX(-40deg) rotateY(-200deg) rotateZ(-360deg)' }
	], {
		duration: 5000,
		easing: "ease-in-out"
	})
	floor_el.style.opacity = 0;
}

function hideIndexAndShowWhy() {
	let room = document.querySelector('.room');

	room.animate([
		{ transform: '' },
		{ transform: 'translate3d(30vw, -35vh, 60vw) rotateX(0deg) rotateY(-30deg)' },
		{ transform: 'translate3d(0vw, 0vh, -200vw) rotateX(-90deg) rotateY(20deg)' },
		{ transform: 'translate3d(0, 10vh, -160vw) rotateX(90deg) rotateY(30deg) rotateZ(180deg)' },
		{ transform: 'translate3d(-20vw, 30vh, 85vw) rotateX(90deg) rotateY(160deg)' },
	], {
		duration: 5000,
		easing: "ease-out"
	})
	floor_el.style.opacity = 0;
}




function showWho() {
	let wall = document.querySelector('.wall');

	wall.animate([
		{ transform: 'scale(0.05)' },
		{ transform: 'scale(1)' },
		{ transform: '' }
	], {
		duration: 5000,
		// easing: "ease-out"
	})
	floor.animate([
		{ transform: 'scale(0.05)' },
		{ transform: 'scale(1)' },
		{ transform: '' }
	], {
		duration: 5000,
		// easing: "ease-out"
	})
	floor_el.style.background = 'url(./content/images/floor.png)';
	floor_el.style.opacity = 1;
}

function hideWho() {
	let wall = document.querySelector('.wall');

	wall.animate([
		{ transform: '' },
		{ transform: 'translateZ(140vw) translateY(20%)' }
	], {
		duration: 5000,
		// easing: "ease-out"
	})
	floor.animate([
		{ transform: '' },
		{ transform: 'translateZ(140vw) translateY(20%)' }
	], {
		duration: 5000,
		// easing: "ease-out"
	})
}



function hidePage() {
	const noise = document.querySelector('.noise');

	noise.classList.remove('hide_img');
}

function showPage() {
	floor_el.style.opacity = 0;
}



function removeJsCssFile(file, type) {
	var tag = (type == "js") ? "script" : (type == "css") ? "link" : "none"
	var attr = (type == "js") ? "src" : (type == "css") ? "href" : "none"
	var elems = document.getElementsByTagName(tag)
	for (var i = elems.length; i >= 0; i--) {
		if (elems[i] && elems[i].getAttribute(attr) != null && elems[i].getAttribute(attr).indexOf(file) != -1)
			elems[i].parentNode.removeChild(elems[i])
	}
}

function addJsCssFile(file, type) {
	if (type == "js") {
		var script = document.createElement('script');
		script.src = file;
		script.defer = true;
		document.getElementsByTagName('head')[0].appendChild(script);
	} else if (type == "css") {
		var link = document.createElement("link");
		link.href = file.substr(0, file.lastIndexOf(".")) + ".css";
		link.type = "text/css";
		link.rel = "stylesheet";
		document.getElementsByTagName("head")[0].appendChild(link);
	}
}


function delay(n) {
	n = n || 5000;
	return new Promise(done => {
		setTimeout(() => {
			done();
		}, n)
	});
}


barba.init({
	transitions: [{
		name: 'default-transition',
		async leave(data) {
			const done = this.async();
			pageTransition(data);
			await delay(5000);
			done();
		},
		async enter(data) {
			contentAnimation(data);
		},
		async once(data) {
			contentAnimation(data);
		}
	}]
});







let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

// let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");

let track_index = 0;
let mode_id = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
	{
		color: '#d21f42',
		path: ""
	},
	{
		color: '#073130',
		path: "./content/audio/track.mp3"
	},
	{
		color: '#060730',
		path: "./content/audio/audio.mp3"
	},
	{
		color: '#134321',
		path: "./content/audio/music.mp3"
	},
];

function mode(track_index) {
	mode_id = track_index;

	const box = {
		back: document.querySelectorAll('.back'),
		top: document.querySelectorAll('.top'),
		bottom: document.querySelectorAll('.bottom'),
		front: document.querySelectorAll('.front'),
		left: document.querySelectorAll('.left'),
		right: document.querySelectorAll('.right')
	};

	for (key in box) {
		box[key].forEach(element => {
			element.style.borderColor = track_list[mode_id].color;
		});
	}

	let buttons = document.querySelectorAll('.player .buttons div');

	buttons.forEach(element => {
		element.style.backgroundColor = track_list[mode_id].color;
	});
}



function loadTrack(track_index) {
	// clearInterval(updateTimer);
	// resetValues();

	if (track_index != 0) {
		curr_track.src = track_list[track_index].path;
		curr_track.load();
	}

	// updateTimer = setInterval(seekUpdate, 1000);
	curr_track.addEventListener("ended", nextTrack);
	mode(track_index);
}

// function resetValues() {
// 	seek_slider.value = 0;
// }

loadTrack(track_index);



function playpauseTrack() {
	if (mode_id != 0) {
		if (!isPlaying) playTrack();
		else pauseTrack();
	} else {
		track_index = 1;
		loadTrack(track_index);
		playTrack();
	}

}

function playTrack() {
	if (mode_id != 0) {
		curr_track.play();
		isPlaying = true;
		// playpause_btn.innerHTML = '||';
	} else {
		pauseTrack()
	}
}

function pauseTrack() {
	curr_track.pause();
	isPlaying = false;
	// playpause_btn.innerHTML = 'o';
}

function nextTrack() {
	if (track_index < track_list.length - 1)
		track_index += 1;
	else track_index = 0;
	loadTrack(track_index);
	playTrack();
}

function prevTrack() {
	if (track_index > 0)
		track_index -= 1;
	else track_index = track_list.length;
	loadTrack(track_index);
	playTrack();
}

// function seekTo() {
// 	seekto = curr_track.duration * (seek_slider.value / 100);
// 	curr_track.currentTime = seekto;
// }

function setVolume() {
	curr_track.volume = volume_slider.value / 100;
}

// function seekUpdate() {
// 	let seekPosition = 0;

// }
