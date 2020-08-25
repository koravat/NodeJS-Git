$('#main-top-bar').ready(function() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        // No User is signed in.  
        $( "#main-top-contact").show();
        $( "#main-top-bar" ).hide();
      }
      else{
        // User is signed in.
        $( "#main-top-contact" ).hide();
        $( "#main-top-bar").show();

        var uid=user.uid;
        // console.log(uid);
        var storageRef = firebase.storage().ref("Head/"+uid+"_3.png");
        storageRef.getDownloadURL().then(function(url) {
        $("#UserLogo").attr("src", url);
        }).catch(function(error) {
        });
        var firebaseRef = firebase.database().ref("StoreDes/"+uid);
        firebaseRef.once('value').then(function(dataSnapshot){
            $('#UserNameEng').text(dataSnapshot.child('Storenameeng').val()); 
            // console.log(dataSnapshot.child('Storenameeng').val());
            
        });
      }
    });
});

function SignOut() {
    dbAuth.signOut();
    window.location = '/puankin';
}

function Mypage() {
    //from gotoStore.js
    $("#Mypage").attr("href", URLstoreProfile(dbAuth.currentUser.uid));
}

function Setting() {
    $("#Pro-key").val(dbAuth.currentUser.uid);
    $("#Pro-settings").submit();
    
}