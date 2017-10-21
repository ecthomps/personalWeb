$(function() {
   
    //check off specific todos by clicking
        //only listens to the li that are clicked inside the ul
    $('ul').on('click', 'li', function() {        
        $(this).toggleClass("check-todos");
    });

    //clicked on a X
    $('ul').on('click', 'span', function(e) {
        $(this).parent().fadeOut(1000, function() {
            $(this).remove();
        });

        //stops the event from bubbling up
        e.stopPropagation();
    });

    $('input[type="text"]').keypress(function(event) {
        
        //checks to see if the keyPressed == the enter key
        if(event.which === 13){
            //get new todoText from input
            var todoText = $(this).val();

            //clears text on input
            $(this).val("");

            //add new todoText to the ul
            $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>')
        }
    })

    $('.fa-pencil-square').on("click", function() {
        $("input[type='text']").fadeToggle(1000);
    })
})