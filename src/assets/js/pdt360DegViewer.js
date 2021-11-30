let call = 0;
function pdt360DegViewer(id, n, p, t, playable, autoPlay, draggable, mouseMove, buttons, keys, scroll) {
    let pause;
    let i = 1, j = 0, move = [], mainDiv = document.querySelector(`.p-dialog-content #${id}`);
    if (mainDiv) {
        call++;
        mainDiv['className'] = 'viewer';
        mainDiv['innerHTML'] += `<img  alt="Not found" class="${id} ${playable ? 'playable ' : ''}${autoPlay ? 'autoPlay ' : ''}${draggable ? 'draggable ' : ''}${mouseMove ? 'mouseMove ' : ''}${buttons ? 'buttons ' : ''}${keys ? 'keys ' : ''}${scroll ? 'scroll ' : ''}" draggable="false" src='${p}${i}.${t}'>`;
        mainDiv['innerHTML'] += '<div class="loader"><div class="three-bounce"><div class="one"></div><div class="two"></div><div class="three"></div></div></div>'
        loaderNone(id);
        if (call === 1)
            for (let k = 1; k <= n; k++) {
                document.getElementById('dummy').innerHTML += `<img alt="Not found" src='${p}${k}.${t}'>`;
            }

        let img = document.querySelector(`#${id} .${id}`);
        img.setAttribute('style', 'width:100%');

        if (!playable && !autoPlay) {
            let touch = false;
            (window.matchMedia("screen and (max-width: 992px)").matches) ? touchFun() : nonTouch();

            window.addEventListener('touchstart', function () {
                touchFun();
            });

            function touchFun() {
                touch = true;
                img.removeAttribute('draggable');
                img.addEventListener('touchmove', function (e) {
                    logic(this, e);
                });
                img.addEventListener('touchend', function () {
                    move = [];
                });
            }

            function nonTouch() {
                let drag;
                touch = false;
                if (draggable) {
                    drag = false;
                    img.addEventListener('mousedown', function (e) {
                        drag = true;
                        logic(this, e);
                    });
                    img.addEventListener('mouseup', function () {
                        drag = false;
                        move = [];
                    });
                    mouseEvent();
                }

                if (mouseMove) {
                    drag = true;
                    mouseEvent();
                }
                function mouseEvent() {
                    img.addEventListener('mousemove', function (e) {
                        (drag) ? logic(this, e) : null;
                    });
                    img.addEventListener('mouseleave', function () {
                        move = [];
                    });
                }
                if (scroll) {
                    img.addEventListener('wheel', function (e) {
                        e.preventDefault();
                        (e['wheelDelta'] / 120 > 0) ? nxt(this) : prev(this);
                    });
                }
                if (keys) {
                    img.setAttribute('tabindex', '0');
                    img.onkeydown = function (e) {
                        e.preventDefault();
                        if (e.keyCode === 37 || e.keyCode === 38)
                            prev(img);
                        else if (e.keyCode === 39 || e.keyCode === 40)
                            nxt(img);
                    };
                }
            }
            function logic(el, e) {
                j++;
                const x = touch ? e.touches[0].clientX : e.clientX;
                const cord = (x - img['offsetLeft']);
                move.push(cord);

                const l = move.length,
                    oldMove = move[l - 2],
                    newMove = move[l - 1];
                const thresh = touch ? true : !(j % 3);
                if (thresh) {
                    if (newMove > oldMove)
                        nxt(el);
                    else if (newMove < oldMove)
                        prev(el);
                }
            }
            if (buttons) {
                const btnsDiv = document.createElement('div');
                btnsDiv.className = 'btnDiv navDiv';

                const leftNavBtn = document.createElement('button');
                leftNavBtn.className = 'btn btn-3d-action margin-e-5 play leftNav';
                leftNavBtn.setAttribute('title', 'left navigation');
                leftNavBtn.innerText = 'Left';
                btnsDiv.appendChild(leftNavBtn);
                leftNavBtn.addEventListener('click', function () {
                    prev(img);
                });

                const rightNavBtn = document.createElement('button');
                rightNavBtn.className = 'btn btn-3d-action margin-e-5 play rightNav';
                rightNavBtn.setAttribute('title', 'right navigation');
                rightNavBtn.innerText = 'Right';
                btnsDiv.appendChild(rightNavBtn);
                rightNavBtn.addEventListener('click', function () {
                    nxt(img);
                });
                btnsDiv.setAttribute('style','position: relative; top: -50px');
                img.parentNode.appendChild(btnsDiv);
            }
        } else {
            let interval, playing = false;
            pause = false;
            let left = false,
                right = false,
                speed = 50;

            if (playable) {
                const btnDiv = document.createElement('div');
                btnDiv.className = 'btnDiv';
                btnDiv.setAttribute("style", "text-align: center; margin: 10px 0; height: 3rem");

                const playBtn = document.createElement('button');
                playBtn.className = 'btn btn-3d-action margin-e-5  play';
                playBtn.setAttribute('title', 'play');
                playBtn.innerText = 'Play';
                btnDiv.appendChild(playBtn);
                playBtn.addEventListener('click', function () {
                    playing = true;
                    pause = false;
                    play();
                });

                const pauseBtn = document.createElement('button');
                pauseBtn.className = 'btn btn-3d-action margin-e-5  pause';
                pauseBtn.setAttribute('title', 'pause');
                pauseBtn.innerText = 'Pause';
                btnDiv.appendChild(pauseBtn);
                pauseBtn.addEventListener('click', function () {
                    pause = true;
                });

                const stopBtn = document.createElement('button');
                stopBtn.className = 'btn btn-3d-action margin-e-5 stop';
                stopBtn.setAttribute('title', 'stop');
                stopBtn.innerText = 'Stop';
                btnDiv.appendChild(stopBtn);

                stopBtn.addEventListener('click', function () {
                    pause = true;
                    speed = 50;
                    right = true;
                    left = false;
                    this.parentNode.parentNode.querySelector('img').src = `${p}${i = 1}.${t}`;
                });

                const leftBtn = document.createElement('button');
                leftBtn.className = 'btn btn-3d-action margin-e-5 left';
                leftBtn.setAttribute('title', 'play direction-left');
                leftBtn.innerText = 'Left';
                btnDiv.appendChild(leftBtn);
                leftBtn.addEventListener('click', function () {
                    right = false;
                    left = true;
                    if (playing)
                        play();
                });

                const rightBtn = document.createElement('button');
                rightBtn.className = 'btn btn-3d-action margin-e-5 right';
                rightBtn.setAttribute('title', 'play direction-right');
                rightBtn.innerText = 'Right';
                btnDiv.appendChild(rightBtn);
                rightBtn.addEventListener('click', function () {
                    left = false;
                    right = true;
                    if (playing)
                        play();
                });

                const speedBtn = document.createElement('button');
                speedBtn.className = 'btn btn-3d-action margin-e-5 plus';
                speedBtn.setAttribute('title', 'increase play speed');
                speedBtn.innerText = 'Speed';
                btnDiv.appendChild(speedBtn);
                speedBtn.addEventListener('click', function () {
                    if (playing)
                        timer(speed > 10 ? speed -= 10 : speed);
                });

                const slowBtn = document.createElement('button');
                slowBtn.className = 'btn btn-3d-action margin-e-5 minus';
                slowBtn.setAttribute('title', 'decrease play speed');
                slowBtn.innerText = 'Slow';
                btnDiv.appendChild(slowBtn);
                slowBtn.addEventListener('click', function () {
                    if (playing)
                        timer(speed < 100 ? speed += 10 : speed);
                });
                mainDiv.prepend(btnDiv);
            }

            function play() {
                timer(speed);
            }

            function timer(t) {
                clearInterval(interval);
                interval = setInterval(function () {
                    if (!pause) {
                        if (left)
                            prev(img);
                        else if (right)
                            nxt(img);
                        else
                            nxt(img);
                    }
                }, t);
            }
        }

        function prev(e) {
            if (i <= 1) {
                i = n;
                e.src = `${p}${--i}.${t}`;
                nxt(e);
            } else
                e.src = `${p}${--i}.${t}`;
        }
        function nxt(e) {
            if (i >= n) {
                i = 1;
                e.src = `${p}${++i}.${t}`;
                prev(e);
            } else
                e.src = `${p}${++i}.${t}`;
        }
        function loaderNone(id) {
            window.addEventListener('load',function(){
                document.querySelector(`#${id} .loader`)['style']['display'] = 'none';
                if (autoPlay) {
                    pause = false;
                    play();
                }
            });
        }
    }

}
