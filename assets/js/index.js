(function () {

	let page = document.querySelector('.page_container');
	let room = document.querySelector('.room');
	let floor = document.querySelector('.floor_wrapper');

	page.addEventListener('mousemove', parallax);


	function parallax(e) {
		let x = e.clientX - document.documentElement.clientWidth / 2;
		let y = e.clientY - document.documentElement.clientHeight / 2;

		room.style.transform = "rotateY(" + x / 30 + "deg) rotateX(" + y / 100 + "deg) translateX(" + -x / 3 + "px) translateY(" + -y / 3 + "px) translateZ(-60vw)";
		floor.style.transform = "rotateY(" + x / 30 + "deg) rotateX(" + y / 100 + "deg) translateX(" + -x / 3 + "px) translateY(" + -y / 3 + "px) ";
	}




	// let dendy = document.querySelector('.box10');
	// let m_id = 1;

	// dendy.addEventListener('click', function () {
	// 	loadTrack(m_id);
	// 	playTrack();
	// 	if (m_id < 3) {
	// 		m_id++;
	// 	} else {
	// 		m_id = 0;
	// 	}
	// });





	play();

	function play() {
		var context, controller, rectangle, loop;

		context = document.querySelector("canvas").getContext("2d");

		let el_h = document.documentElement.clientWidth / 9;
		let el_w = document.documentElement.clientWidth / 5;





		context.canvas.height = el_h;
		context.canvas.width = el_w;

		rectangle = {

			height: 30,
			jumping: true,
			width: 30,
			x: el_w / 2 - 15, // center of the canvas
			x_velocity: 0,
			y: 0,
			y_velocity: 0

		};

		controller = {

			left: false,
			right: false,
			up: false,
			keyListener: function (event) {

				var key_state = (event.type == "keydown") ? true : false;

				switch (event.keyCode) {

					case 37:// left key
						controller.left = key_state;
						break;
					case 38:// up key
						controller.up = key_state;
						break;
					case 39:// right key
						controller.right = key_state;
						break;

				}

			}

		};

		loop = function () {

			if (controller.up && rectangle.jumping == false) {

				rectangle.y_velocity -= 20;
				rectangle.jumping = true;

			}

			if (controller.left) {

				rectangle.x_velocity -= 0.5;

			}

			if (controller.right) {

				rectangle.x_velocity += 0.5;

			}

			rectangle.y_velocity += 1.5;// gravity
			rectangle.x += rectangle.x_velocity;
			rectangle.y += rectangle.y_velocity;
			rectangle.x_velocity *= 0.9;// friction
			rectangle.y_velocity *= 0.9;// friction

			// if rectangle is falling below floor line
			if (rectangle.y > el_h - 48) {

				rectangle.jumping = false;
				rectangle.y = el_h - 48;
				rectangle.y_velocity = 0;

			}

			// if rectangle is going off the left of the screen
			if (rectangle.x < -30) {

				rectangle.x = el_w;

			} else if (rectangle.x > el_w) {// if rectangle goes past right boundary

				rectangle.x = -30;

			}

			context.fillStyle = "#30061c";
			context.fillRect(0, 0, el_w, el_h);// x, y, width, height
			context.fillStyle = "#d21f42";// hex for red
			context.beginPath();
			context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
			context.fill();
			context.strokeStyle = "#d21f42";
			context.lineWidth = 5;
			context.beginPath();
			context.moveTo(0, el_h - 20);
			context.lineTo(el_w, el_h - 20);
			context.stroke();

			// call update when the browser is ready to draw again
			window.requestAnimationFrame(loop);

		};

		document.querySelector('.box9').addEventListener('click', function () {
			if (controller.up == false) {
				controller.up = true;
			} else if (controller.up == true && controller.right == false) {
				controller.right = true;
			} else {
				controller.up = false;
				controller.right = false;
			}
		})
		document.querySelector('.box10').addEventListener('click', function () {
			if (rectangle.width != 80) {
				rectangle.width = 80;
			} else {
				rectangle.width = 30;
			}
		})
		window.addEventListener("keydown", controller.keyListener)
		window.addEventListener("keyup", controller.keyListener);
		window.requestAnimationFrame(loop);

	}



	window.addEventListener('resize', function () {
		play();
	})
}())