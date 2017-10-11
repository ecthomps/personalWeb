// script.js

$(function() {
/*
    Animate JQUERY
*/ 

    //click the GO button
    $('#go').click(function() {

        function checkForCompletion(){
        
            //function to check if the car won the race
            if(isComplete === false){
                isComplete = true;
            } else {
                place = 'second';
            }
        }

        //get the width of the car
        var carWidth = $('#car1').width();

        //get the width of the raceTrack
        var raceTrackWidth = $(window).width() - carWidth;

        //generate a random number between 1 and 5000
        var raceTime1 =  Math.floor( (Math.random() * 5000) + 1);
        var raceTime2 =  Math.floor( (Math.random() * 5000) + 1);

        //set a flag variable to false for race complete
        var isComplete = false;

        //set a flag variable to first for car position
        var place = 'first';

        //animate car1
        $('#car1').animate({
            left: raceTrackWidth
        }, raceTime1, function() {

            //animation is complete

            //run a function
            checkForCompletion();

            //give some text feedback in the race info box
            $('#raceInfo1 span').text(' finished in ' + place + ' place and clocked in' 
                                      + ' at ' + raceTime1 + 'ms');
        })

        //animate car2
        $('#car2').animate({
            left: raceTrackWidth
        }, raceTime2, function() {

            //animation is complete

            //run a function
            checkForCompletion();

            //give some text feedback in the race info box
            $('#raceInfo2 span').text(' finished in ' + place + ' place and clocked in' 
                                      + ' at ' + raceTime2 + 'ms');
        })

        $('#reset').click(function() {

            //set car position to start
            $('.car').css('left', '0');            

            //clear raceInfo text
            $('.raceInfo span').text('');
        })
    })

})  //document.ready function