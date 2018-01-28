export function showComments() {
    var all;
    var reviews;
    var comments;
    var rate=[];
    var array=[];
    $.ajax({
        type: "POST",
        url: '/php/sites/ajax/ajax_sites_comments.php',
        dataType: "json",
        async: false,
        success: function (resp) {
            reviews=(resp[0]!=null)?resp[0].length:0;
            comments=(resp[1]!=null)?resp[1].length:0;
            all=reviews+comments;
            $.each(resp[0], function (index, value) {
                if(index<5) {
                    $('.cell #reviews').append('<div class="review" id="'+value['id']+'">');
                    $('.cell #reviews #'+value['id']).append('<p class="author">');
                    $('.cell #reviews #'+value['id']+' .author').append('<a href="/'+value['domain']+'.html">' + value['name'] + '  ' + value['rate'] + '/10 for '+value['domain']);
                    $('.cell #reviews #'+value['id']+' .author').append('<span> '+ value['date']);
                    $('.cell #reviews #'+value['id']).append('<p>' + value['comment']);

                    rate.push(value['rate']);
                }
                else {
                    rate.push(value['rate']);
                }
            });
            
            $.each(resp[1], function (index, value) {
                if(index<10) {
                    $('.row #comments').append('<div class="review" id="'+value['id']+'">');
                    $('.row #comments #'+value['id']).append('<p class="author">');
                    $('.row #comments #'+value['id']+' .author').append('<a href="/'+value['domain']+'.html">' + value['name'] + '  ' + value['rate'] + '/10 for '+value['domain']);
                    $('.row #comments #'+value['id']+' .author').append('<span> '+ value['date']);
                    $('.row #comments #'+value['id']).append('<p>' + value['comment']);

                    rate.push(value['rate']);
                }
                else {
                    rate.push(value['rate']);
                }
            });
        }

    });
    array.push(rate);
    array.push(all);
    return array;
}
export function getTraffic()
{
    var traffic;
    $.ajax({
        type:"POST",
        url: '/php/sites/ajax/ajax_main_traffic.php',
        dataType: "json",
        async: false,
        success: function( resp ) {
            traffic=resp;
        }
    });
    return traffic;
}
export function positiveNegative(rates, all)
{
    var pos=0;
    var neg=0;
    var rateP=0;
    var rateN=0;
    if(rates.length&&all) {
        $.each(rates, function (index, value) {
            if (value > 5) {
                pos++
            };
            if (value < 5) {
                neg++
            };
        });
        rateP = pos * 100 /all;
        rateN = neg*100/all;
    }
    var raiting=[rateP, rateN];
    return raiting;
}
export function countRate(rates)
{
    var sum=0;
    var rate=0;
    if(rates.length) {
        $.each(rates, function (index, value) {
            sum += Number(value);
        });
        rate = sum / rates.length;
    }
    return rate;
}
export class TrafficMath {
    constructor(traffic) {
        this.traffic = traffic;
        var tr=[];
        $.each(traffic, function (index, value) {
            if(value){tr.push(value);}

        });
        var tMin=Math.min.apply(null, tr);
        tMin=String(tMin);
        var leng=tMin.length;
        this.leng =Math.floor(leng/3);
        this.rou=Math.pow(1000,this.leng);
    }

    getTraffic() {
        var traffic=[];
        var rou=this.rou;
        $.each(this.traffic, function (index, value) {
            (value)?traffic[index]=Math.round(value/rou)*rou:traffic[index]=NaN;

        });
        return traffic;
    }
    getRou(){
        return this.rou;
    }
    getYAxe(){
        var yAxe;

        switch (this.leng) {
            case 1:
                yAxe = 'thousands of visits';
                break;
            case 2:
                yAxe = 'millions of visits';
                break;
            case 3:
                yAxe = 'billions of visits';
                break;
            default:
                yAxe = 'Visits';
        }
        return yAxe;
    }
}

