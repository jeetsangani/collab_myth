$("#audioBtn").click(function() {
    
    if ($(this).hasClass("unmute")) {
        
        audio.volume = 1;
        
    } else {
        
        audio.volume = 0;
        
    }
    
});