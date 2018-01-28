import {showStats} from './main_functions.js';
$(document).ready(function() {
    var array=showStats();
    $(".reviews").html("Reviews: "+array[0]);
    $(".comments").html("Comments: "+array[1]);
    $(".votes").html("Votes: "+array[2]);
    $('#header a.trigger').on('click', function () {
        $('#menuMain').slideToggle('fast');
        return false;
    });
    $('.block form .iconed input.txt').on('blur', function () {
        if ($(this).val() != '') {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    });
});