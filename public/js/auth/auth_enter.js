$('#EnterPage').ready(function() {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      // User is No signed in.
      Swal({
        type: 'warning',
        title: 'Warning !',
        text: 'You are not logged in. Please login.',
      }).then((result) => {
        if (result.value) {
          window.location = '/puankin/store/login';
        }
        else{
          window.location = '/puankin/store/login';
        }
      })  
    }
    // else{
    //   // User is signed in.
    //   // window.location = 'enter';
    // }
  });
});

function enterpage(){
  firebase.auth().onAuthStateChanged(user => {
    // User is signed in.
    if (user) {
      if(user.uid == 'Ce0oG5rdjKY9phcj5LsKrkYcNWM2')
      {
          //ถ้า login สำเร็จ Sipsamhang
          window.location = '/puankin/store/profile-sipsamhang';
      }
      else if (user.uid == 'b91PbnxQRdUyVCbNV11XUrVJln02') {
          //ถ้า login สำเร็จ Aoudom
          window.location = '/puankin/store/profile-aoudom';
      } 
      else {
          //No user in Puankin
          dbAuth.signOut();
          
      }
    }
    else{
      // User is No signed in.
      window.location = '/puankin/store/login';
    }
  });
}