$('.container').ready(function() {
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