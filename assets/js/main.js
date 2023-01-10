function contentAnimation(data) {
    let page_name = data.next.namespace;

    if (page_name == 'index') {
        pageRoom();
    } else if (page_name == 'tv') {
        pageTv()
    } else if (page_name == 'what') {
        pageWhat()
    } else if (page_name == 'why') {
        pageWhy()
    } else if (page_name == 'who') {
        pageWho()
    } else if (page_name == 'how') {
        pageHow()
    }
}


function contentTransition(data) {
    let page_name = data.next.namespace;
    let prev_name = data.current.namespace;

    // console.log(page_name)

    if (page_name == 'index' && prev_name == '') {
        transitionRoom();
    } else if (page_name == 'index' && prev_name == 'tv') {
        transitionTvRoom();
    } else if (page_name == 'index' && prev_name == 'why') {
        transitionWhyRoom();
    } else if (page_name == 'index' && prev_name == 'what') {
        transitionWhatRoom();
    } else if (page_name == 'index' && prev_name == 'who') {
        transitionWhoRoom()
    } else if (page_name == 'index' && prev_name == 'how') {
        transitionHowRoom()
    } else if (page_name == 'who') {
        transitionWho()
    } else if (page_name == 'what') {
        transitionWhat()
    } else if (page_name == 'how') {
        transitionHow()
    } else if (page_name == 'tv') {
        transitionTv(prev_name);
    } else if (page_name == 'why') {
        transitionWhy()
    }
}

function pageTransition(data) {
    if (data.trigger != 'back' && data.trigger != 'popstate' && data.trigger != 'forward') {

        let page_name = data.current.namespace;
        let link_name = data.trigger.dataset.barbaTrigger;

        // console.log('page_name - ' + page_name);
        // console.log('link_name - ' + link_name);
        if (page_name == 'index' && link_name == 'tv') {
            transitionRoomTv()
        } else if (page_name == 'index' && link_name == 'why') {
            transitionRoomWhy()
        } else if (page_name == 'index' && link_name == 'what') {
            transitionRoomWhat()
        } else if (page_name == 'index' && link_name == 'who') {
            transitionRoomWho()
        } else if (page_name == 'index' && link_name == 'how') {
            transitionRoomHow()
        } else if (page_name == 'tv') {
            transitionTvHide(link_name)
        } else if (page_name == 'why') {
            transitionWhyHide()
        } else if (page_name == 'what') {
            transitionWhatHide()
        } else if (page_name == 'who') {
            transitionWhoHide()
        } else if (page_name == 'how') {
            transitionHowHide()
        }
    }
}


function transitionRoom() {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');

    room.animate([
        { transform: 'translate3d(0vw, 9vh, 136vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.9 },
        { transform: '' }
    ], {
        duration: 5000,
        easing: "ease-in"
    })


    setTimeout(function(){
        floor.style.opacity = 1;
    }, 4000)
    
}


function transitionTvRoom() {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');

    room.animate([
        { transform: 'translate3d(0vw, 9vh, 136vw) rotateX(0deg) rotateY(0deg) rotateZ(-360deg)' },
        { transform: 'translate3d(0vw, -40vh, -160vw) rotateX(60deg) rotateY(0deg) rotateZ(-180deg)', offset: 0.5 },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.9 },
        { transform: ''}
    ], {
        duration: 5000,
        easing: "ease-in"
    })

    setTimeout(function(){
        floor.style.opacity = 1;
    }, 4000)
}


function transitionRoomTv() {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');

    room.animate([
        { transform: '' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.1 },
        { transform: 'translate3d(0vw, -40vh, -160vw) rotateX(60deg) rotateY(0deg) rotateZ(-180deg)' },
        { transform: 'translate3d(0vw, 9vh, 136vw) rotateX(0deg) rotateY(0deg) rotateZ(-360deg)' },
    ], {
        duration: 5000,
        easing: "ease-in"
    })
    floor.style.opacity = 0;
}


function transitionRoomWhy() {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');

    room.animate([
        { transform: '' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.1 },
        { transform: 'translate3d(0vw, 0vh, -500vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0)' },
    ], {
        duration: 5000,
        easing: "ease-in"
    })
    floor.style.opacity = 0;
}

