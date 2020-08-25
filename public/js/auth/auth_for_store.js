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
    else{
      // User is signed in.
      var url = window.location.href
      var profile = url.split("/")[5]
      var list = {'b91PbnxQRdUyVCbNV11XUrVJln02':'profile-aoudom',
                  'Ce0oG5rdjKY9phcj5LsKrkYcNWM2':'profile-sipsamhang'};
      // console.log(list);
      // console.log(user.uid);
      // console.log(list[user.uid]);
      
      if(list[user.uid] != profile)
      {
        Swal({
          type: 'warning',
          title: 'Warning !',
          text: 'You are not enter this page.Please tryagain.',
        }).then((result) => {
          if (result.value) {
            window.location = '/puankin/store/login';
          }
          else{
            window.location = '/puankin/store/login';
          }
        })  
        
      }
    }
  });
});
