$(document).ready(function () {
    $('#form').submit(function (e) {
        // Prevent default form submission
        e.preventDefault();

        // Get values
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var msg = $('#msg').val().trim();
        
        // Reset the errors
        $(".error").remove();
        var isValidForm = true;

        // Validation Conditions
        if (name.length < 1) {
            $('#name').after('<span class="error" style="color: red;">This field is required</span>');
            isValidForm = false;
        }
        if (email.length < 1) {
            $('#email').after('<span class="error" style="color: red;">This field is required</span>');
            isValidForm = false;
        } else {
            // Basic email format validation
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                $('#email').after('<span class="error" style="color: red;">Please enter a valid email</span>');
                isValidForm = false;
            }
        }
        if (msg.length < 1) {
            $('#msg').after('<span class="error" style="color: red;">This field is required</span>');
            isValidForm = false;
        }

        // If the form is valid, submit it (you can change this to AJAX as needed)
        if (isValidForm) {
            $('#form')[0].submit(); // Or your AJAX submission logic
        }
    });
});
