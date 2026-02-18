$(document).ready(function () {
    let count = 0
    $("#result").text(count)
    $("#inc").click(function(){
        count = count+1;
        $("#result").text(count)
})
    $("#dec").click(function(){
        count= count-1;
        $("#result").text(count)
})
});