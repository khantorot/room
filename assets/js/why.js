(function () {
    const noise = document.querySelector('.noise');
    const page_img = document.querySelector('.page_img');

    setTimeout(function(){
        noise.classList.add('hide_img')
    }, 1000);
    setTimeout(function(){
        page_img.classList.add('hide_img');
        noise.classList.remove('hide_img');
    }, 2000);
    setTimeout(function(){
        noise.classList.add('hide_img')
    }, 3000);



    let page = document.querySelector('.page_container');
	let content = document.querySelector('.content');

	page.addEventListener('mousemove', parallax);


	function parallax(e) {
		let x = e.clientX - document.documentElement.clientWidth / 2;
		let y = e.clientY - document.documentElement.clientHeight / 2;

		content.style.transform = "rotateY(" + x / 30 + "deg) rotateX(" + y / 100 + "deg) translateX(" + -x / 3 + "px) translateY(" + -y / 3 + "px)";
	}
}())