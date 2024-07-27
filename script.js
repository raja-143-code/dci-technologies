
let valuedisplays = document.querySelectorAll(".num");
let interval = 2000;

valuedisplays.forEach((valuedisplay) => {
    let statvalue = 0;
    let endvalue = parseInt(valuedisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endvalue);
    let counter = setInterval(function () {
        statvalue += 1;
        valuedisplay.textContent = statvalue;
        if (statvalue == endvalue) {
            clearInterval(counter);
        }
    }, duration);
});

$(document).ready(function () {

    $('.hero2').mouseenter(function () {
        $(this).css("background-color", "black");

       



    });
    $('.hero2').mouseleave(function () {
        $(this).css("background-color", "");

      

    });

    $('.social-icons').mouseenter(function () {
        $(this).css("background-color", "red");

       



    });
    $('.social-icons').mouseleave(function () {
        $(this).css("background-color", "");

      

    });

   


   


   



});
