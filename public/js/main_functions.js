export function showStats(){
    var array =[];
    $.ajax({
        type: "POST",
        url: '/php/ajax/ajax_show_stats.php',
        dataType: "json",
        async: false,
        success: function (resp) {
            array.push(resp[0]['count']);
            array.push(resp[1]['count']);
            array.push(Number(resp[1]['rate'])+Number(resp[0]['rate']));
        }
    });
    return array;
}
