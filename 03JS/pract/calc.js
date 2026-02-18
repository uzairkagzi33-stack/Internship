$(document).ready(function () {
    $('#add').click(function() {
        calculate('+');
        $("#ope").text("+")
    });
    $('#subtract').click(function() {
        calculate('-');
        $("#ope").text("-")
    });
    $('#multiply').click(function() {
        calculate('*');
        $("#ope").text("*")
    });
    $('#divide').click(function() {
        calculate('/');
        $("#ope").text("/")
    });

    function calculate(operation) {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var result;
        if (isNaN(num1) || isNaN(num2)) {
            result = 'Invalid input';
        } else {
            switch(operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        result = 'Cannot divide by zero';
                    } else {
                        result = num1 / num2;
                    }
                    break;
            }
        }
        $("#calculate").click(function(){

            $('#result').text('Result: ' + result);
        })
        
    }
});
