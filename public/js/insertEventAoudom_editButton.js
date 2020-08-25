
function Delete_item(keys) {
  
  
  var firebaseRef=firebase.database().ref("Event/" + keys);
  firebaseRef.remove();

  var storageRef = firebase.storage().ref("Event/");
  storageRef.child(keys).delete();
  
  location.reload();
}
var numbe=1;
$('#insertEvent').ready(function() {
  var firebaseRef = firebase.database().ref("Event");
  // var description, title ,start , end;
  firebaseRef.once('value').then(function(dataSnapshot) {
      dataSnapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
    
          var tableRef = firebase.database().ref("Event/"+childKey);
          var data = { desc: "car" , title: "car" , start: "car" , end: "car" , uid: "car"}
          tableRef.once('value').then(function(dataSnapshot) {
               dataSnapshot.forEach(function(childSnapshot) {
                  if(childSnapshot.key=== 'uid')
                 {
                   data.uid = childSnapshot.val();
                 }
                  if(childSnapshot.key ==='desc')
                 {
                   data.desc = childSnapshot.val();
                   // console.log(data.des);
                 }
                 if(childSnapshot.key === 'title')
                 {
                   data.title = childSnapshot.val();
                 }
                 if (childSnapshot.key === 'start')
                 {
                  data.start = childSnapshot.val();
                }
                 if (childSnapshot.key === 'end')
                 {
                  data.end = childSnapshot.val();
                 }
               });
                  var storageRef = firebase.storage().ref('Event');
             storageRef.child(childKey).getDownloadURL().then(function(url) {
               if(data.uid=="b91PbnxQRdUyVCbNV11XUrVJln02")
               {
                 var test = url;

                  var promoCard1 =
                `<div class="col-md-4 p-3">
               <img class="img-fluid d-block w-100 mb-3" src="`+test+`" id="img">`;

                 var titleInsert = ` <p class="lead mb-1 text-warning" >`+data.title+`</p>`;
                 var desInsert = `<p class="mb-3 text-warning">`+ data.desc+`</p>`;
                 var h=`<p class="text-warning">`+"START : "+data.start+`</p>`;
                 var g=`<p class="text-warning">`+"END : "+data.end+`</p>
                 <form action="/puankin/store/editevent" method="post">
                 <button class="ui yellow button" name="childkey" value=`+childKey+` type="submit">EDIT</button>
                 </form>
                 <button class="ui yellow button" onclick="Delete_item(this.value)" name='Del' value=`+childKey+`>Delete</button>
                 </div>`;
             var insert = promoCard1+titleInsert+desInsert+h+g;

             $('#insertEvent').append(insert);
               }
             }).catch(function(error) {
             });
           });
      });
  });
});
