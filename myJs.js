$(function () {
    $("#myForm").submit(handleFormSubmit);
  });
  
  function handleFormSubmit(e) {
        if(
            $('#name').val().length >=5 && $('#password').val().length >= 8 && $('#password').val() === $('#confirm_password').val()
        ){
            alert('Form Submission Successful')
        }
        if(
            $('#name').val().length < 5
        )
        {
            $('#name').css("border","2px solid red")
            $('#name').after(" Name Should be 5 letters long")
        }
        if(
            $('#password').val().length < 8
        )
        {
            $('#password').css("border","2px solid red")
            $('#password').after(" Password should be 8 letters long")
        }
        if(
            $('#password').val() != $('#confirm_password').val() || $('#confirm_password').val().length === 0
        )
        {
            $('#password').css("border","2px solid red")
            $('#confirm_password').css("border","2px solid red")
            $('#confirm_password').after(" Passwords do not match")
        }
  
    e.preventDefault();
  }