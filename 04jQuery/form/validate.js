$(function () {

    $("#myForm").submit(function (e) {
    e.preventDefault();

    $(".error").text("");

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val();
    let confirm = $("#confirm").val();
    let gender = $("input[name='gender']:checked").val();
    // Name
    if (name === "") {
        $("#name").next(".error").text("Name is required");
        return;
    }

    // Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        $("#email").next(".error").text("Invalid email");
        return;
    }

    // Password
    if (password.length < 6) {
        $("#password").next(".error").text("Password must be at least 6 characters");
        return;
    }

    // Confirm password
    if (password !== confirm) {
        $("#confirm").next(".error").text("Passwords do not match");
        return;
    }

    // Gender
    if (!gender) {
        $("#genderError").text("Please select gender");
        return;
    }

    alert("Form submitted successfully!");
    });

});
