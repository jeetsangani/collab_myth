window.onload = function () {

    // targeting the svg objects in the html
    let first = document.getElementById('firstPage').contentDocument;
    let second = document.getElementById('secondPage').contentDocument;
    let third = document.getElementById('thirdPage').contentDocument;
    let fourth = document.getElementById('fourthPage').contentDocument;
    let fifth = document.getElementById('fifthPage').contentDocument;
    let next = document.getElementById('next').contentDocument;

    // targeting individual objects in the svg object
    // first myth
    let glowRight = second.getElementById('glowRight');
    let glowLeft = second.getElementById('glowLeft');
    let glowPerson = second.getElementById('glowPerson');
    // let mainPerson = second.getElementById('person');
    let myth1Title = second.getElementById('title');
    let table = second.getElementById('table');
    let cageLeft = second.getElementById('cageLeft');
    let cageRight = second.getElementById('cageRight');
    let person = second.getElementById('person');
    let guineaPig = second.getElementById('guineaPig');
    let guineaPig2 = second.getElementById('guineaPig-2');

    // second myth
    let glowClipboard = third.getElementById('glowClipboard');
    let glowJacket = third.getElementById('glowJacket');
    let myth2Title = third.getElementById('title');
    let doctor = third.getElementById('doctor');
    let secondPerson = third.getElementById('glowPerson');
    let person2 = third.getElementById('person');
    let clipboard = third.getElementById('clipboard');
    // let wink = third.getElementById('wink');
    let jacket = third.getElementById('jacket');

    // third myth
    let glowChart = fourth.getElementById('glowChart');
    let glowMatress = fourth.getElementById('glowMatress');
    let myth3Title = fourth.getElementById('title');
    let bed = fourth.getElementById('bed');
    let matress = fourth.getElementById('matress');
    let chart = fourth.getElementById('chart');
    let person3 = fourth.getElementById('person');

    // fourth myth
    let glowNeedle = fifth.getElementById('glowNeedle');
    let glowBottle = fifth.getElementById('glowBottle');
    let glowBottleEnd = fifth.getElementById('glowBottleEnd');
    let myth4Title = fifth.getElementById('title');
    let table2 = fifth.getElementById('table');
    let person4 = fifth.getElementById('person');
    let beakers = fifth.getElementById('beakers');
    let greenBeaker = fifth.getElementById('greenBeaker-2');
    let purpleBeaker = fifth.getElementById('purplebeaker-2');
    let needle = fifth.getElementById('needle');

    // last screen
    let nextSteps = next.getElementById('nextSteps');
    let info = next.getElementById('info');

    // target play/mute buttons
    let audioBtn = document.getElementById('audioBtn');

    // create timelines
    let fadeIn_1 = new TimelineMax();
    let fadeIn_2 = new TimelineMax();
    let fadeIn_3 = new TimelineMax();
    let fadeIn_4 = new TimelineMax();
    let fadeIn_5 = new TimelineMax();

    let fadeOut_1 = new TimelineMax();
    let fadeOut_2 = new TimelineMax();
    let fadeOut_3 = new TimelineMax();
    let fadeOut_4 = new TimelineMax();
    let fadeOut_5 = new TimelineMax();


    // toggle audio button to mute or unmute
    // while muted, all sounds are disabled
    // while unmuted, all sounds can play
    audioBtn.onclick = function muteSounds() {
        $(this).toggleClass('mute');
        let audio = document.getElementsByTagName('audio');
        console.log(audio);
        if ($(this).hasClass("mute")) {
            for (i = 0; i < audio.length; i++) audio[i].muted = true;
        } else {
            for (i = 0; i < audio.length; i++) audio[i].muted = false;
        }

    }

    // functions to make items fade in or appear
    function fadeInScreen1(clicked) {
        reset()
        // pause all audio 
        $(".voiceovers").trigger("pause");
        // play myth audio as page fades in, delay 2000ms
        setTimeout(function () {
            $("#myth1").trigger("play");
        }, 2000);

        // animate title
        TweenMax.set(myth1Title, {
            transformOrigin: "center center"
        })
        fadeIn_1
            .fromTo(myth1Title, 1, {
                opacity: 0,
                scale: 0
            }, {
                delay: 2.5,
                scale: 1.1,
                opacity: 1,
                ease: "power1.inOut"
            })
            .to(myth1Title, 1, {
                scale: 1,
                ease: "power1.inOut"
            })
            .fromTo(myth1Title, 1, {
                y: 200,
                x: 300,
            }, {
                y: 0,
                x: 0,
                ease: "power1.inOut"
            })
            // animate person
            .fromTo(person, .7, {
                opacity: 1,
                x: -300,
            }, {
                x: 0,
                ease: "power1.inOut"
            })
            // animate table
            .fromTo(table, .7, {
                opacity: 1,
                x: 700
            }, {
                x: 0,
                ease: "power1.inOut"
            })
            // animat cages
            .staggerFromTo([cageLeft, cageRight], .5, {
                opacity: 0,
                ease: "power1.inOut"
            }, {
                opacity: 1,
                ease: "power1.inOut"
            }, .5)
            // add in glows
            .fromTo([glowRight, glowLeft, glowPerson], .5, {
                opacity: 0
            }, {
                opacity: 0.25
            })
        // animate glows
        glowItems();

        // change cursor to pointer on clickable items
        cageLeft.style.cursor = "pointer";
        cageRight.style.cursor = "pointer";
        person.style.cursor = "pointer";

    }

    function fadeInScreen2(clicked) {
        reset()
        // pause all audio 
        $(".voiceovers").trigger("pause");
        // play myth audio as page fades in, delay 2000ms
        setTimeout(function () {
            $("#myth2").trigger("play");
        }, 2000);

        // animate title
        TweenMax.set(myth2Title, {
            transformOrigin: "center center"
        })
        fadeIn_2
            .fromTo(myth2Title, 1, {
                opacity: 0,
                scale: 0,
                x: 150
            }, {
                delay: 2.5,
                scale: 1.1,
                opacity: 1,
                ease: "power1.inOut",
                x: 150
            })
            .to(myth2Title, 1, {
                scale: 1,
                ease: "power1.inOut",

            })
            .fromTo(myth2Title, 1, {
                y: 200,
                x: 150
            }, {
                y: 0,
                x: 0,
                ease: "power1.inOut"
            })
            // slide in person
            .fromTo(person2, .7, {
                opacity: 1,
                x: -300,
            }, {
                x: 0,
                ease: "power1.inOut"
            })
            // slide in doctor
            .fromTo(doctor, 1, {
                opacity: 1,
                x: 300
            }, {
                x: 0,
                ease: "power1.inOut"
            })
            // fade in clipboard
            .fromTo(clipboard, .5, {
                opacity: 0,
            }, {
                opacity: 1,
                ease: "power1.inOut"
            })
            // fade in glows
            .fromTo([glowJacket, secondPerson], 0.5, {
                opacity: 0
            }, {
                opacity: 0.5
            })
        // animate glows
        glowItems();


        // change cursor to pointer on clickable items
        person2.style.cursor = "pointer";
        jacket.style.cursor = "pointer";

    }

    function fadeInScreen3(clicked) {
        reset()
        // pause all audio 
        $(".voiceovers").trigger("pause");
        // play myth audio as page fades in, delay 2000ms
        setTimeout(function () {
            $("#myth3").trigger("play");
        }, 2000);

        // animate title
        TweenMax.set(myth3Title, {
            transformOrigin: "center center"
        })
        fadeIn_3
            .fromTo(myth3Title, 1, {
                opacity: 0,
                scale: 0
            }, {
                delay: 2.5,
                scale: 1.1,
                opacity: 1,
                ease: "power1.inOut"
            })
            .to(myth3Title, 1, {
                scale: 1,
                ease: "power1.inOut"
            })
            .fromTo(myth3Title, 1, {
                y: 200,
                x: 300,
            }, {
                y: 0,
                x: 0,
                ease: "power1.inOut"
            })
            // slide in person
            .fromTo(person3, 1, {
                opacity: 1,
                x: -300,
            }, {
                x: 0,
                ease: "power1.inOut"
            })
            // slide in bed
            .fromTo(bed, 1, {
                opacity: 1,
                x: 800
            }, {
                x: 0,
                ease: "power1.inOut"
            })
            // fade in glows
            .fromTo([glowChart, glowMatress], .5, {
                display: 'block',
                opacity: 0
            }, {
                opacity: 0.5
            })
        // animate glows
        glowItems();

        // change cursor to pointer on clickable items
        matress.style.cursor = "pointer";
        chart.style.cursor = "pointer";

    }

    function fadeInScreen4(clicked) {
        reset()
        // pause all audio 
        $(".voiceovers").trigger("pause");
        // play myth audio as page fades in, delay 3000ms
        setTimeout(function () {
            $("#myth4").trigger("play");
        }, 3000);

        // animate title
        TweenMax.set(myth4Title, {
            transformOrigin: "center center"
        })
        fadeIn_4
            .fromTo(myth4Title, 1, {
                opacity: 0,
                scale: 0,
                x: 150
            }, {
                delay: 2.5,
                scale: 1.1,
                opacity: 1,
                ease: "power1.inOut",
                x: 150
            })
            .to(myth4Title, 1, {
                scale: 1,
                ease: "power1.inOut"
            })
            .fromTo(myth4Title, 1, {
                y: 200,
                x: 150,
            }, {
                y: 0,
                x: 0,
                ease: "power1.inOut"
            })
            // slide in person
            .fromTo(person4, .7, {
                opacity: 1,
                x: -300,
            }, {
                x: 0,
                ease: "power1.inOut"
            })
            // slide in table
            .fromTo(table2, 1, {
                opacity: 1,
                x: 700
            }, {
                x: 0,
                ease: "power1.inOut"
            })
            // fade in beakers
            .fromTo(beakers, 1, {
                opacity: 0,
            }, {
                opacity: 1,
                ease: "power1.inOut"
            })
            // fade in glows
            .fromTo([glowNeedle, glowBottle, glowBottleEnd], 1, {
                opacity: 0
            }, {
                opacity: 0.5
            })
        // animate glows
        glowItems();

        // change cursor to pointer on clickable items
        greenBeaker.style.cursor = "pointer";
        purpleBeaker.style.cursor = "pointer";
        needle.style.cursor = "pointer";
    }

    function fadeInScreen5(clicked) {
        reset()
        $(".voiceovers").trigger("pause");
        // animate title
        TweenMax.set([nextSteps, info], {
            transformOrigin: "center center"
        })
        fadeIn_5
            .fromTo(nextSteps, 1.5, {
                opacity: 0,
                scale: 0
            }, {
                delay: 2.5,
                scale: .6,
                opacity: 1,
                ease: "power1.inOut"
            })

            // fade in info
            .fromTo(info, 1.5, {
                opacity: 0
            }, {
                opacity: 1,
                ease: "power1.inOut",
                scale: 0.7
                // ,
                // delay: .3
            })

    }

    // functions to take out items
    function fadeOutScreen1(clicked) {
        fadeOut_1
            // fade out glows
            .to([glowRight, glowLeft, glowPerson, secondPerson], .5, {
                opacity: 0
            })
            // fade out cages
            .to([cageLeft, cageRight], .5, {
                opacity: 0,
                ease: "power1.inOut"
            })
            // slide out table
            .to(table, .7, {
                x: 700,
                ease: "power1.inOut"
            })
            .to(person, .5, {
                x: -300,
                ease: "power1.inOut"
            })
            // slide out title
            .to(myth1Title, 1, {
                y: -300,
                ease: "power1.inOut"
            })
    }

    function fadeOutScreen2(clicked) {
        fadeOut_2
            // fade out glows
            .to([glowJacket, glowClipboard], .5, {
                opacity: 0
            })
            // slide out doctor
            .to(doctor, 1, {
                x: 400,
                ease: "power1.inOut"
            })
            // slide out person
            .to([person2, secondPerson], 1, {
                x: -300,
                ease: "power1.inOut"
            })
            // slide out title
            .to(myth2Title, 1, {
                y: -300,
                ease: "power1.inOut"
            })
    }

    function fadeOutScreen3(clicked) {
        fadeOut_3
            // fade out glows
            .to([glowMatress, glowChart], .5, {
                opacity: 0
            })
            // slide out bed
            .to(bed, 1, {
                x: 800,
                ease: "power1.inOut"
            })
            // slide out person
            .to(person3, 1, {
                x: -300,
                ease: "power1.inOut"
            })
            // slide out title
            .to(myth3Title, 1, {
                y: -300,
                ease: "power1.inOut"
            })
    }

    function fadeOutScreen4(clicked) {
        fadeOut_4
            // fade out glows
            .to([glowNeedle, glowBottle, glowBottleEnd], .5, {
                opacity: 0
            })
            // slide out beakers and table
            .to([beakers, table2], 1, {
                x: 700,
                ease: "power1.inOut"
            })
            // slide out person
            .to(person4, 1, {
                x: -300,
                ease: "power1.inOut"
            })
            // slide out title
            .to(myth4Title, 1, {
                y: -300,
                ease: "power1.inOut"
            })
    }

    function fadeOutScreen5(clicked) {
        // fade out title
        fadeOut_5.to(info, .5, {
                opacity: 0,
                ease: "power1.inOut"
            })
            // fade out info
            .to(nextSteps, .5, {
                opacity: 0,
                ease: "power1.inOut"
            })
    }

    // code to make the clickable elements glow
    function glowItems() {
        TweenMax.set([glowRight, glowLeft, glowPerson, secondPerson, glowClipboard, glowJacket, glowChart, glowMatress, glowNeedle, glowBottle, glowBottleEnd, nextSteps], {
            transformOrigin: "center center"
        });
        TweenMax.to([glowRight, glowLeft, glowPerson, secondPerson, glowClipboard, glowChart, glowNeedle, glowBottle, glowBottleEnd], 1, {
            scaleY: 1.2,
            scaleX: 1.2,
            yoyo: true,
            repeat: -1
        })
        TweenMax.to([glowNeedle, glowBottle, glowBottleEnd], 1, {
            scaleY: 1.3,
            scaleX: 1.3,
            yoyo: true,
            repeat: -1
        })
        TweenMax.to([glowPerson, secondPerson], 1, {
            scaleY: 1.1,
            scaleX: 1.2,
            yoyo: true,
            repeat: -1
        })
        TweenMax.to([glowJacket, glowMatress], 1, {
            scaleY: 1.1,
            scaleX: 1.1,
            yoyo: true,
            repeat: -1
        })
    }

    // code to make first slide fade in
    function reset() {
        TweenMax.set([myth1Title, myth2Title, table, cageLeft, person, cageRight, glowRight, glowLeft, glowPerson, secondPerson, glowJacket, glowClipboard, glowChart, glowMatress, glowNeedle, glowBottle, glowBottleEnd, beakers, nextSteps, info], {
            clearProps: "all"
        })
    }

    // add/remove items on button click
    document.getElementById('fadeinOne').onclick = fadeInScreen1;
    // document.getElementById('fadeout1').onclick = fadeOutScreen1;
    document.getElementById('fadein2').onclick = fadeInScreen2;
    // document.getElementById('fadeout2').onclick = fadeOutScreen2;
    document.getElementById('fadein3').onclick = fadeInScreen3;
    // document.getElementById('fadeout3').onclick = fadeOutScreen3;
    document.getElementById('fadein4').onclick = fadeInScreen4;
    // document.getElementById('fadeout4').onclick = fadeOutScreen4;
    document.getElementById('fadein5').onclick = fadeInScreen5;
    // document.getElementById('fadeout5').onclick = fadeOutScreen5;



    /*********************** modal ************************/


    /*********************** page 1 ************************/
    // Get the modal
    let modal1 = document.getElementById("myModal1");
    let modal2 = document.getElementById("myModal2");
    let modal3 = document.getElementById("myModal3");
    let modal4 = document.getElementById("myModal4");
    let modal5 = document.getElementById("myModal5");
    let modal6 = document.getElementById("myModal6");
    let modal7 = document.getElementById("myModal7");
    let modal8 = document.getElementById("myModal8");
    let modal9 = document.getElementById("myModal9");
    let modal10 = document.getElementById("myModal10");


    // Get the <span> element that closes the modal
    let close = document.getElementsByClassName("close")[0];
    let close1 = document.getElementsByClassName("close1")[0];
    let close2 = document.getElementsByClassName("close2")[0];
    let close3 = document.getElementsByClassName("close3")[0];
    let close4 = document.getElementsByClassName("close4")[0];
    let close5 = document.getElementsByClassName("close5")[0];
    let close6 = document.getElementsByClassName("close6")[0];
    let close7 = document.getElementsByClassName("close7")[0];
    let close8 = document.getElementsByClassName("close8")[0];
    let close9 = document.getElementsByClassName("close9")[0];


    // When the user clicks the button, open the modal 
    person.onclick = function () {
        modal1.style.display = "block";
        $(".voiceovers").trigger("pause");
        // $(".voiceovers").prop('currentTime',0);
        $('#myth103').trigger('play');
        // audio3.play();

    }
    cageLeft.onclick = function () {
        modal2.style.display = "block";
        $(".voiceovers").trigger("pause");
        $('#myth101').trigger('play');
        // audio1.play();
    }
    cageRight.onclick = function () {
        modal3.style.display = "block";
        $(".voiceovers").trigger("pause");
        $('#myth102').trigger('play');
        // audio2.play();
    }
    doctor.onclick = function () {
        modal4.style.display = "block";
        $(".voiceovers").trigger("pause");
        $('#myth201').trigger('play');
        // audio4.play();
    }
    person2.onclick = function () {
        modal5.style.display = "block";
        $(".voiceovers").trigger("pause");
        $('#myth202').trigger('play');
        // audio5.play();
    }
    matress.onclick = function () {
        modal6.style.display = "block";
        $(".voiceovers").trigger("pause");
        $('#myth301').trigger('play');
        // audio6.play();
    }
    chart.onclick = function () {
        modal7.style.display = "block";
        $(".voiceovers").trigger("pause");
        $('#myth302').trigger('play');
        // audio7.play();
    }
    needle.onclick = function () {
        modal8.style.display = "block";
        $(".voiceovers").trigger("pause");
        $('#myth401').trigger('play');
        // audio8.play();
    }
    purpleBeaker.onclick = function () {
        modal9.style.display = "block";
        $(".voiceovers").trigger("pause");
        $('#myth402').trigger('play');
        // audio9.play();
    }
    greenBeaker.onclick = function () {
        modal10.style.display = "block";
        $(".voiceovers").trigger("pause");
        $('#myth403').trigger('play');
        // audio10.play();
    }

    // When the user clicks on <span> (x), close the modal
    close.onclick = function () {
        modal1.style.display = "none";
        $('#myth103').trigger('pause').prop('currentTime',0);
        // $('#myth103').prop('currentTime',0);
        // audio3.pause();
    }
    close1.onclick = function () {
        modal2.style.display = "none";
        $('#myth101').trigger('pause').prop('currentTime', 0);
        // audio1.pause();
    }
    close2.onclick = function () {
        modal3.style.display = "none";
        $('#myth102').trigger('pause').prop('currentTime', 0);
        // audio2.pause();
    }
    close3.onclick = function () {
        modal4.style.display = "none";
        $('#myth201').trigger('pause').prop('currentTime', 0);
        // audio4.pause();
    }
    close4.onclick = function () {
        modal5.style.display = "none";
        $('#myth202').trigger('pause').prop('currentTime', 0);
        // audio5.pause();
    }
    close5.onclick = function () {
        modal6.style.display = "none";
        $('#myth301').trigger('pause').prop('currentTime', 0);
        // audio6.pause();
    }
    close6.onclick = function () {
        modal7.style.display = "none";
        $('#myth302').trigger('pause').prop('currentTime', 0);
        // audio7.pause(); 
    }
    close7.onclick = function () {
        modal8.style.display = "none";
        $('#myth401').trigger('pause').prop('currentTime', 0);
        // audio8.pause();
    }
    close8.onclick = function () {
        modal9.style.display = "none";
        $('#myth402').trigger('pause').prop('currentTime', 0);
        // audio9.pause();
    }
    close9.onclick = function () {
        modal10.style.display = "none";
        $('#myth403').trigger('pause').prop('currentTime', 0);
        // audio10.pause();
    }


    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //     if (event.target == modal1) {
    //         modal1.style.display = "none";
    //         audio1.pause();
    //     }
    //     if (event.target == modal2) {
    //         modal2.style.display = "none";
    //         audio2.pause();
    //     }
    //     if (event.target == modal3) {
    //         modal3.style.display = "none";
    //         audio3.pause();
    //     }
    //     if (event.target == modal4) {
    //         modal4.style.display = "none";
    //         audio4.pause();
    //     }
    //     if (event.target == modal5) {
    //         modal5.style.display = "none";
    //         audio5.pause();
    //     }
    //     if (event.target == modal6) {
    //         modal6.style.display = "none";
    //         audio6.pause();
    //     }
    //     if (event.target == modal7) {
    //         modal7.style.display = "none";
    //         audio7.pause();
    //     }
    //     if (event.target == modal8) {
    //         modal8.style.display = "none";
    //         audio8.pause();
    //     }
    //     if (event.target == modal9) {
    //         modal9.style.display = "none";
    //         audio9.pause();
    //     }
    //     if (event.target == modal10) {
    //         modal10.style.display = "none";
    //         audio10.pause();
    //     }
    // }

    // navigate the timeline when inside the viewport using the keyboard
    document.addEventListener('keydown', function (event) {

        if ((event.keyCode && event.keyCode == 39) || (event.key && event.key.toLowerCase() == 'arrowright')) {

            // get id and class names for screen animations
            let myDate1 = document.getElementById('fadeinOne').getAttribute('class');
            let myDate2 = document.getElementById('fadein2').getAttribute('class');
            let myDate3 = document.getElementById('fadein3').getAttribute('class');
            let myDate4 = document.getElementById('fadein4').getAttribute('class');
            let myDate5 = document.getElementById('fadein5').getAttribute('class');
            let myID1 = document.getElementById('fadeinOne').getAttribute('id');
            let myID2 = document.getElementById('fadein2').getAttribute('id');
            let myID3 = document.getElementById('fadein3').getAttribute('id');
            let myID4 = document.getElementById('fadein4').getAttribute('id');
            let myID5 = document.getElementById('fadein5').getAttribute('id');

            if (myID1 == 'fadeinOne' && myDate1 == 'cd-h-timeline__date cd-h-timeline__date--selected') {
                fadeInScreen1();
            }
            if (myID2 == 'fadein2' && myDate2 == 'cd-h-timeline__date cd-h-timeline__date--selected') {
                fadeInScreen2();
            }
            if (myID3 == 'fadein3' && myDate3 == 'cd-h-timeline__date cd-h-timeline__date--selected') {
                fadeInScreen3();
            }
            if (myID4 == 'fadein4' && myDate4 == 'cd-h-timeline__date cd-h-timeline__date--selected') {
                fadeInScreen4();
            }
            if (myID5 == 'fadein5' && myDate5 == 'cd-h-timeline__date cd-h-timeline__date--selected') {
                fadeInScreen5();
            }
        } else if ((event.keyCode && event.keyCode == 37) || (event.key && event.key.toLowerCase() == 'arrowleft')) {

            // get id and class names for screen animations
            let myDate1 = document.getElementById('fadeinOne').getAttribute('class');
            let myDate2 = document.getElementById('fadein2').getAttribute('class');
            let myDate3 = document.getElementById('fadein3').getAttribute('class');
            let myDate4 = document.getElementById('fadein4').getAttribute('class');
            let myDate5 = document.getElementById('fadein5').getAttribute('class');
            let myID1 = document.getElementById('fadeinOne').getAttribute('id');
            let myID2 = document.getElementById('fadein2').getAttribute('id');
            let myID3 = document.getElementById('fadein3').getAttribute('id');
            let myID4 = document.getElementById('fadein4').getAttribute('id');
            let myID5 = document.getElementById('fadein5').getAttribute('id');

            if (myID1 == 'fadeinOne' && myDate1 == 'cd-h-timeline__date cd-h-timeline__date--selected') {
                fadeInScreen1();
            }
            if (myID2 == 'fadein2' && myDate2 == 'cd-h-timeline__date cd-h-timeline__date--selected') {
                fadeInScreen2();
            }
            if (myID3 == 'fadein3' && myDate3 == 'cd-h-timeline__date cd-h-timeline__date--selected') {
                fadeInScreen3();
            }
            if (myID4 == 'fadein4' && myDate4 == 'cd-h-timeline__date cd-h-timeline__date--selected') {
                fadeInScreen4();
            }
            if (myID5 == 'fadein5' && myDate5 == 'cd-h-timeline__date cd-h-timeline__date--selected') {
                fadeInScreen5();
            }
        }
    });

}