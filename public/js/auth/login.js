$(document).ready(function() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        // No User is signed in.
        $("#submit").html('Sign In');
        $("#email").prop('disabled', false);
        $("#password").prop('disabled', false); 
        $("#email").val("");
        $("#password").val("");
        $("#nextpage").hide();
        
      }
      else{
        // User is signed in.
        // window.location = 'enter';
        $("#submit").html('Sign Out');
        $("#email").prop('disabled', true);
        $("#password").prop('disabled', true);
        $("#email").val("You have already to login !!!");
        $("#password").val("");   
        $("#nextpage").show();
      }
    });
});

//function for Sign In & Sign Up
function ToggleSign(){
    var currenUser = firebase.auth().currentUser
    if(currenUser){
        //Sign Out
        dbAuth.signOut();
        $("#submit").html('Sign In');
        Swal(
            'Logout successful!',
            'You have successfully logged out!',
            'success'
          )  
    }
    else
    {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        // console.log(email);
        // console.log(password);
        dbAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
        dbAuth.signInWithEmailAndPassword(email,password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        });

        setTimeout(function() {
            firebase.auth().onAuthStateChanged(user => {
                if (!user) {
                    //แจ้งว่าผิดพลาดอะไร id pass
                    Swal({
                        type: 'error',
                        title: 'Login Failed . . .',
                        text: 'Login attempt with cloud failed !!!',
                        footer: '<a href>Check your email and password and Try again.</a>'
                      })
                      $("#email").val("");
                      $("#password").val("");
                }
                else{
                    if(user.uid == 'Ce0oG5rdjKY9phcj5LsKrkYcNWM2' || user.uid == 'b91PbnxQRdUyVCbNV11XUrVJln02')
                    {
                        //ถ้า login สำเร็จ
                        window.location = 'enter';
                    }
                    else
                    {
                        //No user add to Puankin
                        dbAuth.signOut();
                    }
                }
            });
        }, 1500)
        
    }
}

function Nextpage() {
    window.location = 'enter';
}



