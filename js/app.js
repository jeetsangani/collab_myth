window.onload = function(){
    // targeting the svg objects in the html
    let first = document.getElementById('first').contentDocument;
    let second = document.getElementById('second').contentDocument;
    let third = document.getElementById('third').contentDocument;
    let fourth = document.getElementById('fourth').contentDocument;
    let fifth = document.getElementById('fifth').contentDocument;
    let next = document.getElementById('next').contentDocument;

    // targeting individual objects in the svg object
    // first myth
    let glowRight = second.getElementById('glowRight');
    let glowLeft = second.getElementById('glowLeft');
    let glowPerson = second.getElementById('glowPerson');
    let myth1Title = second.getElementById('title');
    let table = second.getElementById('table');
    let cageLeft = second.getElementById('cageLeft');
    let cageRight = second.getElementById('cageRight');
    let person = second.getElementById('person');
    let background = second.getElementById('background');

    // second myth
    let glowClipboard = third.getElementById('glowClipboard');
    let glowJacket = third.getElementById('glowJacket');
    let myth2Title = third.getElementById('title');
    let background2 = third.getElementById('background');
    let doctor = third.getElementById('doctor');
    let person2 = third.getElementById('person');

    // third myth
    let glowChart = fourth.getElementById('glowChart');
    let glowMatress = fourth.getElementById('glowMatress');
    let myth3Title = fourth.getElementById('title');
    let background3 = fourth.getElementById('background');
    let bed = fourth.getElementById('bed');
    let person3 = fourth.getElementById('person');

    // fourth myth
    let glowNeedle = fifth.getElementById('glowNeedle');
    let glowBottle = fifth.getElementById('glowBottle');
    let glowBottleEnd = fifth.getElementById('glowBottleEnd');
    let myth4Title = fifth.getElementById('title');
    let background4 = fifth.getElementById('background');
    let table2 = fifth.getElementById('table');
    let person4 = fifth.getElementById('person');
    let beakers = fifth.getElementById('beakers');

    // last screen
    let nextSteps = next.getElementById('nextSteps');
    let info = next.getElementById('info');

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


    // code to make first slide fade in
// function reset(){
//     TweenMax.set([myth1Title,myth2Title,table, cageLeft,person, cageRight,glowRight, glowLeft, glowPerson, glowJacket, glowClipboard, glowChart, glowMatress, glowNeedle, glowBottle, glowBottleEnd  ],{
//         clearProps: "all"
//     })
//     }

// functions to make items fade in or appear
function fadeInScreen1 (clicked) {
    reset()
        fadeIn_1.fromTo(background, 1, {
            opacity: 0
        },{
            opacity: 1,
            ease: "power2.out"
        })
        .to(myth1Title, 1, {
            opacity: 1
        })
        .fromTo(myth1Title, 1,{
            opacity: 0,
            y: 200,
            x: 300, 
        },{
            opacity: 1,
            y:0,
            x:0,
            ease: "power2.out"
        })
        .fromTo(person, 1, {
            opacity: 1,
            x: -300,
        },{
            x:0,
            ease: "power2.out"
        })
        .fromTo([table, cageLeft, cageRight], 1, {
            display: 'block',
            opacity: 0,
            ease: "power2.out"
        },{
            opacity:1,
            ease: "power2.out"
        })
        .fromTo([glowRight, glowLeft, glowPerson],1,{
            display: 'block',
            opacity: 0
        },{
            opacity: 0.25
        })

        glowItems();

}

function fadeInScreen2 (clicked) {
    reset()
        fadeIn_2.fromTo(background2, 1, {
            opacity: 0
        },{
            opacity: 1,
            ease: "power2.out"
        })
        .to(myth2Title, 1, {
            opacity: 1
        })
        .fromTo(myth2Title, 1,{
            opacity: 0,
            y: 200,
            x: 300, 
        },{
            opacity: 1,
            y:0,
            x:0,
            ease: "power2.out"
        })
        .fromTo(person2, 1, {
            opacity: 1,
            x: -300,
        },{
            x:0,
            ease: "power2.out"
        })
        .fromTo(doctor, 1, {
            display: 'block',
            opacity: 0,
        },{
            opacity:1,
            ease: "power2.out"
        })
        .fromTo([glowClipboard, glowJacket],1,{
            display: 'block',
            opacity: 0
        },{
            opacity: 0.5
        })

        glowItems();

}

function fadeInScreen3 (clicked) {
    reset()
        fadeIn_3.fromTo(background3, 1, {
            opacity: 0
        },{
            opacity: 1,
            ease: "power2.out"
        })
        .to(myth3Title, 1, {
            opacity: 1
        })
        .fromTo(myth3Title, 1,{
            opacity: 0,
            y: 200,
            x: 300, 
        },{
            opacity: 1,
            y:0,
            x:0,
            ease: "power2.out"
        })
        .fromTo(person3, 1, {
            opacity: 1,
            x: -300,
        },{
            x:0,
            ease: "power2.out"
        })
        .fromTo(bed, 1, {
            display: 'block',
            opacity: 0,
        },{
            opacity:1,
            ease: "power2.out"
        })
        .fromTo([glowChart, glowMatress],1,{
            display: 'block',
            opacity: 0
        },{
            opacity: 0.5
        })

        glowItems();

}

function fadeInScreen4 (clicked) {
    reset()
        fadeIn_4.fromTo(background4, 1, {
            opacity: 0
        },{
            opacity: 1,
            ease: "power2.out"
        })
        .to(myth4Title, 1, {
            opacity: 1
        })
        .fromTo(myth4Title, 1,{
            opacity: 0,
            y: 200,
            x: 300, 
        },{
            opacity: 1,
            y:0,
            x:0,
            ease: "power2.out"
        })
        .fromTo(person4, 1, {
            opacity: 1,
            x: -300,
        },{
            x:0,
            ease: "power2.out"
        })
        .fromTo(table2, 1, {
            display: 'block',
            opacity: 0,
        },{
            opacity:1,
            ease: "power2.out"
        })
        .fromTo(beakers, 1, {
            display: 'block',
            opacity: 0,
        },{
            opacity:1,
            ease: "power2.out"
        })
        .fromTo([glowNeedle, glowBottle, glowBottleEnd ],1,{
            display: 'block',
            opacity: 0
        },{
            opacity: 0.5
        })

        glowItems();

}

function fadeInScreen5 (clicked) {
    reset()
        fadeIn_5.fromTo(nextSteps, 1, {
            opacity: 0
        },{
            opacity: 1,
            ease: "power2.out"
        })
        .fromTo(nextSteps, .5, {
            scale: 1
        },{
            scale: 1.02,
            repeat: 3,
            yoyo: true,
            ease: "power2.out"
        })
        .fromTo(info, 2, {
            opacity: 0
        },{
            opacity: 1,
            ease: "power2.out"
        })

}

// code to make the clickable elements glow
function glowItems () {
    TweenMax.set([glowRight, glowLeft, glowPerson, glowClipboard, glowJacket, glowChart, glowMatress, glowNeedle, glowBottle, glowBottleEnd, nextSteps], {
        transformOrigin: "center center"
    });
        TweenMax.to([glowRight, glowLeft, glowPerson, glowClipboard, glowChart, glowNeedle, glowBottle, glowBottleEnd],1,{
            scaleY: 1.2,
            scaleX: 1.2,
            yoyo: true,
            repeat: -1
        })
        TweenMax.to([glowNeedle, glowBottle, glowBottleEnd],1,{
            scaleY: 1.3,
            scaleX: 1.3,
            yoyo: true,
            repeat: -1
        })
        TweenMax.to(glowPerson ,1,{
            scaleY: 1.1,
            scaleX: 1.2,
            yoyo: true,
            repeat: -1
        })
        TweenMax.to([glowJacket, glowMatress] ,1,{
            scaleY: 1.1,
            scaleX: 1.1,
            yoyo: true,
            repeat: -1
        })
}

// functions to make items fade out
function fadeOutScreen1 (clicked) {
        // reset()
        fadeOut_1.to([glowRight, glowLeft, glowPerson],1,{
            opacity: 0
        })
        .to([table, cageLeft, cageRight], 1, {
            opacity: 0,
            ease: "power2.out"
        })
        .to(person, 1, {
            x: -300,
            ease: "power2.out"
        })
        .to(myth1Title, 1,{
            opacity: 0,
            ease: "power2.out"
        })
        .to(background, 1, {
            opacity: 0
        })
}

function fadeOutScreen2 (clicked) {
    // reset()
    fadeOut_2.to([glowJacket, glowClipboard],1,{
        opacity: 0
    })
    .to(doctor, 1, {
        opacity: 0,
        ease: "power2.out"
    })
    .to(person2, 1, {
        x: -300,
        ease: "power2.out"
    })
    .to(myth2Title, 1,{
        opacity: 0,
        ease: "power2.out"
    })
    .to(background2, 1, {
        opacity: 0
    })
}

function fadeOutScreen3 (clicked) {
    // reset()
    fadeOut_3.to([glowMatress, glowChart],1,{
        opacity: 0
    })
    .to(bed, 1, {
        opacity: 0,
        ease: "power2.out"
    })
    .to(person3, 1, {
        x: -300,
        ease: "power2.out"
    })
    .to(myth3Title, 1,{
        opacity: 0,
        ease: "power2.out"
    })
    .to(background3, 1, {
        opacity: 0
    })
}

function fadeOutScreen4 (clicked) {
    // reset()
    fadeOut_4.to([glowNeedle, glowBottle, glowBottleEnd],1,{
        opacity: 0
    })
    .to(beakers, 1, {
        opacity: 0,
        ease: "power2.out"
    })
    .to(table2, 1, {
        opacity: 0,
        ease: "power2.out"
    })
    .to(person4, 1, {
        x: -300,
        ease: "power2.out"
    })
    .to(myth4Title, 1,{
        opacity: 0,
        ease: "power2.out"
    })
    .to(background4, 1, {
        opacity: 0
    })
}

function fadeOutScreen5 (clicked) {
    // reset()
    fadeOut_5.to(info,1,{
        opacity: 0,
        ease: "power2.out"
    })
    .to(nextSteps, 1, {
        opacity: 0,
        ease: "power2.out"
    })
}

function checkPageFocus() {
    
}
    document.getElementById('fadein1').onclick = fadeInScreen1;
    document.getElementById('fadeout1').onclick = fadeOutScreen1;
    document.getElementById('fadein2').onclick = fadeInScreen2;
    document.getElementById('fadeout2').onclick = fadeOutScreen2;
    document.getElementById('fadein3').onclick = fadeInScreen3;
    document.getElementById('fadeout3').onclick = fadeOutScreen3;
    document.getElementById('fadein4').onclick = fadeInScreen4;
    document.getElementById('fadeout4').onclick = fadeOutScreen4;
    document.getElementById('fadein5').onclick = fadeInScreen5;
    document.getElementById('fadeout5').onclick = fadeOutScreen5;


    // window.addEventListener("click", function(e) {
    //     let screen = document.querySelectorAll('.screen');
    //     // fadeInScreen1 ();
    //     console.log(screen);
    //     console.log(screen[1]);
    // });
    
}
