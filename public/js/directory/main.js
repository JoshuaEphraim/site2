import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../Template/css/reset.css';
import '../../Template/css/layout.css';
import '../../css/directory/my.css';
import { makeOptions, showDomains} from './main_functions';
import '../main.js';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
$(document).ready(function() {
    makeOptions();

    showDomains(thisPage,thisCountry,thisRate);

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
    $("#text").on("submit", function () {
        var domain = $("#text [name='domain']").val();

        $.ajax({
            type: "POST",
            url: '/php/ajax/ajax_add_domain.php',
            dataType: "json",
            data: {domain: domain},
            success: function (resp) {
                alert(resp);
            }
        });
    });
    $("#search").keyup(function(){
        var search = $("#search").val();
        $.ajax({
            type: "POST",
            url: "/php/directory/ajax/ajax_search.php",
            data: {"search": search,contry:country,rate:rate},
            cache: false,
            success: function(response){
                $("#resSearch").html(response);
            }
        });
        return false;
    });


});
