function pageRoom() {

    var context, controller, rectangle, loop;

    context = document.querySelector(".play").getContext("2d");

    let el_h = document.documentElement.clientWidth * 12 / 100;
    let el_w = document.documentElement.clientWidth * 20 / 100;





    context.canvas.height = el_h;
    context.canvas.width = el_w;


    rectangle = {

        height: el_w / 10,
        jumping: true,
        width: el_w / 10,
        x: el_w / 2 - 15,
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

                case 37:
                    controller.left = key_state;
                    break;
                case 38:
                    controller.up = key_state;
                    break;
                case 39:
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

        rectangle.y_velocity += 1.5;
        rectangle.x += rectangle.x_velocity;
        rectangle.y += rectangle.y_velocity;
        rectangle.x_velocity *= 0.9;
        rectangle.y_velocity *= 0.9;

        
        if (rectangle.y > el_h - 70) {

            rectangle.jumping = false;
            rectangle.y = el_h - 70;
            rectangle.y_velocity = 0;

        }

        
        if (rectangle.x < -30) {

            rectangle.x = el_w;

        } else if (rectangle.x > el_w) {

            rectangle.x = -30;

        }


        context.fillStyle = "#e02b2b";
        context.fillRect(0, 0, el_w, el_h);
        context.fillStyle = '#000';
        context.beginPath();
        context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        context.fill();
        context.strokeStyle = "#000";
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(0, el_h - 40);
        context.lineTo(el_w, el_h - 40);
        context.stroke();

        
        window.requestAnimationFrame(loop);

    };

    document.querySelector('.dendy_tv').addEventListener('click', playControl);


    function playControl() {
        if (controller.up == false) {
            controller.up = true;
        } else {
            controller.up = false;
        }
    }


    window.addEventListener("keydown", controller.keyListener)
    window.addEventListener("keyup", controller.keyListener);
    window.requestAnimationFrame(loop);
}







function pageTv() {

    let content = document.querySelectorAll('.content img');
    let noise = document.querySelector('.noise');
    let tv_tv = document.querySelector('.tv_tv');
    let floor_content = document.querySelector('.floor_content');

    tv_tv.addEventListener('mousemove', contentShow);
    tv_tv.addEventListener('click', clickAction);


    function clickAction(e) {
        if (e.target.classList.contains('menu_track')) {
            let id = e.target.getAttribute('data-id');
            loadTrack(id);
            playTrack();
        }
    }

    function showNoise() {
        floor_content.style.background = 'url(../content/images/noise.gif)';
        noise.style.opacity = 1;
    }

    function contentShow(e) {

        if (e.target.classList.contains('menu_item')) {
            let id = e.target.getAttribute('data-id');

            showNoise()
            setTimeout(function () {
                content.forEach(element => {
                    element.style.opacity = 0;
                });
                content[id].style.opacity = 0.5;

                floor_content.style.background = 'url(' + content[id].src + ')';
            }, 400)
        }
    }
}




function pageWhat() {
}

function pageWhy() { 
}

function pageWho() {
}

function pageHow() {
}







const body = document.querySelector('body');

body.addEventListener('mousemove', parallax);

function parallax(e) {
    const room = document.querySelector('.room');
    let r = [];


    let x = e.clientX - document.documentElement.clientWidth / 2;
    let y = e.clientY - document.documentElement.clientHeight / 2;
    r[0] = y / 100;
    r[1] = x / 30;
    r[2] = -x / 3;
    r[3] = -y / 3;

    room.style.transform = 'rotateX(' + r[0] + 'deg) rotateY(' + r[1] + 'deg) translate(' + r[2] + 'px, ' + r[3] + 'px)';
}




let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");


let track_index = 0;

let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
    {
        color: '#606060',
        path: ""
    },
    {
        color: '#979a53',
        path: "./content/audio/style0.mp3"
    },
    {
        color: '#395e4c',
        path: "./content/audio/style1.mp3"
    },
    {
        color: '#4c3e59',
        path: "./content/audio/style2.mp3"
    },
    {
        color: '#5e2e2e',
        path: "./content/audio/style3.mp3"
    },
];




function loadTrack(i) {

    if (i != 0) {
        curr_track.src = track_list[i].path;
        curr_track.load();

        track_index = i;
    }

    curr_track.addEventListener("ended", nextTrack);

    document.querySelector(':root').style.setProperty('--index', track_list[track_index].color);
}

loadTrack(track_index);



function playpauseTrack() {
    if (track_index != 0) {
        if (!isPlaying) playTrack();
        else pauseTrack();
    } else {
        track_index = 1;
        loadTrack(track_index);
        playTrack();
    }

}

function playTrack() {
    if (track_index != 0) {
        curr_track.play();
        isPlaying = true;
    } else {
        pauseTrack()
    }
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
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


function setVolume() {
    const volume_slider = document.querySelector(".volume_slider");

    curr_track.volume = volume_slider.value / 100;
}




let mob = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;

if (mob) {
    document.querySelector('.mob').style.display = 'block';
}