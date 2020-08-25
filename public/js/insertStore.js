var number=1;
var num=1;
$('#insertStore').ready(function() {
  var firebaseRef = firebase.database().ref("StoreDes");
  // var description, title ,start , end;
  firebaseRef.once('value').then(function(dataSnapshot) {
      dataSnapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          // console.log(childKey);
          var tableRef = firebase.database().ref("StoreDes/"+childKey);
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
                  // console.log(number)


                 var StoreCard =
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

            //     var titleInsert = ` <p class="lead mb-1 text-warning" >`+data.title+`</p>`;
            //     var desInsert = `<p class="mb-3 text-warning">`+ data.desc+`</p>`;
            //     var h=`<p class="text-warning">`+"START : "+dataS.day+"/"+dataS.month+"/"+dataS.year+`</p>`;
            //     var g=`<p class="text-warning">`+"END : "+dataE.day+"/"+dataE.month+dataE.year+"/"+`</p>
            //     </div>`;
            // var insert = promoCard1+titleInsert+desInsert+h+g;
            // console.log(number)
            number++;
            // console.log(number)
            $('#insertStore').append(StoreCard);

             }).catch(function(error) {
             });
             num++;
           });

      });
  });
});