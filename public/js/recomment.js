var number=1;
var num=1;
$('#insertStore').ready(function() {
  var firebaseRef = firebase.database().ref("StoreRec");
  // var description, title ,start , end;
  firebaseRef.once('value').then(function(dataSnapshot) {
      dataSnapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childVal = childSnapshot.val();
          // console.log(childKey);
          var tableRef = firebase.database().ref("StoreDes/"+childVal);
          var data = { Address: "car" , Close: "car" , Open: "car" , Phone: "car" , Storenameth: "car" , Storenameeng: "car" , Uid: "car"}
          
          tableRef.once('value').then(function(dataSnapshot) {
               dataSnapshot.forEach(function(childSnapshot) {
                  if(childSnapshot.key=== 'Address')
                 {
                   data.Address = childSnapshot.val();
                    // console.log(data.Address)
                 }
                  if(childSnapshot.key ==='Close')
                 {
                   data.Close = childSnapshot.val();
                    // console.log(data.Close)
                 }
                 if(childSnapshot.key === 'Open')
                 {
                   data.Open = childSnapshot.val();
                 }
                 if(childSnapshot.key === 'Phone')
                 {
                   data.Phone = childSnapshot.val();
                 }
                 if(childSnapshot.key === 'Storenameeng')
                 {
                   data.Storenameeng = childSnapshot.val();
                 }
                 if(childSnapshot.key === 'Storenameth')
                 {
                   data.Storenameth = childSnapshot.val();
                 }
                 if(childSnapshot.key === 'Uid')
                 {
                   data.Uid = childSnapshot.val();
                 }
  
               });
               var storageRef = firebase.storage().ref("Picture/");
                storageRef.child(data.Uid+"_.png").getDownloadURL().then(function(url) {

                var Store =
            // `<div class="row my-5 bg-primary animate-in-down">
            //   <div class="p-0 col-md-6">
            //     <img class="d-block img-fluid my-3" src="`+url+`" atl="first slide">
            //   </div>
            //   <div class="p-4 col-md-6 align-self-center">
            //     <h2 class="text-warning">`+data.Storenameth+`|`+data.Storenameeng+`</h2>
            //     <p class="text-warning">OPEN : `+data.Open+`- CLOSE :`+data.Close+`</p>
            //     <p class="text-warning">`+data.Address+`</p>
            //     <p class="text-warning">`+data.Phone+`</p>
            //     <button class="btn btn-two square" onclick="`+dataSnapshot.key+`();">Go to store!</button>
            //   </div>
            // </div>`;
            `<div class="container">
      <div class="row my-5 bg-primary animate-in-down animate-in-done">
        <div class="p-0 col-md-6">
          <div class="carousel slide" data-ride="carousel" id="carousel`+number+`">
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img class="d-block img-fluid w-100" src="`+url+`" data-holder-rendered="true">
              </div>
            </div>           
          </div>
        </div>
        <div class="p-4 col-md-6 align-self-center">
          <h2 class="text-warning" style="font-size:32">`+data.Storenameth+` | `+data.Storenameeng+`</h2>
          <p class="my-2">contact us : `+data.Address+`</p>
          <p class="my-2">Phone : `+data.Phone+`</p>
          <p class="my-2">OPEN : `+data.Open+` - CLOSE : `+data.Close+`</p>
          <button class="btn btn-two square" onclick="`+dataSnapshot.key+`();">Go to store!</button>
        </div>
      </div>
    </div>`;

              number++;
              $('#insertStore').append(Store);

             }).catch(function(error) {
             });
             num++;
           });

      });
  });
});