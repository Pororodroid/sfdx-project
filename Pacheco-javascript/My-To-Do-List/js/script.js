$(document).ready( function(){
    //write all your code inside here to test
    // $('#panel1').css({color:'red', fontWeight:'bold'})

    // $('#button1').html('my button');

    let tweet = `<div style='margin: 20px 0; padding: 10px;
background: #eee'> The big fight live: Ham vs Cheese!
</div>
`;

$('#button1').on('click', function(){
    // $('#panel1').fadeToggle(5000);
    // var str = $("fname").val();
    // $('#panel1 .panel-body').html(str);
    var v = $("#add").val();
    $("#numbers").append("<li>"+ v + "</li>");

});




$('#button2').on('click', function(){
    var str = $("#fname").val();
    $('#panel2 .panel-body').html(str);
    var v = $("#add").val();
    $("#numbers").append("<li>"+ v + "</li>");
});
$('#button3').on('click', function(){
    var str = $("#fname").val();
    $('#panel3 .panel-body').html(str);
    var v = $("#add").val();
    $("#numbers").append("<li>"+ v + "</li>");
});
$('#button4').on('click', function(){
    var str = $("#fname").val();
    $('#panel4 .panel-body').html(str);
    var v = $("#add").val();
    $("#numbers").append("<li>"+ v + "</li>");
});


$('a').attr("target", "_blank");
$('a').attr("href", "https://alphasys.com.au/");


$('li').on('click', function(event) {
    if ($(this).is('.special'))
        (this).append(" special ");
    
})

$('.panel-wrapper').on('click', function(events){
    $( this ).toggleClass( "highlight" );

})

$('li').each(function(index) {
    $(this).append(" new text");
  });



});