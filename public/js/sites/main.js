import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../Template/css/reset.css';
import '../../Template/css/layout.css';
import '../../css/sites/my.css';
import { showComments, getTraffic, positiveNegative, countRate, TrafficMath } from './main_functions';
import '../main.js';
import {Highchart} from '../../Template/js/highcharts.js';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
$(document).ready(function() {
    var ar=showComments();
    var rates=ar[0];
    var all=ar[1];
    var reviews=ar[2];
    var comments=ar[3];
    var array = positiveNegative(rates, all);
    array[2]=parseFloat(countRate(rates).toFixed(1));
    var traffic = getTraffic();
    var tDates = traffic[0];
    traffic = traffic[1];
    var trafficMath=new TrafficMath(traffic);
    Highchart(array,trafficMath.getTraffic(),tDates,trafficMath.getRou(),trafficMath.getYAxe());
    function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    $("#update").click(function () {
        if (confirm("Обновить все сайты?")) {
            $("#update").attr("class", "active");
            $.ajax({
                type: "POST",
                url: '/php/ajax/ajax_update.php',
                dataType: "json",
                data: {comment: "comment"},
                success: function (resp) {
                    alert("Сайты успешно обновлены!");
                    $("#update").attr("class", "_");
                }
            });
        }
    });
    $("#clean").click(function () {
        if (confirm("Удалить все комментарии?")) {
            $.ajax({
                type: "POST",
                url: '/php/ajax/ajax_comments_delete.php',
                dataType: "json",
                data: {comment: "comment"},
                success: function (resp) {
                    alert("Все комментарии удалены");
                }
            });
            location.reload();
        }
    });
    $(".delete").click(function () {

        if (confirm("Удалить комментарий?")) {
            var comment=$(this).attr("id");
            $.ajax({
                type: "POST",
                url: '/php/ajax/ajax_comment_delete.php',
                dataType: "json",
                data: {comment: comment},
                success: function (resp) {
                    alert("Комментарий удален");
                }
            });
            location.reload();
        }
    });
    $("#add").click(function () {
        if($("#text").css("display")=="none") {
            $("#text").css("display", "block");
            $("#add").attr("class", "active");
        }
        else
        {
            $("#text").css("display", "none");
            $("#add").attr("class", "_");
        }
    });

});


