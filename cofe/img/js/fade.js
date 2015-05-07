

  var colours=['#3D566E','#C42D2D','#2b98c0','#16a085','#c0592b'];  // List of colors
    var tempID=0;
    var changeInterval=4000;    // Change interval in miliseconds
    var objectID='#home, #milestones, #charts, #quotes, #contact, .footer, #features ';      // Section to change colours. 
    
    $(document).ready(function(){        
        setInterval(function(){
                $(objectID).animate({backgroundColor: colours[tempID]},500);
                tempID=tempID+1;
                if (tempID>colours.length-1) tempID=0;
            },changeInterval);
    });