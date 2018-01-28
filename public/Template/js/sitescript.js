// JavaScript Document
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/reset.css';
import '../css/layout.css';
import '../css/my.css';
import { showComments, positiveNegative, countRate, TrafficMath } from './sitescript_functions';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import {Highchart} from './highcharts.js';
$(document).ready(function(){

    $.ajax({
        type:"POST",
        url: '/php/template/ajax/ajax_rate.php',
        data: {domain: d_id},
        async: false,
        success: function( resp ) {
            $('#rateit-range-2 > div.rateit-selected').width(resp*30);
        }
    });
    var ar=showComments();
    var rates=ar[0];
    var all=ar[1];
    var reviews=ar[2];
    var comments=ar[3];
    var array = positiveNegative(rates, all);
    array[2]=parseFloat(countRate(rates).toFixed(1));
    var trafficMath=new TrafficMath(traffic);
    Highchart(array,trafficMath.getTraffic(),tDates,trafficMath.getRou(),trafficMath.getYAxe());
	$('#header .lSide a.trigger').on('click', function(){
		$('#header .menu').slideToggle('fast');
		return false;
	});
    $(".reviews").html("Reviews: "+reviews);
    $(".comments").html("Comments: "+comments);
    $(".votes").html("Votes: "+all);

    $("#comment_0").on("submit", function(){
        var comment = $("#comment_0 [placeholder='Review']").val();
        var e_mail = $("#comment_0 [placeholder='Email']").val();
        var name = $("#comment_0 [placeholder='Name']").val();
        var value = $("#comment_0 [placeholder='Rate']").val();
        $.ajax({
            type:"POST",
            url: '/php/template/ajax/ajax_comment.php',
            data: {comment: comment, name: name, domain: d_id, type: 0, e_mail: e_mail, value: value},
            success: function( resp ) {
                alert(resp);
            }
        });

        location.reload();
        return false;
    });

    $("#comment_1").on("submit", function(){
        var comment = $("#comment_1 [placeholder='Message']").val();
        var e_mail = $("#comment_1 [placeholder='Email']").val();
        var name = $("#comment_1 [placeholder='Name']").val();
        var value = $("#comment_1 [placeholder='Rate']").val();
        $.ajax({
            type:"POST",
            url: '/php/template/ajax/ajax_comment.php',
            data: {comment: comment, name: name, domain: d_id, type: 1, e_mail: e_mail, value: value},
            success: function( resp ) {
                alert(resp);
            }
        });

        location.reload();
        return false;
    });
    
    $('body').on('click.smoothscroll', 'a[href^="#"]', function (e) {
        e.preventDefault();

            var target = this.hash,
                $target = $(target);
        if($target.offset()!=undefined) {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 500, 'swing', function () {
                window.location.hash = target;
            });
        }
    });


    
     $('#leave_review').click(function(){
         $("#mask").show();
         $("#leave").show(300);
     });
    $('#leave_comment').click(function(){
        $("#mask").hide();
        $("#leave").hide(300);
    });



    $('body').on('click.smoothscroll','#open_hidden', function (){
        if($(".hidden_review").css("display")=="none") {
            $("#open_hidden").html("Hide");
            $(".hidden_review").show(300);
        }
        else{

            $("#open_hidden").html('View All');
            $(".hidden_review").hide(300);
        }
    });
    /*

     $('#main').click(function(){
     $("#main1").css("display", "block");
     $("#1").attr("class", "active");
     $("#main2").css("display", "none");
     $("#2").attr("class", "_");
     $("#main3").css("display", "none");
     $("#3").attr("class", "_");
     });
     $('#whois').click(function(){
     $("#main3").css("display", "block");
     $("#3").attr("class", "active");
     $("#main2").css("display", "none");
     $("#2").attr("class", "_");
     $("#main1").css("display", "none");
     $("#1").attr("class", "_");
     });
     */
    $('#rateit-range-2').change(function(){
        alert('Элемент foo был изменен.');
    });
    $('#header a.trigger').on('click', function(){
        $('#menuMain').slideToggle('fast');
        return false;
    });
    $('.block form .iconed input.txt').on('blur', function(){
        if ($(this).val() != '') {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    });

});
