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
    let mainPerson = second.getElementById('person');
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
    let doctor = third.getElementById('jacket');
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

    // create timelines
    let fadeIn_1 = new TimelineMax();
    let fadeIn_2 = new TimelineMax();
    let fadeIn_3 = new TimelineMax();
    let fadeIn_4 = new TimelineMax();
    let fadeIn_5 = new TimelineMax();
    // let guineaPigShake = new TimelineMax({repeat: -1});
    // let guineaPigShake2 = new TimelineMax({repeat: -1});
    // let winkwink = new TimelineMax({repeat: -1});

    let fadeOut_1 = new TimelineMax();
    let fadeOut_2 = new TimelineMax();
    let fadeOut_3 = new TimelineMax();
    let fadeOut_4 = new TimelineMax();
    let fadeOut_5 = new TimelineMax();


    // code to make first slide fade in
    function reset() {
        TweenMax.set([myth1Title, myth2Title, table, cageLeft, person, cageRight, glowRight, glowLeft, glowPerson, secondPerson, glowJacket, glowClipboard, glowChart, glowMatress, glowNeedle, glowBottle, glowBottleEnd, beakers, nextSteps, info], {
            clearProps: "all"
        })
    }

    // functions to make items fade in or appear
    function fadeInScreen1(clicked) {
        reset()
        // animate title
        TweenMax.set(myth1Title, {
            transformOrigin: "center center"
        })
        fadeIn_1
            .fromTo(myth1Title, 1, {
                opacity: 0,
                scale: 0
            }, {
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
            .fromTo([glowRight, glowLeft, glowPerson, secondPerson], .5, {
                opacity: 0
            }, {
                opacity: 0.25
            })
        // animate glows
        glowItems();
        // animate guinea pigs
        // guineaPigShake
        // .fromTo(guineaPig, 0.01, {
        //     x:-4
        // },{
        //     x:4, 
        //     clearProps:"x", 
        //     repeat:20,
        // },3)
        // guineaPigShake2
        // .fromTo(guineaPig2, 0.01, {
        //     x:-4
        // },{
        //     x:4, 
        //     clearProps:"x", 
        //     repeat:20,
        //     delay: 1
        // },3)

        // change cursor to pointer on clickable items
        cageLeft.style.cursor = "pointer";
        cageRight.style.cursor = "pointer";
        person.style.cursor = "pointer";

    }

    function fadeInScreen2(clicked) {
        reset()
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
            .fromTo([person2, secondPerson], .7, {
                opacity: 1,
                x: -300,
            }, {
                x: 0,
                ease: "power1.inOut"
            })
            // slide in doctor
            .fromTo(doctor, 1, {
                opacity: 1,
                x: 700
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
            .fromTo([glowClipboard, glowJacket], 1, {
                opacity: 0
            }, {
                opacity: 0.5
            })
        // animate glows
        glowItems();
        // wink
        // winkwink.fromTo(wink, 1, {
        //     y: -10
        // },{
        //     y: 0,
        //     delay: 3.5
        // })
        // .to(wink, 1, {
        //     y: -10
        // })

        // change cursor to pointer on clickable items
        clipboard.style.cursor = "pointer";
        jacket.style.cursor = "pointer";

    }

    function fadeInScreen3(clicked) {
        reset()
        // animate title
        TweenMax.set(myth3Title, {
            transformOrigin: "center center"
        })
        fadeIn_3
            .fromTo(myth3Title, 1, {
                opacity: 0,
                scale: 0
            }, {
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
        // animate title
        TweenMax.set([nextSteps, info], {
            transformOrigin: "center center"
        })
        fadeIn_5
            .fromTo(nextSteps, 1.5, {
                opacity: 0,
                scale: 0
            }, {
                scale: .6,
                opacity: 1,
                ease: "power1.inOut"
            })
            // .fromTo(nextSteps, 1, {
            //     scale: 1
            // },{
            //     scale: 0.8,
            //     ease: "power1.inOut",
            //     repeat: 2,
            //     yoyo: true
            // })
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
    let modal5 = document.getElementById("myModal4");
    let modal6 = document.getElementById("myModal4");
    let modal7 = document.getElementById("myModal4");


    //Triggering audio files
    let audio1 = document.getElementById('myth101');
    let audio2 = document.getElementById('myth102');
    let audio3 = document.getElementById('myth103');
    let audio4 = document.getElementById('myth201');

    // Get the <span> element that closes the modal
    let close = document.getElementsByClassName("close")[0];
    let close1 = document.getElementsByClassName("close1")[0];
    let close2 = document.getElementsByClassName("close2")[0];
    let close3 = document.getElementsByClassName("close3")[0];

    // When the user clicks the button, open the modal 
    mainPerson.onclick = function () {
        modal1.style.display = "block";
        audio3.play();

    }
    cageLeft.onclick = function () {
        modal2.style.display = "block";
        audio1.play();
    }
    cageRight.onclick = function () {
        modal3.style.display = "block";
        audio2.play();
    }
    doctor.onclick = function () {
        modal4.style.display = "block";
        audio4.play();
    }

    // When the user clicks on <span> (x), close the modal
    close.onclick = function () {
        modal1.style.display = "none";
        audio3.pause();
    }
    close1.onclick = function () {
        modal2.style.display = "none";
        audio1.pause();
    }
    close2.onclick = function () {
        modal3.style.display = "none";
        audio2.pause();
    }
    close3.onclick = function () {
        modal4.style.display = "none";
        audio4.pause();
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
        if (event.target == modal3) {
            modal4.style.display = "none";
        }
    }

}