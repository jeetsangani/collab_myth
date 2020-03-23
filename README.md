# collab_myth

For operating this app you need to open index.html on live server or on domain or subdomain.

assets folder   => CSS
                => Icons
                => Img
                => Js
                => SVG

Audio Folder


Index.html


    CSS =>  foundation.css (foundation css)
        =>  Foundation.min.css (foundation css)
        =>  landscape.css (For making page work as on Landscape mode)
        =>  main.css (for styling the page and positioning elements )
        =>  style.css (for styling web app just color, margin, padding)
        =>  style.scss ( for defining color, margin sizes for styling.css )
        
    Icons => Folders for icons of the tutorial page

    img => img folder is for all the small image used in web app like arrows in timeline

    JS  => Vendor ( this js files are for foundation implementation )

        => app.js ( has code for all gsap transtion for myths, model, voice activation)

        => jquery ( for implementation of jQuery code )

        => main.js ( has code to activate and deactivate side arrows set the width of the timeline, tracking timeline button with the page with help of data, animaotion for slides )

        => mute.js ( for muting  web page and unmuting web page )

        => swipe-content.js ( for swipe containers as per the buttons and sequence and track it to slide left or right )

        => tutorial.js ( this js file is used for tutorial page for transitions and to make it more interactive )

        => util.js ( to make changes to the active conatiner like changing class name and according to class name styling the active container and setting up width pixels according to content)

    SVG => svg folder has all the SVG images that we used in our web app

    Audio => audio folder has all the audio file that we used in our web app (which is helpful for accessible visitors)

    index.html => index.html has all the code for combining all the files and put this web app in one peice
 