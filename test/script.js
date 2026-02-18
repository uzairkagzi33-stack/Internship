$(document).ready(function() {
    $('#fetch-data').click(function() {
        $.get('https://jsonplaceholder.typicode.com/users', function(data) {
            $('#result').empty(); // Clear previous results
            data.forEach(function(user) {
                $('#result').append('<p>Name: ' + user.name + ', Email: ' + user.email + '</p>');
            });
        });
    });
});
