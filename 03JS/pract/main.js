$(document).ready(function(){   

    let a = ["1","2","3","4","5","6"]
    
    let count = 0;
    $(".content ul li").click(function(){
        count++;
        $("#count").text(count);
    })
    .css("cursor","pointer")
    $(".content").hover(function(){
        $(this).css("color","red")
    });

    // $(".content ul li").click(function(){
    //     $(this).remove()
    // });

    $(".content ul li").click(function(){
        $(this).prependTo($(".content ul"));
    });
// .content ul

    function test(){

        $("#test").html("")
        a.forEach(element => {
            $("#test").append(`<div class="${element == 3 ? "three" : ""} ">
                ${element}
                </div>`);
        });
    }
    test();

    function greaterNum(a,b){
        return a>b ? a : b;
    }  
    // console.log(greaterNum(9,3)); 

    function evenOdd(a)
    {
        return a%2 == 0 ? "even":"odd";
    }
    // console.log(evenOdd(11));



    // $("h2").click(function(){
        // $(this).appendTo($(".content"));
    //     $(".content").after($(this));
    // });

    // $(selector).after(content);
     // $(content).appendTo(selector);

})