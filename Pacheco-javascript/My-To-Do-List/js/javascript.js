$(document).ready( function(){

    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>'+ input +  '<i class="fas fa-check"></i> <i class="fas fa-trash-alt"></i></li>');
        $(this).val('');
    })
    

});