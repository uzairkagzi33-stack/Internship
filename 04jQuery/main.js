$(document).ready(function () {

    let arr = ['uzair','manisha','keval']
    $(".test").text(arr.join(', '))

    $(".show").click(function(){

        let a = prompt("Enter a String");
        // console.log(a);
        if(!a){
            return;
        }
        else{

            arr.splice(Math.floor(arr.length/2), 0, a);
            console.log(arr);
            $(".test").text(arr.join(', '));
        }

    })
});
