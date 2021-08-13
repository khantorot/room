(function () {
	
	let page = document.querySelector('.page_container');
	let wall = document.querySelector('.wall');
	let floor = document.querySelector('.floor_wrapper');

	page.addEventListener('mousemove', parallax); 
	
	function parallax(e) {
		let x = e.clientX - document.documentElement.clientWidth / 2;
		let y = e.clientY - document.documentElement.clientHeight / 2;

		wall.style.transform = "rotateY(" + x / 40 + "deg) rotateX(" + y / 120 + "deg) translateX(" + -x / 5 + "px) translateY(" + -y / 5 + "px)";
		floor.style.transform = "rotateY(" + x / 40 + "deg) rotateX(" + y / 120 + "deg) translateX(" + -x / 5 + "px) translateY(" + -y / 5 + "px)";
	};

}());