function transitionWhyRoom() {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');

    room.animate([
        { transform: 'translate3d(0vw, 9vh, 136vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.9 },
        { transform: '' }
    ], {
        duration: 5000,
        easing: "ease-in"
    })
    setTimeout(function(){
        floor.style.opacity = 1;
    }, 4000)
}

function transitionRoomWhat() {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');
    room.animate([
        { transform: '' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.1 },
        { transform: 'translate3d(0vw, 0vh, -100vw) rotateX(0deg) rotateY(360deg) rotateZ(0deg)' },
        { transform: 'translate3d(-20vw, 0vh, 0vw) rotateX(0deg) rotateY(280deg) rotateZ(0deg)' },
        { transform: 'translate3d(-8vw, -16vh, 138vw) rotateX(0deg) rotateY(340deg) rotateZ(0deg)' },
    ], {
        duration: 5000,
        easing: "ease-in"
    })
    floor.style.opacity = 0;
}


function transitionWhatRoom() {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');
    room.animate([
        { transform: 'translate3d(-8vw, -16vh, 138vw) rotateX(0deg) rotateY(340deg) rotateZ(0deg)' },
        { transform: 'translate3d(-20vw, 0vh, 0vw) rotateX(0deg) rotateY(280deg) rotateZ(0deg)' },
        { transform: 'translate3d(0vw, 0vh, -100vw) rotateX(0deg) rotateY(360deg) rotateZ(0deg)' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.9 },
        { transform: '' },
    ], {
        duration: 5000,
        easing: "ease-in"
    })
    setTimeout(function(){
        floor.style.opacity = 1;
    }, 4000)
}


function transitionRoomWho() {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');
    room.animate([
        { transform: '' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.1 },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(-90deg)' },
        { transform: 'translate3d(0vw, 0vh, -100vw) rotateX(0deg) rotateY(90deg) rotateZ(-90deg)' },
        { transform: 'translate3d(2vw, 0vh, 200vw) rotateX(0deg) rotateY(90deg) rotateZ(-90deg)' },
    ], {
        duration: 5000,
        easing: "ease-in"
    })
    floor.style.opacity = 0;
}

function transitionWhoRoom() {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');
    room.animate([
        { transform: 'translate3d(2vw, 0vh, 200vw) rotateX(0deg) rotateY(90deg) rotateZ(-90deg)' },
        { transform: 'translate3d(0vw, 0vh, -100vw) rotateX(0deg) rotateY(90deg) rotateZ(-90deg)' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(-90deg)' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.9 },
        { transform: '' },
    ], {
        duration: 5000,
        easing: "ease-in"
    })
    setTimeout(function(){
        floor.style.opacity = 1;
    }, 4000)
}






function transitionWhy() {
    const room = document.querySelector('.room');
    room.animate([
        { transform: 'translate3d(0vw, 0vh, -500vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0)' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)', offset: 0.9 },
        { transform: '' },
    ], {
        duration: 5000,
        easing: "ease-out"
    })
    const wall = document.querySelector('.wall')
    wall.classList.add('wall_show');
}

function transitionWhyHide() {
    const room = document.querySelector('.room');
    room.animate([
        { transform: '' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.1 },
        { transform: 'translate3d(0vw, 20vh, 136vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
    ], {
        duration: 5000,
        easing: "ease-out"
    })
    const wall = document.querySelector('.wall')
    wall.classList.remove('wall_show');
}






function transitionHow() {
    const room = document.querySelector('.room')
    room.animate([
        { transform: 'translate3d(0vw, 0vh, 100vw) rotateX(360deg) rotateY(360deg) rotateZ(0deg)' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.9 },
        { transform: ''}
    ], {
        duration: 5000,
        easing: "ease-in"
    })
}

function transitionHowHide() {
    const room = document.querySelector('.room')
    room.animate([
        { transform: ''},
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.1 },
        { transform: 'translate3d(0vw, 0vh, 100vw) rotateX(360deg) rotateY(360deg) rotateZ(0deg)' }
    ], {
        duration: 5000,
        easing: "ease-out"
    })
}


function transitionHowRoom() {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');

    room.animate([
        { transform: 'translate3d(55vw, 25vh, 80vw) rotateX(-20deg) rotateY(70deg) rotateZ(-300deg)' },
        { transform: 'translate3d(55vw, 10vh, -40vw) rotateX(-20deg) rotateY(70deg) rotateZ(-300deg)' },
        { transform: 'translate3d(40vw, -20vh, 40vw) rotateX(10deg) rotateY(50deg) rotateZ(0deg)' },
        { transform: 'translate3d(0vw, -10vh, 50vw) rotateX(-10deg) rotateY(-30deg) rotateZ(10deg)' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.9 },
        { transform: '' },
    ], {
        duration: 5000,
        easing: "ease-in"
    })
    setTimeout(function(){
        floor.style.opacity = 1;
    }, 4000)
}


function transitionRoomHow() {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');
    room.animate([
        { transform: '' },
        { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.1 },
        { transform: 'translate3d(0vw, -10vh, 50vw) rotateX(-10deg) rotateY(-30deg) rotateZ(10deg)' },
        { transform: 'translate3d(40vw, -20vh, 40vw) rotateX(10deg) rotateY(50deg) rotateZ(0deg)' },
        { transform: 'translate3d(55vw, 10vh, -40vw) rotateX(-20deg) rotateY(70deg) rotateZ(-300deg)' },
        { transform: 'translate3d(55vw, 25vh, 80vw) rotateX(-20deg) rotateY(70deg) rotateZ(-300deg)' }
    ], {
        duration: 5000,
        easing: "ease-in"
    })
    floor.style.opacity = 0;
}







function transitionWhat() {
    const noise = document.querySelector('.page_noise');
    const content = document.querySelector('.page_content');

    setTimeout(function () {
        noise.classList.add('hide_img')
    }, 1000);
    setTimeout(function () {
        content.classList.add('hide_img');
        noise.classList.remove('hide_img');
    }, 2000);
    setTimeout(function () {
        noise.classList.add('hide_img')
    }, 3000);
}


function transitionWhatHide() {
    const noise = document.querySelector('.page_noise');

    noise.classList.remove('hide_img');
}






function transitionWho() {
    const cube = document.querySelector('.card_cube');

    cube.animate([
        { transform: 'translate3d(0vw, 0vh, 0vw) scale(0) rotateX(0deg) rotateY(0deg) rotateZ(360deg)' },
        { transform: 'translate3d(0vw, 0vh, 0vw) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.9 },
        { transform: '' }
    ], {
        duration: 5000,
        easing: "ease-in"
    })
}



function transitionWhoHide() {
    const cube = document.querySelector('.card_cube');

    cube.animate([
        { transform: '' },
        { transform: 'translate3d(0vw, 0vh, 0vw) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.1 },
        { transform: 'translate3d(0vw, 0vh, 0vw) scale(0) rotateX(0deg) rotateY(0deg) rotateZ(360deg)' }
    ], {
        duration: 5000,
        easing: "ease-out"
    })
}
















function transitionTv(name) {
    const room = document.querySelector('.room');
    const floor = document.querySelector('.floor');

    const content = document.querySelectorAll('.content img');
    const floor_content = document.querySelector('.floor_content');

    if (name == 'index') {
        room.animate([
            { transform: 'translate3d(0vw, 0vh, -400vw) rotateX(0deg) rotateY(0deg) rotateZ(180deg)' },
            { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.9 },
            { transform: ''}
        ], {
            duration: 3000,
            easing: "ease-out"
        })
        floor.style.background = '#000';

        content[0].style.opacity = 0.6;
        floor_content.style.background = 'url(' + content[0].src + ')';
    } else {
        room.animate([
            { transform: 'translate3d(0vw, -8vh, 164vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
            { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.9 },
            { transform: ''}
        ], {
            duration: 3000,
            easing: "ease-in"
        })
        floor.style.background = '#000';

        content[9].style.opacity = 0.6;
        floor_content.style.background = 'url(' + content[9].src + ')';
    }
}



function transitionTvHide(link_name) {
    const room = document.querySelector('.room')

    if (link_name == 'index') {
        room.animate([
            { transform: '' },
            { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.1 },
            { transform: 'translate3d(0vw, 0vh, 164vw) rotateX(0deg) rotateY(0deg) rotateZ(360deg)' }
        ], {
            duration: 5000,
            easing: "ease-out"
        })
    } else {
        room.animate([
            { transform: '' },
            { transform: 'translate3d(0vw, 0vh, 0vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0.1 },
            { transform: 'translate3d(0vw, -8vh, 164vw) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' }
        ], {
            duration: 5000,
            easing: "ease-out"
        })
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
        async after(data) {
            contentTransition(data);
        },
        async once(data) {
            contentAnimation(data);
            contentTransition(data);
        }
    }]
});