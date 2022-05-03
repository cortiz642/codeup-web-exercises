// var content = $('#frame').css('background-color', 'blue').html();
// alert(content);
//
//
// $('.list').css('background-color', 'yellow');
// $('.codeup').css('border', '1px solid red');

// $('li').css({'border':'1px solid red', 'text-align':'center', 'font-size':'40px'})
// $('li').eq(1).css({'border':'1px solid red', 'text-align':'center', 'font-size':'40px'})
// $('h1,p,li').css('border', '1px solid red');
// $('h1,p,li').css('display', 'flex');

// $( "button.continue" ).html( "Next Step..." )
// var hiddenBox = $( "#banner-message" );
// $( "#button-container button" ).on( "click", function( event ) {
//     hiddenBox.show();
// });
// $.ajax({
//     url: "/api/getWeather",
//     data: {
//         zipcode: 97201
//     },
//     success: function( result ) {
//         $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
//     }
// });

// $('#frame').click(function() {
//
//     $(this).css('background-color', 'silver');
// });
//
// // $('p').dblclick(function(e) {
// //     $(this).css('font-size', '50px');
// // });
//
// $('li').hover(function() {
//         $(this).css('background-color', 'red');
//     },
//     function() {
//         $(this).css('background-color', 'black');
//     }
// );

// $( "#frame" ).mousemove(function(event) {
//     var msg = "Handler for .mousemove() called at ";
//     msg += event.pageX + ", " + event.pageY;
//     $( "#list" ).append( "<div>" + msg + "</div>" );
// });
// $(document).keydown(function() {
//     alert('A key was pushed down!');
// });

// $('#target').keyup(function(event){
//     console.log(event.keyCode);
// });

// $( "#target" ).keypress(function() {
//     console.log( "Handler for .keypress() called." );
// });

// $(document).keydown({
//     code : [38,38,40,40,37,39,37,39], // up up down down left right left right
//     cheat: function() {
//         alert( 'Cheat code activated!' );
//     }
// });

// function konami(fn) {
//     var input = "";
//     var pattern = "3838404037393739666513";
//     $(document).keydown(function(e) {
//         input += e.keyCode;
//         if (input.indexOf(pattern) !== -1) {
//             fn();
//             input = "";
//         }
//     });
// }
//
// $(document).ready(function() {
//     konami(function() {
//         alert("You did the Konami! W00t!");
//     });
// });

// var input = "";
// var pattern = "38";
// $('#other').keydown(function(e){
//     input += e.keyCode;
//     if(input.indexOf(pattern) !== -1){
//         fn();
//     }
// })


