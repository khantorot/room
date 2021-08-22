(function () {

	let page = document.querySelector('.page_container');
	let tv = document.querySelector('.tv');
	let left_menu = document.querySelector('.left_menu');
	let tv_content = document.querySelector('.tv_content_container');
	let content = document.querySelectorAll('.content img');
	let noise = document.querySelector('.noise');

	tv_content.addEventListener('click', showNoise);
	page.addEventListener('mousemove', parallax);
	page.addEventListener('mouseover', tvShow);
	left_menu.addEventListener('click', playMusic);

	function playMusic(e) {
		if (e.target.classList.contains('menu_track')) {
			let id = e.target.getAttribute('data-id');
			loadTrack(id);
			playTrack();
		}
	}

	function showNoise() {
		floor_el.style.background = 'url(./content/images/noise.gif)';
		noise.style.opacity = 1;
	}

	function parallax(e) {
		let x = e.clientX - document.documentElement.clientWidth / 2;
		let y = e.clientY - document.documentElement.clientHeight / 2;

		tv.style.transform = "rotateY(" + x / 30 + "deg) rotateX(" + -y / 50 + "deg) translateX(" + -x / 3 + "px) translateY(" + -y / 3 + "px) scale(0.8)";
		floor.style.transform = "rotateY(" + x / 30 + "deg) rotateX(" + -y / 50 + "deg) translateX(" + -x / 3 + "px) translateY(" + -y / 3 + "px)";
	}

	function tvShow(e) {
		if (e.target.classList.contains('bottom')) {
			tv.classList.add('top_active')
		} else {
			tv.classList.remove('top_active')
		}

		if (e.target.classList.contains('menu_item')) {
			let id = e.target.getAttribute('data-id');

			noise.style.opacity = 1;
			floor_el.style.background = 'url(./content/images/noise.gif)';
			setTimeout(function () {
				content.forEach(element => {
					element.style.opacity = 0;
				});
				content[id].style.opacity = 0.6;

				floor_el.style.background = 'url(' + content[id].src + ')';
			}, 400)
		}
	}

}())

