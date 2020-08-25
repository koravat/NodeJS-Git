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
      var storageRef = firebase.storage().ref("Head/b91PbnxQRdUyVCbNV11XUrVJln02_1.png");
      storageRef.getDownloadURL().then(function(url) {
      $("#background").attr("style","background-image: url("+url+");");
      }).catch(function(error) {
      });
      var storageRef = firebase.storage().ref("Head/b91PbnxQRdUyVCbNV11XUrVJln02_2.png");
      storageRef.getDownloadURL().then(function(url) {
      $("#logo").attr("src", url);
      }).catch(function(error) {
      });
      var firebaseRef = firebase.database().ref("StoreDes/b91PbnxQRdUyVCbNV11XUrVJln02");
      firebaseRef.once('value').then(function(dataSnapshot){
          $('#poem').text(dataSnapshot.child('Poem').val()); 
          // console.log(dataSnapshot.child('Storenameeng').val());        
      });
    }
  });
});